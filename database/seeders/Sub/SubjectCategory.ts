import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import SubjectCategory from "App/Models/SubjectCategory";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const subjectCategoryData = [
      {
        subject_category_name: "หมวดวิชาศึกษาทั่วไป",
      },
      {
        subject_category_name: "หมวดวิชาเฉพาะ",
      },
      {
        subject_category_name: "หมวดวิชาเลือกเสรี",
      },
    ];

    await SubjectCategory.createMany(subjectCategoryData);
  }
}
