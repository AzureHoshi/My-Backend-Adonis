import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import CurriculumStructure from "App/Models/CurriculumStructure";
import SubjectCategory from "App/Models/SubjectCategory";
import SubjectGroup from "App/Models/SubjectGroup";
import SubjectType from "App/Models/SubjectType";

export default class CurriculumStructuresController {
  public async index({ response }: HttpContextContract) {
    try {
      const curriculumStructures = await CurriculumStructure.query().where(
        "is_deleted",
        false
      );

      const transformedCurriculumStructures = curriculumStructures.map(
        async (curriculumStructure) => {
          const subjectGroup = await SubjectGroup.find(
            curriculumStructure.subject_group_id
          );
          const subjectType = await SubjectType.find(
            subjectGroup!.subject_type_id
          );
          const subjectCategory = await SubjectCategory.find(
            subjectType!.subject_category_id
          );

          return {
            curriculum_structure_id:
              curriculumStructure.curriculum_structure_id,
            curriculum_id: curriculumStructure.curriculum_id,
            subject_group_id: curriculumStructure.subject_group_id,
            subject_group_name: subjectGroup?.subject_group_name,
            subject_type_id: subjectType?.subject_type_id,
            subject_type_name: subjectType?.subject_type_name,
            subject_category_id: subjectCategory?.subject_category_id,
            subject_category_name: subjectCategory?.subject_category_name,
            credit_total: curriculumStructure.credit_total,
            is_deleted: curriculumStructure.is_deleted,
            created_at: curriculumStructure.createdAt,
            updated_at: curriculumStructure.updatedAt,
          };
        }
      );

      return response.status(200).json({
        data: await Promise.all(transformedCurriculumStructures),
        status: 200,
      });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const curriculumStructures = await CurriculumStructure.query()
        .where("is_deleted", false)
        .where("curriculum_id", params.id);

      const transformedCurriculumStructures = curriculumStructures.map(
        async (curriculumStructure) => {
          const subjectGroup = await SubjectGroup.find(
            curriculumStructure.subject_group_id
          );
          const subjectType = await SubjectType.find(
            subjectGroup!.subject_type_id
          );
          const subjectCategory = await SubjectCategory.find(
            subjectType!.subject_category_id
          );

          return {
            curriculum_structure_id:
              curriculumStructure.curriculum_structure_id,
            curriculum_id: curriculumStructure.curriculum_id,
            subject_group_id: curriculumStructure.subject_group_id,
            subject_group_name: subjectGroup?.subject_group_name,
            subject_type_id: subjectType?.subject_type_id,
            subject_type_name: subjectType?.subject_type_name,
            subject_category_id: subjectCategory?.subject_category_id,
            subject_category_name: subjectCategory?.subject_category_name,
            credit_total: curriculumStructure.credit_total,
            is_deleted: curriculumStructure.is_deleted,
            created_at: curriculumStructure.createdAt,
            updated_at: curriculumStructure.updatedAt,
          };
        }
      );

      return response.status(200).json({
        data: await Promise.all(transformedCurriculumStructures),
        status: 200,
      });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const validationSchema = schema.create({
      curriculum_id: schema.number(),
      subject_group_id: schema.number(),
      credit_total: schema.number(),
    });

    try {
      const payload = await request.validate({ schema: validationSchema });

      const curriculumStructure = await CurriculumStructure.create(payload);

      return response
        .status(201)
        .json({ data: curriculumStructure, status: 201 });
    } catch (error) {
      return response.status(400).json({
        message: "incorrect or incomplete information",
        status: 400,
      });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const validationSchema = schema.create({
      curriculum_id: schema.number(),
      subject_group_id: schema.number(),
      credit_total: schema.number(),
    });

    try {
      const id = params.id;
      const payload = await request.validate({ schema: validationSchema });
      const curriculumStructure: any = await CurriculumStructure.find(id);

      if (!curriculumStructure) {
        return response
          .status(404)
          .json({ message: "CurriculumStructure not found", status: 404 });
      } else {
        curriculumStructure.merge(payload);
        await curriculumStructure.save();
        return response.status(200).json({
          data: curriculumStructure,
          status: 200,
          message: `CurriculumStructure updated byId ${id} success`,
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
      const curriculumStructure: any = await CurriculumStructure.find(id);

      if (!curriculumStructure) {
        return response
          .status(404)
          .json({ message: "CurriculumStructure not found", status: 404 });
      } else if (curriculumStructure.is_deleted) {
        return response.status(404).json({
          message: "CurriculumStructure already deleted",
          status: 404,
        });
      } else {
        curriculumStructure.merge({ is_deleted: true });
        await curriculumStructure.save();
        return response.status(200).json({
          data: curriculumStructure,
          status: 200,
          message: `CurriculumStructure deleted byId ${id} success`,
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
