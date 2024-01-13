import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import StuAcadRec from "App/Models/StuAcadRec";

export default class StuAcadRecsController {
  public async index({ response }: HttpContextContract) {
    try {
      const stuAcadRec = await StuAcadRec.query()
        .where("is_deleted", false)
        .preload("subject");

      return response.status(200).json({ data: stuAcadRec });
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const stuAcadRec = await StuAcadRec.query()
        .where("collegian_code", params.id)
        .where("is_deleted", false)
        .preload("subject")
        .preload("continue_subjects")
        .preload("subject_structure")
        .preload("competencies")
        .preload("sub_plo_mappings", (sub_plo_mapping_query) => {
          sub_plo_mapping_query
            .preload("sub_plo", (sub_plo_query) => {
              sub_plo_query.preload("plo").where("is_deleted", false);
            })
            .where("is_deleted", false);
        });

      if (!stuAcadRec || stuAcadRec.length === 0) {
        return response.status(404).json({
          message: "Student academic record not found",
          data: [],
          status: 404,
        });
      } else {
        return response.status(200).json({ data: stuAcadRec });
      }
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const validationSchema = schema.create({
        collegian_code: schema.string({ trim: true }, [rules.maxLength(13)]),
        subject_id: schema.number(),
        stu_acad_rec_year: schema.number(),
        stu_acad_rec_semester: schema.number(),
        stu_acad_rec_grade: schema.string({ trim: true }, [rules.maxLength(2)]),
        stu_acad_rec_elective: schema.boolean.optional(),
      });

      const validatedData = await request.validate({
        schema: validationSchema,
      });

      const checkForDuplicate = await StuAcadRec.query().where({
        collegian_code: validatedData.collegian_code,
        subject_id: validatedData.subject_id,
      });

      if (checkForDuplicate.length > 0) {
        if (checkForDuplicate[0].is_deleted) {
          checkForDuplicate[0].is_deleted = false;
          checkForDuplicate[0].stu_acad_rec_year =
            validatedData.stu_acad_rec_year;
          checkForDuplicate[0].stu_acad_rec_semester =
            validatedData.stu_acad_rec_semester;
          checkForDuplicate[0].stu_acad_rec_grade =
            validatedData.stu_acad_rec_grade;
          checkForDuplicate[0].stu_acad_rec_elective =
            validatedData.stu_acad_rec_elective || false;

          await checkForDuplicate[0].save();

          return response.status(201).json({ data: checkForDuplicate[0] });
        } else {
          return response.status(400).json({
            message: "This student academic record is already exist",
          });
        }
      } else {
        const stuAcadRec = await StuAcadRec.create(validatedData);

        return response.status(201).json({ data: stuAcadRec });
      }
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const validationSchema = schema.create({
        collegian_code: schema.string({ trim: true }, [rules.maxLength(13)]),
        subject_id: schema.number(),
        stu_acad_rec_year: schema.number(),
        stu_acad_rec_semester: schema.number(),
        stu_acad_rec_grade: schema.string({ trim: true }, [rules.maxLength(2)]),
        stu_acad_rec_elective: schema.boolean.optional(),
      });

      const validateData = await request.validate({
        schema: validationSchema,
      });

      const stuAcadRec = await StuAcadRec.findOrFail(params.id);

      if (!stuAcadRec) {
        return response
          .status(404)
          .json({ message: "Student academic record not found" });
      } else if (stuAcadRec.is_deleted) {
        return response
          .status(400)
          .json({ message: "This student academic record is already deleted" });
      } else {
        stuAcadRec.merge(validateData);
        await stuAcadRec.save();

        return response.status(200).json({ data: stuAcadRec });
      }
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const stuAcadRec = await StuAcadRec.findOrFail(params.id);

      if (stuAcadRec.is_deleted) {
        return response
          .status(400)
          .json({ message: "This student academic record is already deleted" });
      } else {
        stuAcadRec.is_deleted = true;
        await stuAcadRec.save();

        return response.status(200).json({ data: stuAcadRec });
      }
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
}
