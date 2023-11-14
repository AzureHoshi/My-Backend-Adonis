import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import StudyPlanRecord from "App/Models/StudyPlanRecord";

export default class StudyPlanRecordsController {
  public async index({ response }: HttpContextContract) {
    try {
      const studyPlanRecords = await StudyPlanRecord.query()
        .where("is_deleted", false)
        .preload("subjects", (query) => {
          query.select([
            "subject_id",
            "subject_name_th",
            "subject_name_en",
            "subject_credit",
          ]);
        });

      console.log(studyPlanRecords);

      return response.status(200).json({
        data: studyPlanRecords,
        status: 200,
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Internal Server Error", status: 500 });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const studyPlanRecords = await StudyPlanRecord.query()
        .where("study_plan_id", params.id)
        .where("is_deleted", false)
        .preload("subjects", (query) => {
          query.select([
            "subject_id",
            "subject_code",
            "subject_name_th",
            "subject_name_en",
            "subject_credit",
          ]);
        });

      console.log(studyPlanRecords);

      if (!studyPlanRecords || studyPlanRecords.length === 0) {
        return response
          .status(404)
          .json({ message: "StudyPlanRecord not found", status: 404 });
      } else {
        return response.status(200).json({
          data: studyPlanRecords,
          status: 200,
        });
      }
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Internal Server Error", status: 500 });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const storeSchema = schema.create({
      study_plan_id: schema.number(),
      subject_id: schema.number.optional(),
      study_plan_record_elective_course: schema.string.optional(),
      study_plan_record_semester: schema.number(),
      study_plan_record_year: schema.number(),
    });

    try {
      const payload = await request.validate({ schema: storeSchema });
      const studyPlanRecord: StudyPlanRecord = await StudyPlanRecord.create(
        payload
      );

      if (!studyPlanRecord) {
        return response.status(500).json({
          message: "Internal Server Error: Unable to create StudyPlanRecord",
          status: 500,
        });
      } else {
        return response.status(201).json({
          data: studyPlanRecord,
          status: 201,
          message: `StudyPlanRecord created success`,
        });
      }
    } catch (error) {
      return response.status(400).json({
        message: "Incorrect or incomplete information",
        status: 400,
        error: error.message,
      });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const updateSchema = schema.create({
      study_plan_id: schema.number(),
      subject_id: schema.number.optional(),
      study_plan_record_elective_course: schema.string.optional(),
      study_plan_record_semester: schema.number(),
      study_plan_record_year: schema.number(),
    });

    try {
      const id = params.id;
      const payload = await request.validate({ schema: updateSchema });
      const studyPlanRecord: any = await StudyPlanRecord.find(id);
      if (!studyPlanRecord) {
        return response.status(404).json({
          message: "StudyPlanRecord not found",
          status: 404,
        });
      } else {
        studyPlanRecord.merge(payload);
        await studyPlanRecord.save();
        return response.status(200).json({
          data: studyPlanRecord,
          status: 200,
          message: `StudyPlanRecord updated byId ${id} success`,
        });
      }
    } catch (error) {
      return response.status(400).json({
        message: "incorrect or incomplete information",
        status: 400,
        error: error.message,
      });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const id = params.id;
      const studyPlanRecord: any = await StudyPlanRecord.find(id);
      if (!studyPlanRecord) {
        return response.status(404).json({
          message: "StudyPlanRecord not found",
          status: 404,
        });
      } else if (studyPlanRecord.is_deleted) {
        return response.status(200).json({
          message: "StudyPlanRecord already deleted",
          status: 200,
        });
      } else {
        studyPlanRecord.merge({ is_deleted: true });
        await studyPlanRecord.save();
        return response.status(200).json({
          data: studyPlanRecord,
          status: 200,
          message: `StudyPlanRecord deleted byId ${id} success`,
        });
      }
    } catch (error) {
      return response.status(400).json({
        message: "incorrect or incomplete information",
        status: 400,
        error: error.message,
      });
    }
  }
}
