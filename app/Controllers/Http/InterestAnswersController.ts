import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import InterestAnswer from "App/Models/InterestAnswer";

const interestAnswerSchema = schema.create({
  interest_question_id: schema.number(),
  interest_answer_choice: schema.string({ trim: true }, [rules.maxLength(255)]),
  interest_answer_number: schema.number(),
});
export default class InterestAnswersController {
  public async index({ response }: HttpContextContract) {
    const interestAnswers = await InterestAnswer.query()
      .preload("interestQuestion")
      .where("interest_answers.is_deleted", false)
      .orderBy("interest_answers.interest_answer_number", "asc");
    return response.status(200).json({ data: interestAnswers, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({
        schema: interestAnswerSchema,
      });
      const interestAnswer: InterestAnswer = await InterestAnswer.create(
        payload
      );
      return response.status(201).json({ data: interestAnswer, status: 201 });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const id = params.id;
      const payload = await request.validate({ schema: interestAnswerSchema });
      const interestAnswer: any = await InterestAnswer.find(id);
      if (!interestAnswer) {
        return response
          .status(404)
          .json({ message: "InterestAnswer not found", status: 404 });
      } else {
        interestAnswer.merge(payload);
        await interestAnswer.save();
        return response.status(200).json({
          data: interestAnswer,
          status: 200,
          message: `InterestAnswer updated byId ${id} success`,
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
      const interestAnswer: any = await InterestAnswer.find(id);
      if (!interestAnswer) {
        return response
          .status(404)
          .json({ message: "InterestAnswer not found", status: 404 });
      } else if (interestAnswer.is_deleted) {
        return response
          .status(404)
          .json({ message: "InterestAnswer already deleted", status: 404 });
      } else {
        interestAnswer.is_deleted = true;
        await interestAnswer.save();
        return response.status(200).json({
          data: interestAnswer,
          status: 200,
          message: `InterestAnswer deleted byId ${id} success`,
        });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }
}
