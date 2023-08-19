import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import Feedback from "App/Models/Feedback";

const feedbackSchema = schema.create({
  feedback_question: schema.string([rules.maxLength(255)]),
  feedback_type: schema.boolean(),
});
export default class FeedbacksController {
  public async index({ response }: HttpContextContract) {
    try {
      const feedbacks = await Feedback.query().where("is_deleted", false);

      const feedbackAddAnswer = await Promise.all(
        feedbacks.map(async (feedback) => {
          const feedbackAnswer = await FeedbackAnswer.query()
            .where("feedback_id", feedback.feedback_id)
            .where("is_deleted", false);

          return {
            feedback_id: feedback.feedback_id,
            feedback_question: feedback.feedback_question,
            feedback_type: feedback.feedback_type,
            createdAt: feedback.createdAt,
            updatedAt: feedback.updatedAt,
            feedback_answer: feedbackAnswer,
          };
        })
      );

      return response
        .status(200)
        .json({ data: feedbackAddAnswer, status: 200 });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: feedbackSchema });
      const feedback: Feedback = await Feedback.create(payload);
      return response.status(201).json({ data: feedback, status: 201 });
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const id = params.id;
      const payload = await request.validate({ schema: feedbackSchema });
      const feedback: any = await Feedback.find(id);
      if (!feedback) {
        return response
          .status(404)
          .json({ message: "Feedback not found", status: 404 });
      } else {
        feedback.merge(payload);
        await feedback.save();
        return response.status(200).json({
          data: feedback,
          status: 200,
          message: `Feedback updated byId ${id} success`,
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
      const feedback: any = await Feedback.find(id);
      if (!feedback) {
        return response
          .status(404)
          .json({ message: "Feedback not found", status: 404 });
      } else if (feedback.is_deleted) {
        return response
          .status(404)
          .json({ message: "Feedback already deleted", status: 404 });
      } else {
        feedback.is_deleted = true;
        await feedback.save();
        return response.status(200).json({
          data: feedback,
          status: 200,
          message: `Feedback deleted byId ${id} success`,
        });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ message: "incorrect or incomplete information", status: 400 });
    }
  }
}
