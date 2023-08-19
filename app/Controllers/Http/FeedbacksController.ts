import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import Feedback from "App/Models/Feedback";

const feedbackSchema = schema.create({
  feedback_question: schema.string([rules.maxLength(255)]),
  feedback_type: schema.boolean(),
});
export default class FeedbacksController {
  public async index({ response }: HttpContextContract) {
    // const feedbacks = await Feedback.query()
    //   .innerJoin(
    //     "feedback_answers",
    //     "feedback_answers.feedback_id",
    //     "feedbacks.id"
    //   )
    //   .where("is_deleted", false)
    //   .orderBy("feedbacks.createdAt", "asc");

    const feedbacks = await Feedback.query()
      .preload("feedback_answers")
      .where("is_deleted", false)
      .orderBy("feedbacks.createdAt", "asc");

    return response.status(200).json({ data: feedbacks, status: 200 });
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
