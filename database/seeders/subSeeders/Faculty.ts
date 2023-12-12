import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Faculty from "App/Models/Faculty";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const facultyData = [
      {
        faculty_name_th: "คณะบริหารธุรกิจและศิลปศาสตร์",
        faculty_name_en: "Faculty of Business Administration and Liberal Arts",
      },
      {
        faculty_name_th: "คณะวิทยาศาสตร์และเทคโนโลยีการเกษตร",
        faculty_name_en: "Faculty of Sciences and Agricultural Technology",
      },
      {
        faculty_name_th: "คณะวิศวกรรมศาสตร์",
        faculty_name_en: "Faculty of Engineering",
      },
      {
        faculty_name_th: "คณะศิลปกรรมกรรมและสถาปัตยกรรมศาสตร์",
        faculty_name_en: "Faculty of Fine Arts and Architecture",
      },
      {
        faculty_name_th: "วิทยาลัยเทคโนโลยีและสหวิทยาการ",
        faculty_name_en: "College of Integrated Science and Technology",
      },
    ];

    await Faculty.createMany(facultyData);
  }
}
