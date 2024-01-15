import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import JobCompetency from "App/Models/JobCompetency";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const jobCompetenciesSE66Data = [
      {
        job_position_id: 1,
        job_com_description:
          "ทักษะการออกแบบและการพัฒนาซอฟต์แวร์ (Software Design and Development)",
      },
      {
        job_position_id: 1,
        job_com_description: "ทักษะการทดสอบซอฟต์แวร์ (Software Testing)",
      },
      {
        job_position_id: 1,
        job_com_description: "ทักษะการจัดการซอฟต์แวร์ (Software Management)",
      },
      {
        job_position_id: 2,
        job_com_description:
          "ทักษะการเขียนโค้ดในภาษาโปรแกรมมิ่งเฉพาะ (Programming Languages)",
      },
      {
        job_position_id: 2,
        job_com_description: "ทักษะการเขียนโค้ดแบบ Agile (Agile Programming)",
      },
      {
        job_position_id: 2,
        job_com_description:
          "ทักษะการใช้เครื่องมือและเทคโนโลยีในการพัฒนาซอฟต์แวร์ (Software Development Tools and Technologies)",
      },
      {
        job_position_id: 3,
        job_com_description:
          "ทักษะการวิเคราะห์ระบบสารสนเทศ (Information System Analysis)",
      },
      {
        job_position_id: 3,
        job_com_description:
          "ทักษะการออกแบบระบบสารสนเทศ (Information System Design)",
      },
      {
        job_position_id: 3,
        job_com_description:
          "ทักษะการวางแผนและบริหารโครงการระบบสารสนเทศ (Information System Project Planning and Management)",
      },
      {
        job_position_id: 4,
        job_com_description:
          "ทักษะการวิเคราะห์และออกแบบระบบ (System Analysis and Design)",
      },
      {
        job_position_id: 4,
        job_com_description:
          "ทักษะการเขียนเอกสารเชิงเทคนิค (Technical Documentation)",
      },
      {
        job_position_id: 4,
        job_com_description: "ทักษะการสื่อสารกับผู้ใช้ (User Communication)",
      },
      {
        job_position_id: 5,
        job_com_description: "ทักษะการทดสอบซอฟต์แวร์ (Software Testing)",
      },
      {
        job_position_id: 5,
        job_com_description: "ทักษะการเขียนกรณีทดสอบ (Test Case Writing)",
      },
      {
        job_position_id: 5,
        job_com_description: "ทักษะการเขียนรายงานทดสอบ (Test Report Writing)",
      },
      {
        job_position_id: 6,
        job_com_description:
          "ทักษะการออกแบบสถาปัตยกรรมซอฟต์แวร์ (Software Architecture Design)",
      },
      {
        job_position_id: 6,
        job_com_description:
          "ทักษะการเขียนเอกสารสถาปัตยกรรมซอฟต์แวร์ (Software Architecture Documentation)",
      },
      {
        job_position_id: 6,
        job_com_description:
          "ทักษะการสื่อสารกับทีมพัฒนาซอฟต์แวร์ (Software Development Team Communication)",
      },
      {
        job_position_id: 7,
        job_com_description: "ทักษะการวางแผนธุรกิจ (Business Planning)",
      },
      {
        job_position_id: 7,
        job_com_description: "ทักษะการระดมทุน (Fundraising)",
      },
      {
        job_position_id: 7,
        job_com_description: "ทักษะการตลาดและการขาย (Marketing and Sales)",
      },
    ];

    await JobCompetency.createMany(jobCompetenciesSE66Data);
  }
}
