import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Competency from "App/Models/Competency";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const competencyData = [
      {
        // วิชา Computer Programming
        subject_id: 28,
        competency_name: "การคิดแบบเป็นขั้นเป็นตอน",
      },
      {
        subject_id: 28,
        competency_name:
          "ความเข้าใจในพื้นฐานคณิตศาสตร์และวิทยาศาสตร์คอมพิวเตอร์",
      },
      {
        subject_id: 28,
        competency_name: "ทักษะการโปรแกรม",
      },
      {
        // วิชา Data Structures and Algorithms
        subject_id: 39,
        competency_name: "ความเข้าใจเกี่ยวกับโครงสร้างข้อมูล",
      },
      {
        subject_id: 39,
        competency_name: "ความเข้าใจเกี่ยวกับอัลกอริทึม",
      },
      {
        subject_id: 39,
        competency_name: "การวิเคราะห์อัลกอริทึม",
      },
      {
        subject_id: 39,
        competency_name: "การเขียนโค้ดที่มีประสิทธิภาพ",
      },
      {
        subject_id: 39,
        competency_name: "การคิดแบบโครงสร้างข้อมูล",
      },
      {
        // วิชา Artificial Intelligence and Machine Learning
        subject_id: 80,
        competency_name: "ความเข้าใจเกี่ยวกับ Machine Learning",
      },
      {
        subject_id: 80,
        competency_name: "ความเข้าใจเกี่ยวกับเครื่องมือและไลบรารี",
      },
    ];

    await Competency.createMany(competencyData);
  }
}
