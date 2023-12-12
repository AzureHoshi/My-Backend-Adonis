import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import InterestAnswerJob from "App/Models/InterestAnswersJob";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const interestAnswersJobData = [
      {
        interest_answer_id: 1,
        job_position_id: 1,
      },
      {
        interest_answer_id: 2,
        job_position_id: 1,
      },
      {
        interest_answer_id: 3,
        job_position_id: 2,
      },
      {
        interest_answer_id: 4,
        job_position_id: 2,
      },
      {
        interest_answer_id: 5,
        job_position_id: 3,
      },
      {
        interest_answer_id: 5,
        job_position_id: 4,
      },
      {
        interest_answer_id: 6,
        job_position_id: 3,
      },
      {
        interest_answer_id: 7,
        job_position_id: 4,
      },
      {
        interest_answer_id: 8,
        job_position_id: 5,
      },
      {
        interest_answer_id: 9,
        job_position_id: 5,
      },
      {
        interest_answer_id: 10,
        job_position_id: 6,
      },
      {
        interest_answer_id: 11,
        job_position_id: 6,
      },
      {
        interest_answer_id: 12,
        job_position_id: 7,
      },
      {
        interest_answer_id: 13,
        job_position_id: 7,
      },
      {
        interest_answer_id: 14,
        job_position_id: 8,
      },
    ];

    await InterestAnswerJob.createMany(interestAnswersJobData);
  }
}
