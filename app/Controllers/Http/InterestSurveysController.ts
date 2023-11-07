import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import InterestSurvey from "App/Models/InterestSurvey";

const interestSurveySchema = schema.create({
  curriculum_id: schema.number(),
  interest_survey_version: schema.number(),
});

export default class InterestSurveysController {
  public async index({ response }: HttpContextContract) {
    const interestSurveys = await InterestSurvey.query()
      .preload("curriculum")
      .where("interest_surveys.is_deleted", false)
      .orderBy("interest_surveys.updated_at", "desc");
    return response.status(200).json({ data: interestSurveys, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: interestSurveySchema });
      const interestSurvey: InterestSurvey = await InterestSurvey.create(
        payload
      );
      return response.status(201).json({ data: interestSurvey, status: 201 });
    } catch (error) {
      return response.status(400).json({
        message: "Incorrect or incomplete information",
        status: 400,
        error: error.message,
      });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const id = params.id;
      const interestSurvey: any = await InterestSurvey.find(id);
      if (!interestSurvey) {
        return response
          .status(404)
          .json({ message: "Interest Survey not found", status: 404 });
      }

      if (interestSurvey.is_deleted) {
        return response
          .status(400)
          .json({ message: "Interest Survey already deleted", status: 400 });
      }

      interestSurvey.merge({ is_deleted: true });
      await interestSurvey.save();
      return response.status(200).json({
        data: interestSurvey,
        status: 200,
        message: `Interest Survey deleted byId ${id} success`,
      });
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Incorrect or incomplete information", status: 400 });
    }
  }
}
