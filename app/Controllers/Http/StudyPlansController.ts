import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import StudyPlan from "App/Models/StudyPlan";

const studyPlanSchema = schema.create({
  curriculum_id: schema.number(),
  study_plan_name: schema.string([rules.maxLength(255)]),
  study_plan_version: schema.number(),
  study_plan_total_credit: schema.number.optional(),
});

export default class StudyPlansController {
  public async index({ response }: HttpContextContract) {
    const studyPlans = await StudyPlan.query()
      .where("is_deleted", false)
      .orderBy("study_plans.updated_at", "desc");
    return response.json({ data: studyPlans, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: studyPlanSchema });
      const studyPlan: StudyPlan = await StudyPlan.create(payload);
      return response.status(201).json({ data: studyPlan, status: 201 });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const id = params.id;
    try {
      const payload = await request.validate({ schema: studyPlanSchema });
      const studyPlan: any = await StudyPlan.find(id);
      if (!studyPlan) {
        return response
          .status(404)
          .json({ message: "Study Plan not found", status: 404 });
      }
      studyPlan.merge(payload);
      await studyPlan.save();
      return response.status(200).json({
        data: studyPlan,
        status: 200,
        message: `Study Plan updated byId ${id} success`,
      });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const id = params.id;
    const studyPlan: any = await StudyPlan.find(id);
    if (!studyPlan) {
      return response
        .status(404)
        .json({ message: "Study Plan not found", status: 404 });
    } else if (studyPlan.is_deleted) {
      return response
        .status(404)
        .json({ message: "Study Plan already deleted", status: 404 });
    } else {
      studyPlan.is_deleted = true;
      await studyPlan.save();
      return response
        .status(200)
        .json({
          message: `Study Plan deleted byId ${id} success`,
          status: 200,
        });
    }
  }
}
