import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import InterestQuestion from "App/Models/InterestQuestion";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const interestQuestionsData = [
      {
        // อาชีพที่ 1
        interest_survey_id: 1,
        interest_question_title: "มีความในชอบการศึกษาหรือหาเทคโนโลยีใหม่ ๆ",
        interest_question_type: 1,
      },
      {
        interest_survey_id: 1,
        interest_question_title: "มีการจัดการความคิดเชิงวิศวกรรม",
        interest_question_type: 1,
      },
      {
        // อาชีพที่ 2
        interest_survey_id: 1,
        interest_question_title:
          "มีความชอบในการออกแบบ และ วางแผนการทำงานต่าง ๆ",
        interest_question_type: 1,
      },
      {
        interest_survey_id: 1,
        interest_question_title: "มีความชอบในการเขียนโค้ด การแก้ไขโจทย์ปัญหา",
        interest_question_type: 1,
      },
      {
        // อาชีพที่ 3,4
        interest_survey_id: 1,
        interest_question_title: "มีทักษะ การวิเคราะห์ปัญหา และศึกษาปัญหา",
        interest_question_type: 1,
      },
      {
        // อาชีพที่ 3
        interest_survey_id: 1,
        interest_question_title: "มีทักษะในการตรวจสอบและสังเกต ถึงข้อผิดพลาด",
        interest_question_type: 1,
      },
      {
        // อาชีพที่ 4
        interest_survey_id: 1,
        interest_question_title:
          "มีความชอบในการออกแบบ และ วางแผน เพื่อแก้ไขปัญหา",
        interest_question_type: 1,
      },
      {
        // อาชีพที่ 5
        interest_survey_id: 1,
        interest_question_title: "มีทักษะในการตรวจสอบและสังเกต ถึงความบกพร่อง",
        interest_question_type: 1,
      },
      {
        interest_survey_id: 1,
        interest_question_title:
          "มีทักษะในการวิเคราะห์ว่า ควรใช้อะไร เหมาะกับสิ่งไหน เพื่อให้ตรงกับวัตถุประสงค์",
        interest_question_type: 1,
      },
      {
        // อาชีพที่ 6
        interest_survey_id: 1,
        interest_question_title:
          "มีความชอบในการประกอบส่วนต่าง ๆ มารวมกันเป็นระบบเดียว",
        interest_question_type: 1,
      },
      {
        interest_survey_id: 1,
        interest_question_title:
          "ชอบมองภาพรวม แต่ไม่สามารถระบุรายละเอียดทุกด้านของการทำงานได้",
        interest_question_type: 1,
      },
      {
        // อาชีพที่ 7
        interest_survey_id: 1,
        interest_question_title: "มีความชอบเทคโนโลยีที่สามารถทำให้มีรายได้",
        interest_question_type: 1,
      },
      {
        interest_survey_id: 1,
        interest_question_title: "มีทักษะ หรือ เทคนิคด้านการบริหารและการจัดการ",
        interest_question_type: 1,
      },
      {
        //  คำถาม type 2 แบบ ทดสอบ
        interest_survey_id: 1,
        interest_question_title: "ลามะมีกี่ขา?",
        interest_question_type: 2,
      },
    ];

    await InterestQuestion.createMany(interestQuestionsData);
  }
}
