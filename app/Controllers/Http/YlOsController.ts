import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import Ylo from "App/Models/Ylo";

export default class YlOsController {
  public async index({ response }: HttpContextContract) {
    try {
      const ylos = await Ylo.query()
        .where("is_deleted", 0)
        .preload("ylo_description", (query) => {
          query.where("is_deleted", 0);
        })
        .preload("plos", (query) => {
          query.from("plos").where("plos.is_deleted", 0);
        })
        .preload("ylo_plos", (query) => {
          query.from("ylo_plos").where("ylo_plos.is_deleted", 0);
        });

      return response.status(200).json({
        message: "YLOs fetched successfully",
        data: ylos,
      });
    } catch (error) {
      return response.status(400).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const storeYloSchema = schema.create({
      ylo_year: schema.number(),
      ylo_description: schema.array().members(schema.string()),
    });

    try {
      const payload = await request.validate({ schema: storeYloSchema });

      const ylo = await Ylo.create({ ylo_year: payload.ylo_year });

      const yloDescriptions = payload.ylo_description.map((description) => ({
        ylo_id: ylo.ylo_id,
        ylo_description: description,
      }));

      await ylo.related("ylo_description").createMany(yloDescriptions);

      const yloWithRelations = await Ylo.query()
        .preload("ylo_description")
        .where("ylo_id", ylo.ylo_id)
        .first();

      return response.status(201).json({
        message: "YLO created successfully",
        data: yloWithRelations,
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
      const ylo = await Ylo.findOrFail(params.id);

      if (!ylo) {
        return response.status(400).json({
          message: "YLO not found",
          id: params.id,
        });
      } else if (ylo.is_deleted) {
        return response.status(200).json({
          message: "YLO already deleted",
          id: params.id,
        });
      } else {
        ylo.is_deleted = true;
        await ylo.save();

        return response.status(200).json({
          message: "YLO deleted successfully",
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
