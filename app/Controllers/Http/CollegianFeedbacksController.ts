import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import CollegianFeedback from "App/Models/CollegianFeedback";

const collegianFeedbackSchema = schema.create({
  collegian_id: schema.number(),
  feedback_id: schema.number(),
  feedback_answer_id: schema.number(),
});

export default class CollegianFeedbacksController {
  public async index({ response }: HttpContextContract) {
    const collegianFeedbacks = await CollegianFeedback.query()
      .preload("collegian")
      .preload("feedback")
      .preload("feedbackAnswer")
      .where("collegian_feedbacks.is_deleted", false)
      .orderBy("collegian_feedbacks.updated_at", "desc");
    return response.status(200).json({ data: collegianFeedbacks, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({
        schema: collegianFeedbackSchema,
      });
      const collegianFeedback: CollegianFeedback =
        await CollegianFeedback.create(payload);
      return response
        .status(201)
        .json({ data: collegianFeedback, status: 201 });
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const id = params.id;
      const payload = await request.validate({
        schema: collegianFeedbackSchema,
      });
      const collegianFeedback: any = await CollegianFeedback.find(id);
      if (!collegianFeedback) {
        return response
          .status(404)
          .json({ message: "CollegianFeedback not found", status: 404 });
      } else {
        collegianFeedback.merge(payload);
        await collegianFeedback.save();
        return response.status(200).json({
          data: collegianFeedback,
          status: 200,
          message: `CollegianFeedback updated byId ${id} success`,
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
      const collegianFeedback: any = await CollegianFeedback.find(id);
      if (!collegianFeedback) {
        return response
          .status(404)
          .json({ message: "CollegianFeedback not found", status: 404 });
      } else if (collegianFeedback.is_deleted) {
        return response
          .status(404)
          .json({ message: "CollegianFeedback already deleted", status: 404 });
      } else {
        collegianFeedback.is_deleted = true;
        await collegianFeedback.save();
        return response.status(200).json({
          data: collegianFeedback,
          status: 200,
          message: `CollegianFeedback deleted byId ${id} success`,
        });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ message: "incorrect or incomplete information", status: 400 });
    }
  }
}
