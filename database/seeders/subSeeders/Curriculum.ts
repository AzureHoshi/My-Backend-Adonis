import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Curriculum from "App/Models/Curriculum";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const curriculumData = [
      {
        faculty_id: 3,
        collegian_group_id: 7,
        curriculum_name_th:
          "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์",
        curriculum_name_en:
          "Bachelor of Engineering Program in Computer Engineering",
        curriculum_short_name_th: "วศ.บ.(วิศวกรรมคอมพิวเตอร์)",
        curriculum_short_name_en: "B.Eng (Computer Engineering)",
        curriculum_year: 2560,
      },
      {
        faculty_id: 3,
        collegian_group_id: 7,
        curriculum_name_th:
          "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมซอฟต์แวร์",
        curriculum_name_en:
          "Bachelor of Engineering Program in Software Engineering",
        curriculum_short_name_th: "วศ.บ.(วิศวกรรมซอฟต์แวร์)",
        curriculum_short_name_en: "B.Eng (Software Engineering)",
        curriculum_year: 2566,
      },
    ];

    await Curriculum.createMany(curriculumData);
  }
}
