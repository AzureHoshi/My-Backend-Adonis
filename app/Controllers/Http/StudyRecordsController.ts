import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import StudyRecord from "App/Models/StudyRecord";

const studyRecordSchema = schema.create({
  collegian_id: schema.number(),
  subject_id: schema.number(),
  study_record_semester: schema.number(),
  study_record_year: schema.number(),
  study_record_grade: schema.string({ trim: true }, [rules.maxLength(1)]),
});

export default class StudyRecordsController {
  public async index({ response }: HttpContextContract) {
    const studyRecord = await StudyRecord.query()
      .preload("collegians")
      .preload("subjects")
      .where("is_deleted", false)
      .orderBy("updated_at", "desc");
    return response.status(200).json({ data: studyRecord, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: studyRecordSchema });
      const studyRecord: StudyRecord = await StudyRecord.create(payload);
      return response.status(201).json({ data: studyRecord, status: 201 });
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const id = params.id;
      const payload = await request.validate({ schema: studyRecordSchema });
      const studyRecord: any = await StudyRecord.find(id);
      if (!studyRecord) {
        return response
          .status(404)
          .json({ message: "StudyRecord not found", status: 404 });
      } else {
        studyRecord.merge(payload);
        await studyRecord.save();
        return response.status(200).json({
          data: studyRecord,
          status: 200,
          message: `StudyRecord updated byId ${id} success`,
        });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ message: "incorrect or incomplete information", status: 400 });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const id = params.id;
      const studyRecord: any = await StudyRecord.find(id);
      if (!studyRecord) {
        return response
          .status(404)
          .json({ message: "StudyRecord not found", status: 404 });
      } else if (studyRecord.is_deleted) {
        return response
          .status(404)
          .json({ message: "StudyRecord already deleted", status: 404 });
      } else {
        studyRecord.merge({ is_deleted: true });
        await studyRecord.save();
        return response.status(200).json({
          data: studyRecord,
          status: 200,
          message: `StudyRecord deleted byId ${id} success`,
        });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ message: "incorrect or incomplete information", status: 400 });
    }
  }
}
