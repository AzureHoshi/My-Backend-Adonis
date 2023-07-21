import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class StudyPlansController {
  public async index({ response }: HttpContextContract) {
    return response.json({ test: "test" });
  }
}
