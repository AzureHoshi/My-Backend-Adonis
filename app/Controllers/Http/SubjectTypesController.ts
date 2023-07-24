import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import SubjectType from "App/Models/SubjectType";

const subjectTypeSchema = schema.create({
  subject_category_id: schema.number(),
  subject_type_name: schema.string([rules.maxLength(255)]),
});
export default class SubjectTypesController {
  public async index({ response }: HttpContextContract) {
    const subjectTypes = await SubjectType.query()
      .preload("subject_categories")
      .where("is_deleted", false)
      .orderBy("updatedAt", "desc");
    return response.status(200).json({ data: subjectTypes, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const subjectTypes = await request.validate({
        schema: subjectTypeSchema,
      });
      const subjectType: SubjectType = await SubjectType.create(subjectTypes);
      return response.status(201).json({ data: subjectType, status: 201 });
    } catch (error) {
      return response.status(400).json({ error: error.message, status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const id = params.id;
    try {
      const subjectTypes = await request.validate({
        schema: subjectTypeSchema,
      });
      const subjectType: any = await SubjectType.find(id);
      if (!subjectType) {
        return response
          .status(404)
          .json({ message: "SubjectType not found", status: 404 });
      }
      subjectType.merge(subjectTypes);
      await subjectType.save();
      return response.status(200).json({
        data: subjectType,
        status: 200,
        message: `SubjectType updated byId ${id} success`,
      });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const id = params.id;
    const subjectType: any = await SubjectType.find(id);
    try {
      if (!subjectType) {
        return response
          .status(404)
          .json({ message: "SubjectType not found", status: 404 });
      } else if (subjectType.is_deleted) {
        return response
          .status(404)
          .json({ message: "SubjectType already deleted", status: 404 });
      } else {
        subjectType.is_deleted = true;
        await subjectType.save();
        return response.status(200).json({
          message: `SubjectType deleted byId ${id} success`,
          status: 200,
        });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }
}
