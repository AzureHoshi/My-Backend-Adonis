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
        .where("std_code", params.id)
        .where("is_deleted", false)
        .preload("subject");

      if (!stuAcadRec || stuAcadRec.length === 0) {
        return response
          .status(404)
          .json({ message: "Student academic record not found" });
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
        std_code: schema.string({ trim: true }, [rules.maxLength(13)]),
        subject_id: schema.number(),
        stu_acad_rec_year: schema.number(),
        stu_acad_rec_semester: schema.number(),
        stu_acad_rec_grade: schema.string({ trim: true }, [rules.maxLength(2)]),
        stu_acad_rec_elective: schema.boolean(),
      });

      const validatedData = await request.validate({
        schema: validationSchema,
      });

      const checkForDuplicate = await StuAcadRec.query().where({
        std_code: validatedData.std_code,
        subject_id: validatedData.subject_id,
        stu_acad_rec_year: validatedData.stu_acad_rec_year,
        stu_acad_rec_semester: validatedData.stu_acad_rec_semester,
      });

      if (checkForDuplicate.length > 0) {
        return response.status(400).json({
          message: "This student already has this subject in this semester",
        });
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
        std_code: schema.string({ trim: true }, [rules.maxLength(13)]),
        subject_id: schema.number(),
        stu_acad_rec_year: schema.number(),
        stu_acad_rec_semester: schema.number(),
        stu_acad_rec_grade: schema.string({ trim: true }, [rules.maxLength(2)]),
        stu_acad_rec_elective: schema.boolean(),
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
