import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import { sortBy } from "lodash";

import JobPosition from "App/Models/JobPosition";
import SubjectJobRelated from "App/Models/SubjectJobRelated";
import Subject from "App/Models/Subject";
import SimulationsJobRec from "App/Models/SimulationsJobRec";
import SimulationsSubjectRec from "App/Models/SimulationsSubjectRec";

export default class SimulationsController {
  public async simulationResultBySubject({
    request,
    response,
  }: HttpContextContract) {
    try {
      const dataSchema = schema.create({
        subject_id: schema.array().members(schema.number()),
        collegian_code: schema.string.optional(),
      });

      const payload = await request.validate({
        schema: dataSchema,
      });

      const dataJobWithSubject = await SubjectJobRelated.query()
        .where("is_deleted", false)
        .whereIn("subject_id", payload.subject_id);

      if (dataJobWithSubject.length === 0) {
        // subjectJobRelated not found
        return response.status(200).json({
          data: [],
          status: 200,
        });
      }

      const jobIds: number[] = [];
      const countByJobId: Record<number, number> = {};

      const uniqueJobIds = dataJobWithSubject.reduce((uniqueIds, item) => {
        if (!jobIds.includes(item.job_position_id)) {
          jobIds.push(item.job_position_id);
          uniqueIds.push(item.job_position_id);

          // เพิ่มจำนวนครั้งที่ job_position_id ปรากฏใน countByJobId
          countByJobId[item.job_position_id] =
            (countByJobId[item.job_position_id] || 0) + 1;
        } else {
          // กรณี job_position_id ซ้ำ ให้ย้ายไปข้างหน้า
          const index = uniqueIds.indexOf(item.job_position_id);
          if (index !== -1) {
            uniqueIds.splice(index, 1);
            uniqueIds.unshift(item.job_position_id);
          }
        }
        return uniqueIds;
      }, [] as number[]);

      // จัดเรียง uniqueJobIds ตามจำนวนครั้งที่ปรากฏ จากมากไปหาน้อย
      uniqueJobIds.sort((a, b) => countByJobId[b] - countByJobId[a]);

      const dataJob = await JobPosition.query()
        .where("is_deleted", false)
        .whereIn("job_position_id", uniqueJobIds);

      const dataJobWithSubjects = await Promise.all(
        dataJob.map(async (job) => {
          const subjects = await Subject.query()
            .where("is_deleted", false)
            .whereHas("subject_job_related", (query) => {
              query.where("job_position_id", job.job_position_id);
            });

          return {
            ...job.$attributes,
            subjects: subjects.map((subject) => subject),
          };
        })
      );

      const sortedDataJob = sortBy(dataJobWithSubjects, (job) =>
        uniqueJobIds.indexOf(job.job_position_id)
      );

      if (!payload.collegian_code) {
        await SimulationsSubjectRec.createMany(
          payload.subject_id.map((subject_id) => ({
            collegian_code: "guest",
            subject_id,
          }))
        );
      } else {
        await SimulationsSubjectRec.createMany(
          payload.subject_id.map((subject_id) => ({
            collegian_code: payload.collegian_code,
            subject_id,
          }))
        );
      }

      return response.status(200).json({
        data: sortedDataJob,
        status: 200,
      });
    } catch (error) {
      return response.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }

  public async simulationResultByJob({
    request,
    response,
  }: HttpContextContract) {
    try {
      const dataSchema = schema.create({
        job_position_id: schema.number(),
        collegian_code: schema.string.optional(),
      });

      const payload = await request.validate({
        schema: dataSchema,
      });

      const dataSubjectWithJobID = await Subject.query().whereHas(
        "subject_job_related",
        (query) => {
          query.where("job_position_id", payload.job_position_id);
        }
      );

      if (dataSubjectWithJobID.length === 0) {
        // subjectJobRelated not found
        return response.status(200).json({
          data: [],
          status: 200,
        });
      }

      const subjectIds = dataSubjectWithJobID.map(
        (subject) => subject.subject_id
      );

      const dataJobWithSubject = await SubjectJobRelated.query()
        .where("is_deleted", false)
        .where(function (query) {
          query
            .where("job_position_id", payload.job_position_id)
            .orWhereIn("subject_id", subjectIds);
        });

      const uniqueJobIds: number[] = [payload.job_position_id];
      const countByJobId: Record<number, number> = {};

      // Count occurrences of job_position_id and accumulate uniqueJobIds
      dataJobWithSubject.forEach((item) => {
        if (item.job_position_id !== payload.job_position_id) {
          countByJobId[item.job_position_id] =
            (countByJobId[item.job_position_id] || 0) + 1;

          if (!uniqueJobIds.includes(item.job_position_id)) {
            uniqueJobIds.push(item.job_position_id);
          }
        }
      });

      // Sort uniqueJobIds by the count of occurrences
      uniqueJobIds.sort((a, b) => countByJobId[b] - countByJobId[a]);

      let dataJobPosition = await JobPosition.query()
        .where("is_deleted", false)
        .whereIn("job_position_id", uniqueJobIds);

      // Fetch subjects for each job position
      const dataJobPositionWithSubjects = await Promise.all(
        dataJobPosition.map(async (job) => {
          const subjects = await Subject.query()
            .where("is_deleted", false)
            .whereHas("subject_job_related", (query) => {
              query.where("job_position_id", job.job_position_id);
            });

          return {
            job_position_id: job.job_position_id,
            job_position_name: job.job_position_name,
            is_deleted: job.is_deleted,
            createdAt: job.createdAt,
            updatedAt: job.updatedAt,
            subjects: subjects.map((subject) => subject),
          };
        })
      );

      // Sort dataJobPosition based on the count from countByJobId
      const dataJobPositionResult = dataJobPositionWithSubjects.sort((a, b) => {
        if (a.job_position_id === payload.job_position_id) {
          return -1; // Move payload.job_position_id to the beginning
        } else if (b.job_position_id === payload.job_position_id) {
          return 1; // Move payload.job_position_id to the beginning
        } else {
          return (
            countByJobId[b.job_position_id] - countByJobId[a.job_position_id]
          );
        }
      });

      if (!payload.collegian_code) {
        await SimulationsJobRec.create({
          collegian_code: "guest",
          job_position_id: payload.job_position_id,
        });
      } else {
        await SimulationsJobRec.create({
          collegian_code: payload.collegian_code,
          job_position_id: payload.job_position_id,
        });
      }

      return response.status(200).json({
        data: dataJobPositionResult,
        status: 200,
      });
    } catch (error) {
      return response.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }
}
