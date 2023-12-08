import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import InterestAnswer from "App/Models/InterestAnswer";
import InterestAnswerJob from "App/Models/InterestAnswersJob";

// ใน interface หรือ type สำหรับ response payload
interface ResultJob {
  id: number;
  label: string;
  value: number | null;
}

export default class InterestResultsController {
  public async resultInterestSurvey({
    request,
    response,
  }: HttpContextContract) {
    try {
      const storeManySchema = schema.create({
        interest_results: schema.array().members(
          schema.object().members({
            collegian_code: schema.string(),
            question_type: schema.number(),
            interest_answer_id: schema.number(),
            interest_question_score: schema.number.nullable(),
          })
        ),
      });

      const payload = await request.validate({
        schema: storeManySchema,
      });

      const resultJob: ResultJob[] = [];
      const seenJobIds = new Set<number>();

      for (const item of payload.interest_results) {
        const result = await InterestAnswerJob.query()
          .where("interest_answer_id", item.interest_answer_id)
          .preload("jobPosition");

        if (result && result.length > 0) {
          result.forEach((row) => {
            if (!seenJobIds.has(row.job_position_id)) {
              resultJob.push({
                id: row.job_position_id,
                label: row.jobPosition.job_position_name,
                value: null,
              });

              seenJobIds.add(row.job_position_id);
            }
          });
        }
      }

      for (const item of resultJob) {
        let totalScore = 0;
        let scoreCount = 0;

        for (const row of payload.interest_results) {
          const result = await InterestAnswer.query()
            .preload("interestQuestion")
            .preload("interest_answers_job")
            .where("interest_answer_id", row.interest_answer_id)
            .whereHas("interest_answers_job", (query) => {
              query
                .where("job_position_id", item.id)
                .where("is_deleted", false);
            });

          if (result.length > 0) {
            result.forEach((resultRow) => {
              if (resultRow.interestQuestion.interest_question_type === 1) {
                totalScore += row.interest_question_score || 0;
                scoreCount++;
              } else if (
                resultRow.interestQuestion.interest_question_type === 2
              ) {
                const interestAnswerJob = resultRow.interest_answers_job[0]; // Access the first element of the HasMany relationship
                totalScore += interestAnswerJob?.interest_answer_job_score || 0;
                scoreCount++;
              }
            });
          }
        }

        // Calculate the final score
        const averageScore =
          scoreCount > 0 ? ((totalScore / scoreCount) * 100) / 5 : 0;

        item.value = averageScore;
      }

      // Calculate the total value sum for percentage calculation
      const totalValueSum = resultJob.reduce(
        (sum, item) => sum + (item.value || 0),
        0
      );

      // Map the values to percentage of the total sum
      resultJob.forEach((item) => {
        if (totalValueSum > 0) {
          item.value = ((item.value || 0) / totalValueSum) * 100;
        } else {
          item.value = 0;
        }
      });

      return response.status(200).json({ data: resultJob, status: 200 });
    } catch (error) {
      console.error(error.messages);
      throw error; // Re-throw
    }
  }
}
