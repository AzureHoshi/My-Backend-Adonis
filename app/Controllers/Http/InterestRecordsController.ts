import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import InterestRecord from "App/Models/InterestRecord";

export default class InterestRecordsController {
  public async index({ response }: HttpContextContract) {
    const interestRecords = await InterestRecord.query()
      .preload("collegian")
      .preload("interestAnswer", (query) => {
        query.preload("interestQuestion");
      })
      .where("is_deleted", false)
      .orderBy("updated_at", "desc");
    return response.status(200).json({ data: interestRecords, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    const storeManySchema = schema.create({
      interest_records: schema.array().members(
        schema.object().members({
          collegian_code: schema.string(),
          interest_answer_id: schema.number(),
        })
      ),
    });

    try {
      const payload = await request.validate({ schema: storeManySchema });

      const interestRecords = InterestRecord.createMany(
        payload.interest_records
      );

      return response.status(201).json({ data: interestRecords, status: 201 });
    } catch (error) {
      return response.status(400).json({
        message: "Incorrect or incomplete information",
        status: 400,
      });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const updateSchema = schema.create({
        collegian_code: schema.string.optional(),
        interest_answer_id: schema.number.optional(),
      });

      const payload = await request.validate({ schema: updateSchema });
      const interestRecord: any = await InterestRecord.find(params.id);
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
          message: `InterestRecord updated byId ${params.id} success`,
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
      const interestRecord: any = await InterestRecord.find(params.id);
      if (!interestRecord) {
        return response
          .status(404)
          .json({ message: "InterestRecord not found", status: 404 });
      }

      if (interestRecord.is_deleted) {
        return response.status(200).json({
          message: "InterestRecord already deleted",
          status: 200,
        });
      }

      interestRecord.merge({ is_deleted: true });
      await interestRecord.save();
      return response.status(200).json({
        data: interestRecord,
        status: 200,
        message: `InterestRecord deleted byId ${params.id} success`,
      });
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async chartDonut({ request, response }: HttpContextContract) {
    try {
      const chartDonutSchema = schema.create({
        collegian_code: schema.string(),
      });

      const payload = await request.validate({ schema: chartDonutSchema });

      return response.status(200).json({
        data: payload,
        status: 200,
        message: `InterestRecord chartDonut byId ${payload.collegian_code} success`,
      });
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Incorrect or incomplete information", status: 400 });
    }
  }
}
