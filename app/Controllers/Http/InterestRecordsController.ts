import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import InterestRecord from "App/Models/InterestRecord";

const interestRecordSchema = schema.create({
  collegian_id: schema.number(),
  interest_question_id: schema.number(),
  interest_answer_id: schema.number(),
});

export default class InterestRecordsController {
  public async index({ response }: HttpContextContract) {
    const interestRecords = await InterestRecord.query()
      .preload("collegian")
      .preload("interestQuestion")
      .preload("interestAnswer")
      .where("interest_records.is_deleted", false)
      .orderBy("interest_records.updated_at", "desc");
    return response.status(200).json({ data: interestRecords, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({
        schema: interestRecordSchema,
      });
      const interestRecord = await InterestRecord.create(payload);
      return response.status(201).json({ data: interestRecord, status: 201 });
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const id = params.id;
      const payload = await request.validate({ schema: interestRecordSchema });
      const interestRecord: any = await InterestRecord.find(id);
      if (!interestRecord) {
        return response
          .status(404)
          .json({ message: "InterestRecord not found", status: 404 });
      } else {
        interestRecord.merge(payload);
        await interestRecord.save();
        return response.status(200).json({
          data: interestRecord,
          status: 200,
          message: `InterestRecord updated byId ${id} success`,
        });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const id = params.id;
      const interestRecord: any = await InterestRecord.find(id);
      if (!interestRecord) {
        return response
          .status(404)
          .json({ message: "InterestRecord not found", status: 404 });
      } else if (interestRecord.is_deleted) {
        return response
          .status(404)
          .json({ message: "InterestRecord already deleted", status: 404 });
      } else {
        interestRecord.is_deleted = true;
        await interestRecord.save();
        return response.status(200).json({
          data: interestRecord,
          status: 200,
          message: `InterestRecord deleted byId ${id} success`,
        });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Incorrect or incomplete information", status: 400 });
    }
  }
}
