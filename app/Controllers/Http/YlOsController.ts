import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import Ylo from "App/Models/Ylo";
import YloPlo from "App/Models/YloPlo";

export default class YlOsController {
  public async index({ response }: HttpContextContract) {
    try {
      // Fetch ylos
      const ylos = await Ylo.query()
        .where("is_deleted", 0)
        .preload("ylo_description", (yloDesQuery) => {
          yloDesQuery.where("is_deleted", 0);
        })
        .preload("plos", (ploQuery) => {
          ploQuery.where("plos.is_deleted", 0);
        });

      // Fetch yloPlos
      const yloPlos = await YloPlo.query().where("is_deleted", 0);

      // Map ylos to the desired structure
      const formattedYlos = ylos.map((ylo) => {
        // Map ylo descriptions
        const yloDescriptions = ylo.ylo_description.map((description) => ({
          ylo_des_id: description.ylo_des_id,
          ylo_id: description.ylo_id,
          ylo_description: description.ylo_description,
          is_deleted: description.is_deleted,
          created_at: description.createdAt,
          updated_at: description.updatedAt,
        }));

        // Map plos and add ylo_plos
        const plosWithYloPlos = ylo.plos.map((plo) => {
          const matchingYloPlo = yloPlos.find(
            (yloPlo) =>
              yloPlo.ylo_id === ylo.ylo_id && yloPlo.plo_id === plo.plo_id
          );

          return {
            plo_id: plo.plo_id,
            plo_name: plo.plo_name,
            plo_description: plo.plo_description,
            is_deleted: plo.is_deleted,
            created_at: plo.createdAt,
            updated_at: plo.updatedAt,
            ylo_plos: matchingYloPlo
              ? {
                  ylo_plo_id: matchingYloPlo.ylo_plo_id,
                  ylo_id: matchingYloPlo.ylo_id,
                  plo_id: matchingYloPlo.plo_id,
                  is_deleted: matchingYloPlo.is_deleted,
                  created_at: matchingYloPlo.createdAt,
                  updated_at: matchingYloPlo.updatedAt,
                }
              : null,
          };
        });

        // Return the formatted ylo object
        return {
          ylo_id: ylo.ylo_id,
          curriculum_id: ylo.curriculum_id,
          ylo_year: ylo.ylo_year,
          is_deleted: ylo.is_deleted,
          created_at: ylo.createdAt,
          updated_at: ylo.updatedAt,
          ylo_description: yloDescriptions,
          plos: plosWithYloPlos,
        };
      });

      return response.status(200).json({
        message: "YLOs retrieved successfully",
        data: formattedYlos,
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
      curriculum_id: schema.number(),
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
