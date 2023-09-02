import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import SubjectGroup from "App/Models/SubjectGroup";
import SubjectType from "App/Models/SubjectType";
import SubjectCategory from "App/Models/SubjectCategory";

const subjectGroupSchema = schema.create({
  subject_type_id: schema.number(),
  subject_group_name: schema.string([rules.maxLength(255)]),
});

export default class SubjectGroupsController {
  public async index({ response }: HttpContextContract) {
    try {
      const subjectGroups = await SubjectGroup.query()
        .preload("subject_types", (query) => {
          query.preload("subject_categories");
        })
        .where("is_deleted", false)
        .orderBy("subject_group_id", "desc");

      return response.status(200).json({ data: subjectGroups, status: 200 });
    } catch (error) {
      // Handle any errors that occur during the query execution
      return response
        .status(500)
        .json({ error: "Internal Server Error", status: 500 });
    }
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
      const id = params.id;
      const payload = await request.validate({ schema: subjectGroupSchema });
      const subjectGroup: any = await SubjectGroup.find(id);
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
          message: `SubjectGroup updated byId ${id} success`,
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
      } else if (subjectGroup.is_deleted) {
        return response
          .status(200)
          .json({ message: "SubjectGroup already deleted", status: 200 });
      } else {
        subjectGroup.is_deleted = true;
        await subjectGroup.save();
        return response.status(200).json({
          message: `SubjectGroup deleted byId ${id} success`,
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
