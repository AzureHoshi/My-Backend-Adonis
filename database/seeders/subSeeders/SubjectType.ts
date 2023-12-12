import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import SubjectType from "App/Models/SubjectType";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const subjectTypeData = [
      {
        subject_category_id: 1,
        subject_type_name: "วิชาศึกษาทั่วไปบังคับ",
      },
      {
        subject_category_id: 1,
        subject_type_name: "วิชาศึกษาทั่วไปเลือก",
      },
      {
        subject_category_id: 2,
        subject_type_name: "วิชาแกน",
      },
      {
        subject_category_id: 2,
        subject_type_name: "วิชาเฉพาะด้าน",
      },
      {
        subject_category_id: 2,
        subject_type_name: "วิชาเลือก",
      },
    ];

    await SubjectType.createMany(subjectTypeData);
  }
}
