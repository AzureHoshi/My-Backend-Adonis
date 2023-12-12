import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import JobPosition from "App/Models/JobPosition";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const jobPositionData = [
      {
        job_position_name: "วิศวกรซอฟต์แวร์ (Software Engineer)",
      },
      {
        job_position_name: "นักพัฒนาซอฟต์แวร์ (Developer/Programmer)",
      },
      {
        job_position_name:
          "นักวิเคราะห์ระบบสารสนเทศในงานอุตสาหกรรม (IT Analyst)",
      },
      {
        job_position_name:
          "นักวิเคราะห์และออกแบบระบบ (System Analyst and Designer)",
      },
      {
        job_position_name:
          "นักประกันคุณภาพซอฟต์แวร์ (Software Quality Assurance)",
      },
      {
        job_position_name: "สถาปนิกซอฟต์แวร์ (Software Architect)",
      },
      {
        job_position_name:
          "ผู้ประกอบการด้านซอฟต์แวร์ (Software Entrepreneurship)",
      },
      {
        job_position_name: "ลามะ",
      },
    ];

    await JobPosition.createMany(jobPositionData);
  }
}
