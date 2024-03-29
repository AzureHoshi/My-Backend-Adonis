import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import InterestAnswerJob from "App/Models/InterestAnswersJob";
import { schema, rules } from "@ioc:Adonis/Core/Validator";

export default class InterestAnswersJobsController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const storeSchema = schema.create({
        interest_answer_id: schema.number(),
        job_position_id: schema.number(),
        interest_answers_job_score: schema.number.optional([rules.range(1, 5)]),
      });

      const payload = await request.validate({ schema: storeSchema });

      const interestAnswerJob = await InterestAnswerJob.create(payload);

      return response
        .status(201)
        .json({ data: interestAnswerJob, status: 201 });
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Internal server error", status: 500 });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const interestAnswerJob = await InterestAnswerJob.findOrFail(params.id);

      if (!interestAnswerJob) {
        return response
          .status(404)
          .json({ message: "Interest Answer Job not found", status: 404 });
      } else if (interestAnswerJob.is_deleted) {
        return response.status(400).json({
          message: "Interest Answer Job already deleted",
          status: 400,
        });
      } else {
        await interestAnswerJob.merge({ is_deleted: true });
        await interestAnswerJob.save();

        return response
          .status(200)
          .json({ data: interestAnswerJob, status: 200 });
      }
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Internal server error", error: error, status: 500 });
    }
  }
}
