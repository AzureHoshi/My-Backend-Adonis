import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Competency from "App/Models/Competency";

export default class CompetenciesController {
  public async index({ response }: HttpContextContract) {
    const competencies = await Competency.all();
    return response.status(200).json({ data: competencies, status: 200 });
  }
}
