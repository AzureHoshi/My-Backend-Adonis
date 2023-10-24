import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Competency from "App/Models/Competency";
import { schema, rules } from "@ioc:Adonis/Core/Validator";

const competencyStoreSchema = schema.create({
  subject_id: schema.number(),
  competency_name: schema.string({ trim: true }, [rules.maxLength(255)]),
});

const competencyUpdateSchema = schema.create({
  competency_name: schema.string({ trim: true }, [rules.maxLength(255)]),
});

export default class CompetenciesController {
  public async index({ response }: HttpContextContract) {
    try {
      const competencies = await Competency.query().where("is_deleted", false);
      return response.status(200).json({ data: competencies, status: 200 });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: competencyStoreSchema });
      const competency = await Competency.create(payload);
      return response.status(201).json({ data: competency, status: 201 });
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
        schema: competencyUpdateSchema,
      });
      const competency: any = await Competency.find(id);
      if (!competency) {
        return response
          .status(404)
          .json({ message: "Competency not found", status: 404 });
      } else {
        competency.merge(payload);
        await competency.save();
        return response.status(200).json({
          data: competency,
          status: 200,
          message: `Competency updated byId ${id} success`,
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
      const competency: any = await Competency.find(id);
      if (!competency) {
        return response
          .status(404)
          .json({ message: "Competency not found", status: 404 });
      } else if (competency.is_deleted) {
        return response
          .status(404)
          .json({ message: "CompetencySub already deleted", status: 404 });
      } else {
        competency.merge({ is_deleted: true });
        await competency.save();
        return response.status(200).json({
          data: competency,
          status: 200,
          message: `Competency deleted byId ${id} success`,
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
