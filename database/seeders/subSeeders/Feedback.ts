import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Feedback from "App/Models/Feedback";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const feedbackData = [
      {
        feedback_question: "ด้านการออกแบบ Design และการจัดรูปแบบของ Website",
        feedback_type: 1,
      },
      {
        feedback_question: "การจัดรูปแบบ Website ง่ายต่อการอ่านและใช้งาน",
        feedback_type: 1,
      },
      {
        feedback_question: "สีสันในการออกแบบ Website มีความเหมาะสม",
        feedback_type: 1,
      },
      {
        feedback_question: "ความเหมาะสมในการใช้สัญลักษณ์ในการสื่อสารความหมาย",
        feedback_type: 1,
      },
      {
        feedback_question: "ความรวดเร็วในการแสดงผล",
        feedback_type: 1,
      },
      {
        feedback_question: "ความถูกต้องของเนื้อหาบน Website",
        feedback_type: 1,
      },
      {
        feedback_question: "ผลลัพธ์ที่ได้ตรงกับความต้องการ",
        feedback_type: 1,
      },
      {
        feedback_question: "เนื้อหามีประโยชน์ต่อผู้ใช้งาน",
        feedback_type: 1,
      },
      {
        feedback_question: "Website สามารถเป็นแหล่งความรู้ได้",
        feedback_type: 1,
      },
      {
        feedback_question: "เป็นแหล่งข้อมูลที่ตรงกับความต้องการของผู้ใช้งาน",
        feedback_type: 1,
      },
      {
        feedback_question: "ข้อเสนอแนะ เชิงคุณภาพ",
        feedback_type: 2,
      },
    ];

    await Feedback.createMany(feedbackData);
  }
}
