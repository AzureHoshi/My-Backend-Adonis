import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class SubjectGroupsController {
  public async index({ response }: HttpContextContract) {
    return response.json({ test: "test" });
  }
}
