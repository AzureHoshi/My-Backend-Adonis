import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";

import SubPlo from "App/Models/SubPlo";

export default class SubPlosController {
  public async store({ request, response }: HttpContextContract) {
    const storeSubPloSchema = schema.create({
      sub_plo_title: schema.string(),
      sub_plo_description: schema.string(),
      plo_id: schema.number(),
    });

    console.log("request", request);

    try {
      const payload = await request.validate({ schema: storeSubPloSchema });

      const subPlo = await SubPlo.create(payload);

      return response.status(201).json({
        message: "Sub PLO created successfully",
        data: subPlo,
      });
    } catch (error) {
      return response.status(400).json({
        message: "Something went wrong",
        error: error.messages,
      });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const subPlo = await SubPlo.findOrFail(params.id);

      if (!subPlo) {
        return response.status(400).json({
          message: "Sub PLO not found",
          id: params.id,
        });
      } else if (subPlo.is_deleted) {
        return response.status(200).json({
          message: "Sub PLO already deleted",
          id: params.id,
        });
      } else {
        subPlo.is_deleted = true;
        await subPlo.save();

        return response.status(200).json({
          message: "Sub PLO deleted successfully",
          id: params.id,
        });
      }
    } catch (error) {
      return response.status(400).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  }
}
