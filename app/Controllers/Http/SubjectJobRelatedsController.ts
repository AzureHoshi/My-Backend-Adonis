import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";

import SubjectJobRelated from "App/Models/SubjectJobRelated";

export default class SubjectJobRelatedsController {
  public async index({ response }: HttpContextContract) {
    try {
      const subjectJobRelated = await SubjectJobRelated.query()
        .preload("subject")
        .preload("job_position")
        .where("is_deleted", false)
        .orderBy("created_at", "desc");

      return response.status(200).json({
        message: "SubjectJobRelated retrieved successfully",
        data: subjectJobRelated,
      });
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const storeSchema = schema.create({
        subject_id: schema.number(),
        job_position_id: schema.number(),
      });

      const payload = await request.validate({ schema: storeSchema });

      const subjectJobRelated = await SubjectJobRelated.create(payload);

      const subject = await SubjectJobRelated.query()
        .preload("subject")
        .preload("job_position")
        .where(
          "subject_job_related_id",
          subjectJobRelated.subject_job_related_id
        );

      return response.status(201).json({
        message: "SubjectJobRelated created successfully",
        data: subject,
      });
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const updateSchema = schema.create({
        subject_id: schema.number(),
        job_position_id: schema.number(),
      });

      const payload = await request.validate({ schema: updateSchema });

      const subjectJobRelated = await SubjectJobRelated.query()
        .where("is_deleted", false)
        .where("subject_job_related_id", request.params().id)
        .preload("subject")
        .preload("job_position")
        .firstOrFail();

      if (!subjectJobRelated) {
        return response.status(404).json({
          message: "SubjectJobRelated not found",
        });
      } else if (subjectJobRelated.is_deleted) {
        return response.status(200).json({
          message: "SubjectJobRelated already deleted",
        });
      } else {
        subjectJobRelated.subject_id = payload.subject_id;
        subjectJobRelated.job_position_id = payload.job_position_id;
        await subjectJobRelated.save();

        return response.status(200).json({
          data: subjectJobRelated,
          message: "SubjectJobRelated updated successfully",
        });
      }
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    try {
      const subjectJobRelated = await SubjectJobRelated.findOrFail(
        request.params().id
      );

      if (!subjectJobRelated) {
        return response.status(404).json({
          message: "SubjectJobRelated not found",
        });
      } else if (subjectJobRelated.is_deleted) {
        return response.status(200).json({
          message: "SubjectJobRelated already deleted",
        });
      } else {
        subjectJobRelated.is_deleted = true;
        await subjectJobRelated.save();

        return response.status(200).json({
          message: "SubjectJobRelated deleted successfully",
          data: subjectJobRelated,
        });
      }
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }
}
