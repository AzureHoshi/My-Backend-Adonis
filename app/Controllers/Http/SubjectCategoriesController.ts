import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import SubjectCategory from "App/Models/SubjectCategory";

const subjectCategorySchema = schema.create({
  subject_category_name: schema.string([rules.maxLength(255)]),
});
export default class SubjectCategoriesController {
  public async index({ response }: HttpContextContract) {
    const subjectCategories = await SubjectCategory.query()
      .where("is_deleted", 0)
      .orderBy("updatedAt", "desc");
    return response.status(200).json({ data: subjectCategories, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: subjectCategorySchema });
      const subjectCategory: SubjectCategory = await SubjectCategory.create(
        payload
      );
      return response.status(201).json({ data: subjectCategory, status: 201 });
    } catch (error) {
      return response.status(400).json({ error: error.message, status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const id = params.id;
    try {
      const payload = await request.validate({ schema: subjectCategorySchema });
      const subjectCategory: any = await SubjectCategory.find(id);
      if (!subjectCategory) {
        return response
          .status(404)
          .json({ message: "SubjectCategory not found", status: 404 });
      } else {
        subjectCategory.merge(payload);
        await subjectCategory.save();
        return response.status(200).json({
          data: subjectCategory,
          status: 200,
          message: `SubjectCategory updated byId ${id} success`,
        });
      }
    } catch {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const id = params.id;
    try {
      const subjectCategory: any = await SubjectCategory.find(id);
      if (!subjectCategory) {
        return response
          .status(404)
          .json({ message: "SubjectCategory not found", status: 404 });
      } else if (subjectCategory.is_deleted == 1) {
        return response
          .status(400)
          .json({ message: "SubjectCategory already deleted", status: 400 });
      } else {
        subjectCategory.is_deleted = true;
        await subjectCategory.save();
        return response.status(200).json({
          message: `SubjectCategory deleted byId ${id} success`,
          status: 200,
        });
      }
    } catch {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }
}
