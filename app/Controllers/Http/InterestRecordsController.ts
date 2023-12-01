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
    try {
      const storeManySchema = schema.create({
        interest_records: schema.array().members(
          schema.object().members({
            collegian_code: schema.string(),
            interest_answer_id: schema.number(),
          })
        ),
      });

      const payload = await request.validate({ schema: storeManySchema });

      const maxCountWithCollegianCode = await InterestRecord.query()
        .where("collegian_code", payload.interest_records[0].collegian_code)
        .where("is_deleted", false)
        .max("interest_record_count");

      console.log(
        "maxCountWithCollegianCode",
        maxCountWithCollegianCode[0].$extras["max(`interest_record_count`)"]
      );

      const maxCount =
        maxCountWithCollegianCode[0].$extras["max(`interest_record_count`)"];

      if (maxCount === null) {
        const interestRecords = await InterestRecord.createMany(
          payload.interest_records
        );

        return response.status(201).json({
          data: interestRecords,
          status: 201,
          message: "InterestRecord created success",
        });
      } else {
        const interestRecords = await InterestRecord.createMany(
          payload.interest_records.map((item) => {
            return {
              ...item,
              interest_record_count: maxCount + 1,
            };
          })
        );

        return response.status(201).json({
          data: interestRecords,
          status: 201,
          message: "InterestRecord created success",
        });
      }
    } catch (error) {
      return response.status(400).json({
        message: "Incorrect or incomplete information",
        status: 400,
      });
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

      const interestRecords = await InterestRecord.query().where(
        "collegian_code",
        payload.collegian_code
      );

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
