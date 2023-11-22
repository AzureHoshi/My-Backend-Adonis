import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import JobPosition from "App/Models/JobPosition";

export default class JobPositionsController {
  public async index({ response }: HttpContextContract) {
    try {
      const jobPositions = await JobPosition.query().where("is_deleted", false);

      return response.status(200).json({ data: jobPositions, status: 200 });
    } catch (error) {
      return response.status(400).json({ error: error, status: 400 });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const storeSchema = schema.create({
      job_position_name: schema.string({ trim: true }, [rules.maxLength(255)]),
    });

    try {
      const payload = await request.validate({ schema: storeSchema });
      const jobPosition: JobPosition = await JobPosition.create(payload);
      return response.status(201).json({ data: jobPosition, status: 201 });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const updateSchema = schema.create({
      job_position_name: schema.string.optional({ trim: true }, [
        rules.maxLength(255),
      ]),
    });

    try {
      const payload = await request.validate({ schema: updateSchema });
      const jobPosition: any = await JobPosition.find(params.id);

      if (!jobPosition) {
        return response
          .status(404)
          .json({ message: "JobPosition not found", status: 404 });
      } else {
        jobPosition.merge(payload);
        await jobPosition.save();
        return response.status(200).json({
          data: jobPosition,
          status: 200,
          message: `JobPosition updated byId ${params.id} success`,
        });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const jobPosition: any = await JobPosition.find(params.id);

      if (!jobPosition) {
        return response
          .status(404)
          .json({ message: "JobPosition not found", status: 404 });
      } else if (jobPosition.is_deleted) {
        return response
          .status(404)
          .json({ message: "JobPosition already deleted", status: 404 });
      } else {
        jobPosition.is_deleted = true;
        await jobPosition.save();
        return response.status(200).json({
          data: jobPosition,
          status: 200,
          message: `JobPosition deleted byId ${params.id} success`,
        });
      }
    } catch (error) {
      return response.status(400).json({ error: error, status: 400 });
    }
  }
}
