import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";

import JobCompetency from "App/Models/JobCompetency";

export default class JobCompetenciesController {
  public async store({ request, response }: HttpContextContract) {
    const storeSchema = schema.create({
      job_position_id: schema.number(),
      job_com_description: schema.string(),
    });

    try {
      const payload = await request.validate({ schema: storeSchema });

      const jobCompetency = await JobCompetency.create(payload);

      return response.created({
        data: jobCompetency,
        message: "job competency created",
      });
    } catch (error) {
      return response.badRequest(error);
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const updateSchema = schema.create({
      job_position_id: schema.number(),
      job_com_description: schema.string(),
    });

    try {
      const payload = await request.validate({ schema: updateSchema });

      const jobCompetency = await JobCompetency.findOrFail(params.id);

      if (!jobCompetency) {
        return response.status(200).json({
          message: "Job Competency not found",
        });
      } else if (jobCompetency.is_deleted) {
        return response.status(200).json({
          message: "Job Competency already deleted",
        });
      } else {
        jobCompetency.merge(payload);

        await jobCompetency.save();

        return response.ok({
          data: jobCompetency,
          message: "Job Competency updated",
        });
      }
    } catch (error) {
      return response.badRequest(error);
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const jobCompetency = await JobCompetency.findOrFail(params.id);

      if (!jobCompetency) {
        return response.status(200).json({
          message: "Job Competency not found",
        });
      } else if (jobCompetency.is_deleted) {
        return response.status(200).json({
          message: "Job Competency already deleted",
        });
      } else {
        jobCompetency.is_deleted = true;

        await jobCompetency.save();

        return response.ok({
          message: "Job Competency byId " + params.id + " deleted",
        });
      }
    } catch (error) {
      return response.badRequest(error);
    }
  }
}
