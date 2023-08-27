import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import CollegianFeedback from "App/Models/CollegianFeedback";

const collegianFeedbackSchema = schema.array().members(
  schema.object().members({
    collegian_id: schema.number(),
    feedback_id: schema.number(),
    feedback_answer_id: schema.number(),
  })
);

export default class CollegianFeedbacksController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const rawData = request.raw();
      const { data } = JSON.parse(rawData);

      const collegianFeedbacks = await Promise.all(
        data.map(async (collegianFeedback) => {
          const newCollegianFeedback = await CollegianFeedback.create(
            collegianFeedback
          );
          return newCollegianFeedback;
        })
      );

      return response.status(201).json({
        data: collegianFeedbacks,
        status: 201,
        message: "CollegianFeedback created success",
      });
    } catch (error) {
      let errorMessage = "Validation failed";
      if (error?.messages?.errors?.length > 0) {
        errorMessage = error.messages.errors.join(", ");
      } else if (error?.message) {
        errorMessage = error.message;
      }
      return response.status(400).json({
        message: errorMessage,
        status: 400,
      });
    }
  }

  // Other methods like index, update, destroy, etc.
}
