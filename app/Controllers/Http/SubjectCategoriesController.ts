import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class SubjectCategoriesController {
  public async index({ response }: HttpContextContract) {
    return response.json({ test: "test" });
  }
}
