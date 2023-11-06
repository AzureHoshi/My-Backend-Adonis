import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import CurriculumStructure from "App/Models/CurriculumStructure";
import SubjectGroup from "App/Models/SubjectGroup";
import SubjectType from "App/Models/SubjectType";

export default class CurriculumStructuresController {
  public async index({ response }: HttpContextContract) {
    try {
      const curriculumStructures = await CurriculumStructure.query().where(
        "is_deleted",
        false
      );

      const curriculumStructuresWithSubjectGroup = await Promise.all(
        curriculumStructures.map(async (curriculumStructure) => {
          const subjectGroup = await SubjectGroup.find(
            curriculumStructure.subject_group_id
          );

          if (!subjectGroup) {
            return {
              ...curriculumStructure.serialize(),
              subject_group_name: "",
              subject_type_id: 0,
            };
          } else {
            return {
              ...curriculumStructure.serialize(),
              subject_group_name: subjectGroup.subject_group_name,
              subject_type_id: subjectGroup.subject_type_id,
            };
          }
        })
      );

      const curriculumStructuresWithSubjectType = await Promise.all(
        curriculumStructuresWithSubjectGroup.map(
          async (curriculumStructure) => {
            const subjectType = await SubjectType.find(
              curriculumStructure.subject_type_id
            );

            if (!subjectType) {
              return {
                ...curriculumStructure,
                subject_type_name: "",
                subject_category_id: 0,
              };
            } else {
              return {
                ...curriculumStructure,
                subject_type_name: subjectType.subject_type_name,
                subject_category_id: subjectType.subject_category_id,
              };
            }
          }
        )
      );

      const curriculumStructuresWithSubjectCategory = await Promise.all(
        curriculumStructuresWithSubjectType.map(async (curriculumStructure) => {
          const subjectCategory = await SubjectType.find(
            curriculumStructure.subject_category_id
          );

          if (!subjectCategory) {
            return {
              ...curriculumStructure,
              subject_category_name: "",
            };
          } else {
            return {
              ...curriculumStructure,
              subject_category_name: subjectCategory.subject_type_name,
            };
          }
        })
      );

      return response
        .status(200)
        .json({ data: curriculumStructuresWithSubjectCategory, status: 200 });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const id = params.id;
      const curriculumStructure = await CurriculumStructure.query()
        .preload("curriculum")
        .preload("subject_group")
        .where("curriculum_id", id)
        .first();

      console.log(curriculumStructure);

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
        const subjectType = await SubjectType.query()
          .where(
            "subject_type_id",
            curriculumStructure.subject_group.subject_type_id
          )
          .firstOrFail();

        return response.status(200).json({
          data: {
            ...curriculumStructure.serialize(),
            subject_type: subjectType,
          },
          status: 200,
        });
      }
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
