import { Response } from "@adonisjs/core/build/standalone";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import SubjectJobRelated from "App/Models/SubjectJobRelated";

export default class SimulationsController {
  public async simulationResultBySubject({
    request,
    response,
  }: HttpContextContract) {
    console.log("test", request.body().subject_id);

    try {
      const dataSchema = schema.create({
        subject_id: schema.array().members(schema.number()),
      });

      const payload = await request.validate({
        schema: dataSchema,
      });

      const dataJobWithSubject = await SubjectJobRelated.query()
        .where("is_deleted", false)
        .whereIn("subject_id", payload.subject_id);

      return response
        .status(200)
        .json({ data: dataJobWithSubject, status: 200 });
    } catch (error) {
      console.log(error);
    }
  }
}
