import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import Feedback from "App/Models/Feedback";

export default class FeedbacksController {
  public async index({ response }: HttpContextContract) {
    try {
      const feedbacks = await Feedback.query()
        .where("is_deleted", false)
        .orderBy("feedback_id ", "asc");

      return response.status(200).json({ data: feedbacks, status: 200 });
    } catch (error) {
      return response.status(500).json({ message: error.message, status: 500 });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const storeSchema = schema.create({
      feedback_question: schema.string(),
      feedback_type: schema.number(),
    });

    try {
      const payload = await request.validate({ schema: storeSchema });
      const feedback = await Feedback.create(payload);
      return response.status(201).json({ data: feedback, status: 201 });
    } catch (error) {
      if (error.messages) {
        // Handle validation errors
        return response.status(400).json({
          message: "Validation Failed",
          status: 400,
          errors: error.messages,
        });
      } else {
        // Handle other errors
        return response.status(500).json({
          message: "Internal Server Error",
          status: 500,
          error: error.message,
        });
      }
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const feedback = await Feedback.findOrFail(params.id);

      if (!feedback) {
        return response
          .status(404)
          .json({ message: "Feedback not found", status: 404 });
      } else if (feedback.is_deleted) {
        return response.status(400).json({
          message: "Feedback already deleted",
          status: 400,
        });
      } else {
        feedback.merge({ is_deleted: true }).save();
        return response.status(200).json({ data: feedback, status: 200 });
      }
    } catch (error) {
      return response.status(500).json({ message: error.message, status: 500 });
    }
  }
}
