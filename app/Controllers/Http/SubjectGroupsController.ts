import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import SubjectGroup from "App/Models/SubjectGroup";

const subjectGroupSchema = schema.create({
  subject_type_id: schema.number.optional(),
  subject_group_name: schema.string([rules.maxLength(255)]),
});

export default class SubjectGroupsController {
  public async index({ response }: HttpContextContract) {
    const subjectGroups = await SubjectGroup.query()
      .whereHas("subject_types", (query) => {
        query.where("is_deleted", false);
      })
      .preload("subject_types", (query) => {
        query.preload("subject_categories");
      })
      .where("is_deleted", false)
      .orderBy("updatedAt", "desc");
    return response.status(200).json({ data: subjectGroups, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: subjectGroupSchema });
      const subjectGroup: SubjectGroup = await SubjectGroup.create(payload);
      return response.status(201).json({ data: subjectGroup, status: 201 });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: subjectGroupSchema });
      const subjectGroup: any = await SubjectGroup.find(params.id);
      if (!subjectGroup) {
        return response
          .status(404)
          .json({ message: "SubjectGroup not found", status: 404 });
      } else {
        subjectGroup.merge(payload);
        await subjectGroup.save();
        return response.status(200).json({
          data: subjectGroup,
          status: 200,
          message: `SubjectGroup updated byId ${params.id} success`,
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
      const subjectGroup: any = await SubjectGroup.find(id);
      if (!subjectGroup) {
        return response
          .status(404)
          .json({ message: "SubjectGroup not found", status: 404 });
      }

      if (subjectGroup.is_deleted) {
        return response.status(200).json({
          message: "SubjectGroup already deleted",
          status: 200,
        });
      }

      subjectGroup.merge({ is_deleted: true });
      await subjectGroup.save();
      return response.status(200).json({
        data: subjectGroup,
        status: 200,
        message: `SubjectGroup deleted byId ${id} success`,
      });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }
}
