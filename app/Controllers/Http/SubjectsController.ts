import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class SubjectsController {
  public async index({ response }: HttpContextContract) {
    return response.json({ test: "test" });
  }
}
