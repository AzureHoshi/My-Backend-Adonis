import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import InterestAnswer from "App/Models/InterestAnswer";
import InterestAnswerJob from "App/Models/InterestAnswersJob";
import InterestResult from "App/Models/InterestResult";

// ใน interface หรือ type สำหรับ response payload
interface ResultJob {
  id: number;
  label: string;
  value: number | null;
}

export default class InterestResultsController {
  // ? แบบหา % ทุกตำแหน่งงานตามคำตอบที่เลือก
  // public async resultInterestSurvey({
  //   request,
  //   response,
  // }: HttpContextContract) {
  //   try {
  //     const storeManySchema = schema.create({
  //       collegian_code: schema.string(),
  //       interest_results: schema.array().members(
  //         schema.object().members({
  //           question_type: schema.number(),
  //           interest_answer_id: schema.number(),
  //           interest_question_score: schema.number.nullable(),
  //         })
  //       ),
  //     });
  //     const payload = await request.validate({
  //       schema: storeManySchema,
  //     });
  //     const resultJob: ResultJob[] = [];
  //     const seenJobIds = new Set<number>();
  //     for (const item of payload.interest_results) {
  //       const result = await InterestAnswerJob.query()
  //         .where("interest_answer_id", item.interest_answer_id)
  //         .preload("jobPosition");
  //       if (result && result.length > 0) {
  //         result.forEach((row) => {
  //           if (!seenJobIds.has(row.job_position_id)) {
  //             resultJob.push({
  //               id: row.job_position_id,
  //               label: row.jobPosition.job_position_name,
  //               value: null,
  //             });
  //             seenJobIds.add(row.job_position_id);
  //           }
  //         });
  //       }
  //     }
  //     for (const item of resultJob) {
  //       let totalScore = 0;
  //       let scoreCount = 0;
  //       for (const row of payload.interest_results) {
  //         const result = await InterestAnswer.query()
  //           .preload("interestQuestion")
  //           .preload("interest_answers_job")
  //           .where("interest_answer_id", row.interest_answer_id)
  //           .whereHas("interest_answers_job", (query) => {
  //             query
  //               .where("job_position_id", item.id)
  //               .where("is_deleted", false);
  //           });
  //         if (result.length > 0) {
  //           result.forEach((resultRow) => {
  //             if (resultRow.interestQuestion.interest_question_type === 1) {
  //               totalScore += row.interest_question_score || 0;
  //               scoreCount++;
  //             } else if (
  //               resultRow.interestQuestion.interest_question_type === 2
  //             ) {
  //               const interestAnswerJob = resultRow.interest_answers_job[0]; // Access the first element of the HasMany relationship
  //               totalScore += interestAnswerJob?.interest_answer_job_score || 0;
  //               scoreCount++;
  //             }
  //           });
  //         }
  //       }
  //       // Calculate the final score
  //       const averageScore =
  //         scoreCount > 0 ? ((totalScore / scoreCount) * 100) / 5 : 0;
  //       item.value = averageScore;
  //     }
  //     // Calculate the total value sum for percentage calculation
  //     const totalValueSum = resultJob.reduce(
  //       (sum, item) => sum + (item.value || 0),
  //       0
  //     );
  //     // Map the values to percentage of the total sum
  //     resultJob.forEach((item) => {
  //       if (totalValueSum > 0) {
  //         item.value = ((item.value || 0) / totalValueSum) * 100;
  //       } else {
  //         item.value = 0;
  //       }
  //     });
  //     const filteredResultJob = resultJob.filter((item) => item.value !== 0);
  //     const maxCountResult = await InterestResult.query()
  //       .where("collegian_code", payload.collegian_code)
  //       .max("interest_result_count as max_count");
  //     // max_count จะมีค่าเป็น null ถ้าไม่มีข้อมูล
  //     if (maxCountResult.length > 0) {
  //       const maxCount = maxCountResult[0].$extras.max_count || 0;
  //       console.log("Maximum count:", maxCount);
  //       const result = await InterestResult.createMany(
  //         filteredResultJob
  //           .filter((item) => item.value !== 0) // กรองเฉพาะ item ที่ value ไม่เป็น 0
  //           .map((item) => ({
  //             collegian_code: payload.collegian_code,
  //             job_position_id: item.id,
  //             interest_result_percent: item.value || 0,
  //             interest_result_count: maxCount + 1,
  //           }))
  //       );
  //       return response.status(200).json({
  //         dataChart: filteredResultJob,
  //         dataResult: result,
  //         maxCount: maxCount,
  //         status: 200,
  //       });
  //     } else {
  //       console.log("No data found.");
  //       const result = await InterestResult.createMany(
  //         filteredResultJob
  //           .filter((item) => item.value !== 0) // กรองเฉพาะ item ที่ value ไม่เป็น 0
  //           .map((item) => ({
  //             collegian_code: payload.collegian_code,
  //             job_position_id: item.id,
  //             interest_result_percent: item.value || 1,
  //             interest_result_count: 1,
  //           }))
  //       );
  //       return response.status(200).json({
  //         dataChart: filteredResultJob,
  //         dataResult: result,
  //         maxCount: 1,
  //         status: 200,
  //       });
  //     }
  //     // Create the result record
  //   } catch (error) {
  //     return response.status(400).json({
  //       message: "Something went wrong",
  //       error: error.messages || error.message,
  //       status: 400,
  //     });
  //   }
  // }

