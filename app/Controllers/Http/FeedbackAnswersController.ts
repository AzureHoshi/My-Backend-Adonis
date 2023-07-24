import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import FeedbackAnswer from "App/Models/FeedbackAnswer";

const feedbackAnswerSchema = schema.create({
  feedback_id: schema.number(),
  feedback_answer_choice: schema.string([rules.maxLength(255)]),
  feedback_answer_number: schema.number(),
});
export default class FeedbackAnswersController {
  public async index({ response }: HttpContextContract) {
    const feedbackAnswers = await FeedbackAnswer.query()
      .preload("feedback")
      .where("is_deleted", false)
      .orderBy("updated_at", "desc");
    return response.status(200).json({ data: feedbackAnswers, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: feedbackAnswerSchema });
      const feedbackAnswer: FeedbackAnswer = await FeedbackAnswer.create(
        payload
      );
      return response.status(201).json({ data: feedbackAnswer, status: 201 });
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const id = params.id;
      const payload = await request.validate({ schema: feedbackAnswerSchema });
      const feedbackAnswer: any = await FeedbackAnswer.find(id);
      if (!feedbackAnswer) {
        return response
          .status(404)
          .json({ message: "FeedbackAnswer not found", status: 404 });
      } else {
        feedbackAnswer.merge(payload);
        await feedbackAnswer.save();
        return response.status(200).json({
          data: feedbackAnswer,
          status: 200,
          message: `FeedbackAnswer updated byId ${id} success`,
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
      const feedbackAnswer: any = await FeedbackAnswer.find(id);
      if (!feedbackAnswer) {
        return response
          .status(404)
          .json({ message: "FeedbackAnswer not found", status: 404 });
      } else if (feedbackAnswer.is_deleted) {
        return response
          .status(404)
          .json({ message: "FeedbackAnswer already deleted", status: 404 });
      } else {
        feedbackAnswer.is_deleted = true;
        await feedbackAnswer.save();
        return response.status(200).json({
          data: feedbackAnswer,
          status: 200,
          message: `FeedbackAnswer deleted byId ${id} success`,
        });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ message: "incorrect or incomplete information", status: 400 });
    }
  }
}
