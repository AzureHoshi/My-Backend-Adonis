import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import CollegianGroup from "App/Models/CollegianGroup";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const collegianGroupData = [
      {
        collegian_group_name_th: "วิศวกรรมศาสตรบัณฑิต",
        collegian_group_name_en: "Bachelor of  Engineering",
        collegian_group_short_name_th: "วศ.บ.",
        collegian_group_short_name_en: "B.Eng",
        curriculum_id: 2,
      },
      {
        collegian_group_name_th: "วิศวกรรมศาสตรบัณฑิต ต่อเนื่อง",
        collegian_group_name_en:
          "Bachelor of  Engineering (Continuing Program)",
        collegian_group_short_name_th: "วศ.บ. (ต่อเนื่อง)",
        collegian_group_short_name_en: "B.Eng (Continuing Program)",
        curriculum_id: 2,
      },
    ];

    await CollegianGroup.createMany(collegianGroupData);
  }
}
