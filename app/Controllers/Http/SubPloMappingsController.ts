import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";

import SubPloMapping from "App/Models/SubPloMapping";

export default class SubPloMappingsController {
  public async store({ request, response }: HttpContextContract) {
    const storeSubPloMappingSchema = schema.create({
      sub_plo_id: schema.number(),
      subject_id: schema.number(),
    });

    try {
      const payload = await request.validate({
        schema: storeSubPloMappingSchema,
      });

      const subPloMapping = await SubPloMapping.create(payload);

      return response.status(201).json({
        message: "Sub PLO Mapping created successfully",
        data: subPloMapping,
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
      const subPloMapping = await SubPloMapping.findOrFail(params.id);

      if (!subPloMapping) {
        return response.status(400).json({
          message: "Sub PLO Mapping not found",
          id: params.id,
        });
      } else if (subPloMapping.is_deleted) {
        return response.status(200).json({
          message: "Sub PLO Mapping already deleted",
          id: params.id,
        });
      } else {
        subPloMapping.is_deleted = true;
        await subPloMapping.save();

        return response.status(200).json({
          message: "Sub PLO Mapping deleted successfully",
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
