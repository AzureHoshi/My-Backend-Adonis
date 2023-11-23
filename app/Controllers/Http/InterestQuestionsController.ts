import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import InterestAnswer from "App/Models/InterestAnswer";
import InterestQuestion from "App/Models/InterestQuestion";

const interestQuestionSchema = schema.create({
  interest_survey_id: schema.number(),
  interest_question_title: schema.string({ trim: true }, [
    rules.maxLength(255),
  ]),
  interest_question_type: schema.number(),
});
export default class InterestQuestionsController {
  public async index({ response }: HttpContextContract) {
    const interestQuestions = await InterestQuestion.query()
      .preload("interestSurvey")
      .where("is_deleted", false);
    return response.status(200).json({ data: interestQuestions, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({
        schema: interestQuestionSchema,
      });
      const interestQuestion: InterestQuestion = await InterestQuestion.create(
        payload
      );

      if (interestQuestion.interest_question_type === 1) {
        await InterestAnswer.create({
          interest_question_id: interestQuestion.interest_question_id,
        });

        const interestQuestionWithRelation = await InterestQuestion.query()
          .preload("interest_answers")
          .where("interest_question_id", interestQuestion.interest_question_id)
          .firstOrFail();

        return response
          .status(201)
          .json({ data: interestQuestionWithRelation, status: 201 });
      } else {
        return response
          .status(201)
          .json({ data: interestQuestion, status: 201 });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const id = params.id;
      const payload = await request.validate({
        schema: interestQuestionSchema,
      });
      const interestQuestion: any = await InterestQuestion.find(id);
      if (!interestQuestion) {
        return response
          .status(404)
          .json({ message: "InterestQuestion not found", status: 404 });
      } else {
        interestQuestion.merge(payload);
        await interestQuestion.save();
        return response.status(200).json({
          data: interestQuestion,
          status: 200,
          message: `InterestQuestion updated byId ${id} success`,
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
      const interestQuestion: any = await InterestQuestion.find(id);
      if (!interestQuestion) {
        return response
          .status(404)
          .json({ message: "InterestQuestion not found", status: 404 });
      } else if (interestQuestion.is_deleted) {
        return response
          .status(404)
          .json({ message: "InterestQuestion already deleted", status: 404 });
      } else {
        interestQuestion.is_deleted = true;
        await interestQuestion.save();
        return response.status(200).json({
          data: interestQuestion,
          status: 200,
          message: `InterestQuestion deleted byId ${id} success`,
        });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }
}
