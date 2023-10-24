import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CompetencySub from "App/Models/CompetencySub";
import { schema, rules } from "@ioc:Adonis/Core/Validator";

const competencySubStoreSchema = schema.create({
  competency_id: schema.number(),
  competency_sub_name: schema.string({ trim: true }, [rules.maxLength(255)]),
  competency_sub_description: schema.string({ trim: true }, [
    rules.maxLength(255),
  ]),
});

const competencySubUpdateSchema = schema.create({
  competency_sub_name: schema.string({ trim: true }, [rules.maxLength(255)]),
  competency_sub_description: schema.string({ trim: true }, [
    rules.maxLength(255),
  ]),
});

export default class CompetencySubsController {
  public async index({ response }: HttpContextContract) {
    try {
      const competencySubs = await CompetencySub.query()
        .preload("competency")
        .where("is_deleted", false);

      return response.status(200).json({ data: competencySubs, status: 200 });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const competencySubs = await request.validate({
        schema: competencySubStoreSchema,
      });
      const competencySub = await CompetencySub.create(competencySubs);
      return response.status(201).json({ data: competencySub, status: 201 });
    } catch (error) {
      return response.status(400).json({
        message: "incorrect or incomplete information",
        status: 400,
      });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const id = params.id;
      const payload = await request.validate({
        schema: competencySubUpdateSchema,
      });
      const competencySub: any = await CompetencySub.find(id);
      if (!competencySub) {
        return response
          .status(404)
          .json({ message: "CompetencySub not found", status: 404 });
      } else {
        competencySub.merge(payload);
        await competencySub.save();
        return response.status(200).json({
          data: competencySub,
          status: 200,
          message: `CompetencySub updated byId ${id} success`,
        });
      }
    } catch (error) {
      return response.status(400).json({
        message: "incorrect or incomplete information",
        status: 400,
      });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const id = params.id;
      const competencySub: any = await CompetencySub.find(id);
      if (!competencySub) {
        return response
          .status(404)
          .json({ message: "CompetencySub not found", status: 404 });
      } else if (competencySub.is_deleted) {
        return response
          .status(404)
          .json({ message: "CompetencySub already deleted", status: 404 });
      } else {
        competencySub.merge({ is_deleted: true });
        await competencySub.save();
        return response.status(200).json({
          data: competencySub,
          status: 200,
          message: `CompetencySub deleted byId ${id} success`,
        });
      }
    } catch (error) {
      return response.status(400).json({
        message: "incorrect or incomplete information",
        status: 400,
      });
    }
  }
}
