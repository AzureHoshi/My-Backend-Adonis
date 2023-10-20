import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Curriculum from "App/Models/Curriculum";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const CurriculumData = [
      {
        faculty_id: 3,
        collegian_group_id: 7,
        curriculum_name_th:
          "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมอุตสาหการ",
        curriculum_name_en:
          "Bachelor of Engineering Program in lndustrial Engineering",
        curriculum_short_name_th: "วศ.บ.(วิศวกรรมอุตสาหการ)",
        curriculum_short_name_en: "B.Eng (lndustrial Engineering)",
        curriculum_year: 2560,
      },
      {
        faculty_id: 3,
        collegian_group_id: 7,
        curriculum_name_th: "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมโยธา",
        curriculum_name_en:
          "Bachelor of Engineering Program in Civil Engineering",
        curriculum_short_name_th: "วศ.บ.(วิศวกรรมโยธา)",
        curriculum_short_name_en: "B.Eng (Civil Engineering)",
        curriculum_year: 2560,
      },
      {
        faculty_id: 3,
        collegian_group_id: 7,
        curriculum_name_th:
          "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมเครื่องกล",
        curriculum_name_en:
          "Bachelor of Engineering Program in Mechanical Engineering",
        curriculum_short_name_th: "วศ.บ.(วิศวกรรมเครื่องกล)",
        curriculum_short_name_en: "B.Eng (Mechanical Engineering)",
        curriculum_year: 2560,
      },
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
        curriculum_name_th: "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมไฟฟ้า",
        curriculum_name_en:
          "Bachelor of Engineering Program in Electrical Engineering",
        curriculum_short_name_th: "วศ.บ.(วิศวกรรมไฟฟ้า)",
        curriculum_short_name_en: "B.Eng (Electrical Engineering)",
        curriculum_year: 2560,
      },
      {
        faculty_id: 3,
        collegian_group_id: 7,
        curriculum_name_th:
          "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมสิ่งแวดล้อม",
        curriculum_name_en:
          "Bachelor of Engineering Program in Environmental Engineering",
        curriculum_short_name_th: "วศ.บ.(วิศวกรรมสิ่งแวดล้อม)",
        curriculum_short_name_en: "B.Eng (Environmental Engineering)",
        curriculum_year: 2560,
      },
      {
        faculty_id: 3,
        collegian_group_id: 7,
        curriculum_name_th:
          "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมแม่พิมพ์และเครื่องมือ",
        curriculum_name_en:
          "Bachelor of Engineering Program in Tools and Die Engineering",
        curriculum_short_name_th: "วศ.บ.(วิศวกรรมแม่พิมพ์และเครื่องมือ)",
        curriculum_short_name_en: "B.Eng (Tools and Die Engineering)",
        curriculum_year: 2560,
      },
      {
        faculty_id: 3,
        collegian_group_id: 7,
        curriculum_name_th:
          "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมเหมืองแร่",
        curriculum_name_en:
          "Bachelor of Engineering Program in Mining Engineering",
        curriculum_short_name_th: "วศ.บ.(วิศวกรรมเหมืองแร่)",
        curriculum_short_name_en: "B.Eng (Mining Engineering)",
        curriculum_year: 2560,
      },
      {
        faculty_id: 3,
        collegian_group_id: 7,
        curriculum_name_th:
          "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมเกษตรและชีวภาพ",
        curriculum_name_en:
          "Bachelor of Engineering Program in Agricultural and Biological Engineering",
        curriculum_short_name_th: "วศ.บ.(วิศวกรรมเกษตรและชีวภาพ)",
        curriculum_short_name_en:
          "B.Eng (Agricultural and Biological Engineering)",
        curriculum_year: 2560,
      },
      {
        faculty_id: 3,
        collegian_group_id: 7,
        curriculum_name_th:
          "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมอิเล็กทรอนิกส์และระบบควบคุมอัตโนมัติ",
        curriculum_name_en:
          "Bachelor of Engineering Program in Electrical Engineering and Automatic Control Systems",
        curriculum_short_name_th:
          "วศ.บ.(วิศวกรรมอิเล็กทรอนิกส์และระบบควบคุมอัตโนมัติ)",
        curriculum_short_name_en:
          "B.Eng (Electrical Engineering and Automatic Control Systems)",
        curriculum_year: 2560,
      },
      {
        faculty_id: 3,
        collegian_group_id: 7,
        curriculum_name_th:
          "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมเมคคาทรอนิกส์",
        curriculum_name_en:
          "Bachelor of Engineering Program in Mechatronics Engineering",
        curriculum_short_name_th: "วศ.บ.(วิศวกรรมเมคคาทรอนิกส์)",
        curriculum_short_name_en: "B.Eng (Mechatronics Engineering)",
        curriculum_year: 2560,
      },
      {
        faculty_id: 3,
        collegian_group_id: 7,
        curriculum_name_th:
          "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมและนวัตกรรมการผลิตอาหาร",
        curriculum_name_en:
          "Bachelor of Engineering Program in Food Prodiction Engineering and Innovation",
        curriculum_short_name_th: "วศ.บ.(วิศวกรรมและนวัตกรรมการผลิตอาหาร)",
        curriculum_short_name_en:
          "B.Eng (Food Prodiction Engineering and Innovation)",
        curriculum_year: 2560,
      },
    ];

    await Curriculum.createMany(CurriculumData);
  }
}
