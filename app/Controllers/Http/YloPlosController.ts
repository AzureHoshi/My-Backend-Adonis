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

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const yloPlo = await YloPlo.findOrFail(params.id);

      if (!yloPlo) {
        return response.status(400).json({
          message: "YLO-PLO not found",
          id: params.id,
        });
      } else if (yloPlo.is_deleted) {
        return response.status(200).json({
          message: "YLO-PLO already deleted",
          id: params.id,
        });
      } else {
        yloPlo.is_deleted = true;
        await yloPlo.save();

        return response.status(200).json({
          message: "YLO-PLO deleted successfully",
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
