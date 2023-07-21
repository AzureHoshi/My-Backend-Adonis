import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class InterestSurveysController {
  public async index({ response }: HttpContextContract) {
    return response.json({ test: "test" });
  }
}
