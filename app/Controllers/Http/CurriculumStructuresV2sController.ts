import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CurriculumStructuresV2 from "App/Models/CurriculumStructuresV2";
import { schema } from "@ioc:Adonis/Core/Validator";

export default class CurriculumStructuresV2sController {
  public async index({ response }: HttpContextContract) {
    try {
      const curriculumStructuresV2s = await CurriculumStructuresV2.query()
        .preload("curriculum", (query) => {
          query.where("is_deleted", false);
        })
        .preload("subjectCategory", (query) => {
          query.where("is_deleted", false);
        })
        .preload("subjectType", (query) => {
          query.where("is_deleted", false);
        })
        .preload("subjectGroup", (query) => {
          query.where("is_deleted", false);
        })
        .preload("subject", (query) => {
          query.where("is_deleted", false);
        })
        .where("is_deleted", false);

      if (!curriculumStructuresV2s) {
        return response
          .status(404)
          .json({ message: "CurriculumStructuresV2s not found", status: 404 });
      } else {
        return response.status(200).json({
          data: curriculumStructuresV2s,
          status: 200,
          message: "CurriculumStructuresV2s retrieved successfully",
        });
      }
    } catch (error) {
      return response.status(400).json({ message: error, status: 400 });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const curriculumStructuresV2 = await CurriculumStructuresV2.query()
        .preload("curriculum", (query) => {
          query.where("is_deleted", false);
        })
        .preload("subjectCategory", (query) => {
          query.where("is_deleted", false);
        })
        .preload("subjectType", (query) => {
          query.where("is_deleted", false);
        })
        .preload("subjectGroup", (query) => {
          query.where("is_deleted", false);
        })
        .preload("subject", (query) => {
          query.where("is_deleted", false);
        })
        .whereHas("curriculum", (query) => {
          query.where("curriculum_id", params.id);
        })
        .where("is_deleted", false)
        .where("curriculum_id", params.id);

      if (!curriculumStructuresV2) {
        return response
          .status(404)
          .json({ message: "CurriculumStructuresV2 not found", status: 404 });
      } else {
        return response.status(200).json({
          data: curriculumStructuresV2,
          status: 200,
          message: "CurriculumStructuresV2 retrieved successfully",
        });
      }
    } catch (error) {
      return response.status(400).json({ message: error, status: 400 });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const storeSchema = schema.create({
      curriculum_id: schema.number(),
      subject_category_id: schema.number.nullable(),
      subject_type_id: schema.number.nullable(),
      subject_group_id: schema.number.nullable(),
      subject_id: schema.number(),
      csv2_credit_total: schema.number(),
    });

    try {
      const payload = await request.validate({ schema: storeSchema });

      const curriculumStructuresV2 = await CurriculumStructuresV2.create(
        payload
      );

      return response.status(201).json({
        data: curriculumStructuresV2,
        status: 201,
        message: "CurriculumStructuresV2 created successfully",
      });
    } catch (error) {
      return response.status(400).json({ message: error, status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const updateSchema = schema.create({
      curriculum_id: schema.number.optional(),
      subject_category_id: schema.number.nullable(),
      subject_type_id: schema.number.nullable(),
      subject_group_id: schema.number.nullable(),
      subject_id: schema.number.optional(),
      csv2_credit_total: schema.number.optional(),
    });

    try {
      const payload = await request.validate({
        schema: updateSchema,
      });

      if (payload.subject_category_id === undefined) {
        payload.subject_category_id = null;
      }

      if (payload.subject_type_id === undefined) {
        payload.subject_type_id = null;
      }

      if (payload.subject_group_id === undefined) {
        payload.subject_group_id = null;
      }

      const curriculumStructuresV2: any = await CurriculumStructuresV2.find(
        params.id
      );

      if (!curriculumStructuresV2) {
        return response
          .status(404)
          .json({ message: "CurriculumStructuresV2 not found", status: 404 });
      } else {
        curriculumStructuresV2.merge(payload);
        await curriculumStructuresV2.save();

        return response.status(200).json({
          data: curriculumStructuresV2,
          status: 200,
          message: "CurriculumStructuresV2 updated successfully",
        });
      }
    } catch (error) {
      return response.status(400).json({ message: error, status: 400 });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const curriculumStructuresV2: any = await CurriculumStructuresV2.find(
        params.id
      );

      if (!curriculumStructuresV2) {
        return response
          .status(404)
          .json({ message: "CurriculumStructuresV2 not found", status: 404 });
      } else if (curriculumStructuresV2.is_deleted === true) {
        return response.status(400).json({
          message: "CurriculumStructuresV2 already deleted",
          status: 400,
        });
      } else {
        curriculumStructuresV2.is_deleted = true;
        await curriculumStructuresV2.save();

        return response.status(200).json({
          data: curriculumStructuresV2,
          status: 200,
          message: "CurriculumStructuresV2 deleted successfully",
        });
      }
    } catch (error) {
      return response.status(400).json({ message: error, status: 400 });
    }
  }
}
