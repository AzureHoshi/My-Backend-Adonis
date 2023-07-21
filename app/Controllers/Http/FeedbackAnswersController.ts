import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class FeedbackAnswersController {
  public async index({ response }: HttpContextContract) {
    return response.json({ test: "test" });
  }
}
