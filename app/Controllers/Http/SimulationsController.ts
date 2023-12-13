import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import { sortBy } from "lodash";

import JobPosition from "App/Models/JobPosition";
import SubjectJobRelated from "App/Models/SubjectJobRelated";

export default class SimulationsController {
  public async simulationResultBySubject({
    request,
    response,
  }: HttpContextContract) {
    console.log("test", request.body().subject_id);

    try {
      const dataSchema = schema.create({
        subject_id: schema.array().members(schema.number()),
      });

      const payload = await request.validate({
        schema: dataSchema,
      });

      const dataJobWithSubject = await SubjectJobRelated.query()
        .where("is_deleted", false)
        .whereIn("subject_id", payload.subject_id);

      console.log(dataJobWithSubject);

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

      console.log(uniqueJobIds);
      console.log(countByJobId);

      const jobData = await JobPosition.query()
        .where("is_deleted", false)
        .whereIn("job_position_id", uniqueJobIds);

      const sortedJobData = sortBy(jobData, (job) =>
        uniqueJobIds.indexOf(job.job_position_id)
      );

      return response.status(200).json({
        data: sortedJobData,
        status: 200,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
