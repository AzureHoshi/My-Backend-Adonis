import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";

export default class SimulationsController {
  public async simulationResult({}: HttpContextContract) {
    const dataSchema = schema.create({
      subjects: schema.array().members(
        schema.object().members({
          subject_id: schema.number(),
        })
      ),
    });

    
  }
}
