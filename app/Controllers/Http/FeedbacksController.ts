import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
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
}
