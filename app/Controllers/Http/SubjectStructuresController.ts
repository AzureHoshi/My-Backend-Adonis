import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import SubjectStructure from "App/Models/SubjectStructure";

export default class SubjectStructuresController {
  public async index({ response }: HttpContextContract) {
    try {
      const subjectStructures = await SubjectStructure.query()
        .preload("subjectCategory")
        .preload("subjectType")
        .preload("subjectGroup")
        .preload("subject")
        .where("is_deleted", false);

      if (!subjectStructures) {
        return response
          .status(404)
          .json({ message: "SubjectStructures not found", status: 404 });
      } else {
        return response.status(200).json({
          data: subjectStructures,
          status: 200,
          message: "SubjectStructures retrieved successfully",
        });
      }
    } catch (error) {
      return response.status(400).json({ error: error, status: 400 });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const subjectStructure = await SubjectStructure.query()
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
        .whereHas("subject", (query) => {
          query.where("curriculum_id", params.id);
        })
        .where("is_deleted", false);

      if (!subjectStructure) {
        return response
          .status(404)
          .json({ message: "SubjectStructure not found", status: 404 });
      } else {
        return response.status(200).json({
          data: subjectStructure,
          status: 200,
          message: "SubjectStructure retrieved successfully",
        });
      }
    } catch (error) {
      return response.status(400).json({ error: error, status: 400 });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const storeSchema = schema.create({
      subject_category_id: schema.number(),
      subject_type_id: schema.number.optional(),
      subject_group_id: schema.number.optional(),
      subject_id: schema.number(),
    });

    try {
      const payload = await request.validate({ schema: storeSchema });
      const subjectStructure: SubjectStructure = await SubjectStructure.create(
        payload
      );
      return response.status(201).json({ data: subjectStructure, status: 201 });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const updateSchema = schema.create({
      subject_category_id: schema.number.optional(),
      subject_type_id: schema.number.optional(),
      subject_group_id: schema.number.optional(),
      subject_id: schema.number.optional(),
    });

    try {
      const payload = await request.validate({ schema: updateSchema });
      const subjectStructure: any = await SubjectStructure.find(params.id);

      if (!subjectStructure) {
        return response
          .status(404)
          .json({ message: "SubjectStructure not found", status: 404 });
      } else {
        subjectStructure.merge(payload);
        await subjectStructure.save();
        return response.status(200).json({
          data: subjectStructure,
          status: 200,
          message: `SubjectStructure updated byId ${params.id} success`,
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
      const subjectStructure: any = await SubjectStructure.find(params.id);

      if (!subjectStructure) {
        return response
          .status(404)
          .json({ message: "SubjectStructure not found", status: 404 });
      } else if (subjectStructure.is_deleted) {
        return response
          .status(404)
          .json({ message: "SubjectStructure already deleted", status: 404 });
      } else {
        subjectStructure.is_deleted = true;
        await subjectStructure.save();
        return response.status(200).json({
          data: subjectStructure,
          status: 200,
          message: `SubjectStructure deleted byId ${params.id} success`,
        });
      }
    } catch (error) {
      return response.status(400).json({ error: error, status: 400 });
    }
  }
}
