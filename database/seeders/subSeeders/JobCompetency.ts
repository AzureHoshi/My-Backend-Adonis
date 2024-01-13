import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import JobCompetency from "App/Models/JobCompetency";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const jobCompetenciesSE66Data = [
      {
        job_position_id: 1,
        job_com_description:
          "ความรู้เกี่ยวกับภาษาคอมพิวเตอร์และกรอบงาน (Framework) ต่าง ๆ",
      },
      {
        job_position_id: 1,
        job_com_description: "ทักษะในการเขียนโปรแกรม (Coding)",
      },
      {
        job_position_id: 2,
        job_com_description: "ทักษะในการเขียนโปรแกรม (Coding)",
      },
      {
        job_position_id: 2,
        job_com_description: "ทักษะการแก้ปัญหา (Problem Solving)",
      },
      {
        job_position_id: 3,
        job_com_description:
          "ความรู้เกี่ยวกับกระบวนการพัฒนาระบบสารสนเทศ (System Development Process)",
      },
      {
        job_position_id: 3,
        job_com_description: "ทักษะการคิดวิเคราะห์ (Critical Thinking)",
      },
      {
        job_position_id: 4,
        job_com_description:
          "ความรู้เกี่ยวกับการวิเคราะห์และออกแบบระบบ (System Analysis and Design)",
      },
      {
        job_position_id: 4,
        job_com_description: "ทักษะการคิดวิเคราะห์ (Critical Thinking)",
      },
      {
        job_position_id: 5,
        job_com_description:
          "ความรู้เกี่ยวกับกระบวนการพัฒนาซอฟต์แวร์ (Software Development Process)",
      },
      {
        job_position_id: 5,
        job_com_description: "ทักษะในการทดสอบซอฟต์แวร์ (Software Testing)",
      },
      {
        job_position_id: 6,
        job_com_description:
          "ความรู้เกี่ยวกับการออกแบบและสถาปัตยกรรมซอฟต์แวร์ (Software Design and Architecture)",
      },
      {
        job_position_id: 6,
        job_com_description:
          "ความรู้เกี่ยวกับเครือข่ายคอมพิวเตอร์ (Computer Network)",
      },
      {
        job_position_id: 7,
        job_com_description: "ทักษะทางธุรกิจ (Business Skills)",
      },
      {
        job_position_id: 7,
        job_com_description: "ทักษะทางการเงิน (Financial Skills)",
      },
      {
        job_position_id: 8,
        job_com_description: "ทักษะทางจิตวิญญาณ (Spiritual Skills)",
      },
      {
        job_position_id: 8,
        job_com_description: "ทักษะทางโลก (Worldly Skills)",
      },
    ];

    await JobCompetency.createMany(jobCompetenciesSE66Data);
  }
}