  // ? แบบหา % จาก 3 ตำแหน่งงานที่เลือกมากที่สุด
  public async store({ request, response }: HttpContextContract) {
    try {
      const storeManySchema = schema.create({
        collegian_code: schema.string(),
        interest_results: schema.array().members(
          schema.object().members({
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

      // Sort resultJob by value in descending order
      resultJob.sort((a, b) => (b.value || 0) - (a.value || 0));

      // Keep only the top 3 items
      const top3ResultJob = resultJob.slice(0, 3);

      for (const item of top3ResultJob) {
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
      const totalValueSum = top3ResultJob.reduce(
        (sum, item) => sum + (item.value || 0),
        0
      );

      // Map the values to percentage of the total sum
      top3ResultJob.forEach((item) => {
        if (totalValueSum > 0) {
          item.value = ((item.value || 0) / totalValueSum) * 100;
        } else {
          item.value = 0;
        }
      });

      const maxCountResult = await InterestResult.query()
        .where("collegian_code", payload.collegian_code)
        .max("interest_result_count as max_count");

      // max_count จะมีค่าเป็น null ถ้าไม่มีข้อมูล
      if (maxCountResult.length > 0) {
        const maxCount = maxCountResult[0].$extras.max_count || 0;
        InterestResult.createMany(
          top3ResultJob.map((item) => ({
            collegian_code: payload.collegian_code,
            job_position_id: item.id,
            interest_result_percent: item.value || 0,
            interest_result_count: maxCount + 1,
          }))
        );
        return response.status(200).json({
          message: "send survey success",
          maxCount: maxCount,
          status: 200,
        });
      } else {
        await InterestResult.createMany(
          top3ResultJob.map((item) => ({
            collegian_code: payload.collegian_code,
            job_position_id: item.id,
            interest_result_percent: item.value || 1,
            interest_result_count: 1,
          }))
        );
        return response.status(200).json({
          message: "send survey success",
          maxCount: 1,
          status: 200,
        });
      }
      // Create the result record
    } catch (error) {
      return response.status(400).json({
        message: "Something went wrong",
        error: error.messages || error.message,
        status: 400,
      });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const result = await InterestResult.query()
        .where("collegian_code", params.id)
        .where(
          "interest_result_count",
          InterestResult.query()
            .from("interest_results")
            .max("interest_result_count")
        )
        .orderBy("interest_result_percent", "desc")
        .preload("jobPosition", (query) => {
          query.where("is_deleted", false);
        });

      if (!result) {
        return response.status(404).json({
          message: "Not found",
          status: 404,
        });
      } else {
        return response.status(200).json({
          data: result,
          status: 200,
        });
      }
    } catch (error) {
      return response.status(500).json({
        message: "Something went wrong",
        error: error.messages || error.message,
        status: 500,
      });
    }
  }
}
