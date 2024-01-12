import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import YloPlo from "App/Models/YloPlo";

export default class YloPlosController {
  public async store({ request, response }: HttpContextContract) {
    const storeYloPloSchema = schema.create({
      ylo_id: schema.number(),
      plo_id: schema.number(),
    });

    try {
      const payload = await request.validate({ schema: storeYloPloSchema });

      const yloPlo = await YloPlo.query()
        .where("ylo_id", payload.ylo_id)
        .where("plo_id", payload.plo_id)
        .where("is_deleted", false)
        .first();

      if (!yloPlo) {
        const newYloPlo = await YloPlo.create(payload);

        return response.status(201).json({
          message: "YLO-PLO created successfully",
          data: newYloPlo,
        });
      } else if (yloPlo.is_deleted) {
        yloPlo.is_deleted = false;
        await yloPlo.save();

        return response.status(201).json({
          message: "YLO-PLO created successfully",
          data: yloPlo,
        });
      } else {
        return response.status(200).json({
          message: "YLO-PLO already exists",
          data: yloPlo,
        });
      }
    } catch (error) {
      return response.status(400).json({
        message: "Something went wrong",
        error: error.messages,
      });
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const deleteYloPloSchema = schema.create({
      ylo_plp_id: schema.number(),
    });

    try {
      const payload = await request.validate({ schema: deleteYloPloSchema });

      const yloPlo = await YloPlo.findOrFail(payload.ylo_plp_id);

      if (!yloPlo) {
        return response.status(404).json({
          message: "YLO-PLO not found",
        });
      } else if (yloPlo.is_deleted) {
        return response.status(200).json({
          message: "YLO-PLO already deleted",
        });
      } else {
        yloPlo.is_deleted = true;
        await yloPlo.save();

        return response.status(200).json({
          message: "YLO-PLO deleted successfully",
          data: yloPlo,
        });
      }
    } catch (error) {
      return response.status(400).json({
        message: "Something went wrong",
        error: error,
      });
    }
  }
}
