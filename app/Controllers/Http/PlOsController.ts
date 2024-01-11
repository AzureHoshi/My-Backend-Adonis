import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import Plo from "App/Models/Plo";

export default class PlOsController {
  public async index({ response }: HttpContextContract) {
    try {
      const plos = await Plo.query()
        .preload("sub_plos")
        .preload("ylos")
        .where("is_deleted", false);

      return response.status(200).json({
        message: "PLOs fetched successfully",
        data: plos,
      });
    } catch (error) {
      return response.status(400).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const storePloSchema = schema.create({
      plo_name: schema.string(),
      plo_description: schema.string(),
    });

    try {
      const payload = await request.validate({ schema: storePloSchema });

      const plo = await Plo.create(payload);

      return response.status(201).json({
        message: "PLO created successfully",
        data: plo,
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
      const plo = await Plo.findOrFail(params.id);

      if (!plo) {
        return response.status(400).json({
          message: "PLO not found",
          id: params.id,
        });
      } else if (plo.is_deleted) {
        return response.status(200).json({
          message: "PLO already deleted",
          id: params.id,
        });
      } else {
        plo.is_deleted = true;
        await plo.save();

        return response.status(200).json({
          message: "PLO deleted successfully",
          data: plo,
        });
      }
    } catch (error) {
      return response.status(400).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const updatePloSchema = schema.create({
      plo_name: schema.string(),
      plo_description: schema.string(),
    });

    try {
      const payload = await request.validate({ schema: updatePloSchema });

      const plo = await Plo.findOrFail(params.id);

      if (!plo) {
        return response.status(400).json({
          message: "PLO not found",
          id: params.id,
        });
      } else if (plo.is_deleted) {
        return response.status(400).json({
          message: "PLO already deleted",
          id: params.id,
        });
      } else {
        plo.plo_name = payload.plo_name;
        plo.plo_description = payload.plo_description;
        await plo.save();

        return response.status(200).json({
          message: "PLO updated successfully",
          data: plo,
        });
      }
    } catch (error) {
      return response.status(400).json({
        message: "Something went wrong",
        error: error.messages,
      });
    }
  }
}
