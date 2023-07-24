import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import Subject from "App/Models/Subject";

const subjectSchema = schema.create({
  curriculum_id: schema.number(),
  subject_group_id: schema.number(),
  subject_code: schema.string({ trim: true }, [rules.maxLength(255)]),
  subject_name_th: schema.string({ trim: true }, [rules.maxLength(255)]),
  subject_name_en: schema.string({ trim: true }, [rules.maxLength(255)]),
  subject_credit: schema.number.optional(),
  subject_description: schema.string({ trim: true }, [rules.maxLength(255)]),
});

export default class SubjectsController {
  public async index({ response }: HttpContextContract) {
    const subject = await Subject.query()
      .preload("curriculums")
      .preload("subject_groups")
      .where("is_deleted", false)
      .orderBy("updatedAt", "desc");
    return response.status(200).json({ data: subject, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: subjectSchema });
      const subject: Subject = await Subject.create(payload);
      return response.status(201).json({ data: subject, status: 201 });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const id = params.id;
      const payload = await request.validate({ schema: subjectSchema });
      const subject: any = await Subject.find(id);
      if (!subject) {
        return response
          .status(404)
          .json({ message: "Subject not found", status: 404 });
      } else {
        subject.merge(payload);
        await subject.save();
        return response.status(200).json({
          data: subject,
          status: 200,
          message: `Subject updated byId ${id} success`,
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
      const id = params.id;
      const subject: any = await Subject.find(id);
      if (!subject) {
        return response
          .status(404)
          .json({ message: "Subject not found", status: 404 });
      } else if (subject.is_deleted) {
        return response
          .status(200)
          .json({ message: "Subject already deleted", status: 200 });
      } else {
        subject.is_deleted = true;
        await subject.save();
        return response.status(200).json({
          data: subject,
          status: 200,
          message: `Subject deleted byId ${id} success`,
        });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }
}
