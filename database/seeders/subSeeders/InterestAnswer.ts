import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import InterestAnswer from "App/Models/InterestAnswer";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const InterestAnswersData = [
      {
        interest_question_id: 1,
      },
      {
        interest_question_id: 2,
      },
      {
        interest_question_id: 3,
      },
      {
        interest_question_id: 4,
      },
      {
        interest_question_id: 5,
      },
      {
        interest_question_id: 6,
      },
      {
        interest_question_id: 7,
      },
      {
        interest_question_id: 8,
      },
      {
        interest_question_id: 9,
      },
      {
        interest_question_id: 10,
      },
      {
        interest_question_id: 11,
      },
      {
        interest_question_id: 12,
      },
      {
        interest_question_id: 13,
      },
      {
        //  คำตอบ type 2 แบบ ทดสอบ
        interest_question_id: 14,
        interest_answer_title: "2 ขา",
      },
      {
        interest_question_id: 14,
        interest_answer_title: "4 ขา",
      },
      {
        interest_question_id: 14,
        interest_answer_title: "6 ขา",
      },
      {
        interest_question_id: 14,
        interest_answer_title: "ลามะไม่มีขา",
      },
    ];

    await InterestAnswer.createMany(InterestAnswersData);
  }
}
