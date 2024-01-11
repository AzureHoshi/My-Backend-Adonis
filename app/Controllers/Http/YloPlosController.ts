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

      const yloPlo = await YloPlo.create(payload);

      return response.status(201).json({
        message: "YLO-PLO created successfully",
        data: yloPlo,
      });
    } catch (error) {
      return response.status(400).json({
        message: "Something went wrong",
        error: error.messages,
      });
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const deleteYloPloSchema = schema.create({
      ylo_id: schema.number(),
      plo_id: schema.number(),
    });

    try {
      const payload = await request.validate({ schema: deleteYloPloSchema });

      const data = await YloPlo.query()
        .where("ylo_id", payload.ylo_id)
        .where("plo_id", payload.plo_id)
        .where("is_deleted", false)
        .first();

      if (!data) {
        return response.status(404).json({
          message: "YLO-PLO not found",
        });
      } else if (data.is_deleted) {
        return response.status(200).json({
          message: "YLO-PLO already deleted",
        });
      } else {
        data.is_deleted = true;
        await data.save();

        return response.status(200).json({
          message: "YLO-PLO deleted successfully",
          data: data,
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
