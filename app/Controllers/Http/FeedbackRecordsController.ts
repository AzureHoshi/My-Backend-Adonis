import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import FeedbackRecord from "App/Models/FeedbackRecord";

const feedbackRecordStoreSchema = schema.create({
  feedback_id: schema.number(),
  collegian_id: schema.number(),
  feedback_record_answer: schema.string.optional({ trim: true }, [
    rules.maxLength(255),
  ]),
});

export default class FeedbackRecordsController {
  public async index({ response }: HttpContextContract) {
    try {
      const feedbacks = await FeedbackRecord.query();

      return response.status(200).json({ data: feedbacks, status: 200 });
    } catch (error) {
      return response.status(500).json({ message: error.message, status: 500 });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    console.log("feedback record");
    console.log(request.body());

    try {
      const payload = await request.validate({
        schema: feedbackRecordStoreSchema,
      });

      const feedback = await FeedbackRecord.create(payload);

      return response.status(201).json({ data: feedback, status: 201 });
    } catch (error) {
      return response.status(500).json({ message: error.message, status: 500 });
    }
  }
}
