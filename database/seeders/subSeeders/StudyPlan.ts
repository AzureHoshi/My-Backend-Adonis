import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import StudyPlan from "App/Models/StudyPlan";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const studyPlanData = [
      {
        curriculum_id: 1,
        study_plan_name:
          "แผนการศึกษาแนะนำ มคอ.2 หลักสูตรวิศวกรรมคอมพิวเตอร์ 2560",
        study_plan_total_credit: 130,
      },
      {
        curriculum_id: 2,
        study_plan_name:
          "แผนการศึกษาแนะนำ มคอ.2 หลักสูตรวิศวกรรมซอฟต์แวร์ 2566",
        study_plan_total_credit: 130,
      },
    ];

    await StudyPlan.createMany(studyPlanData);
  }
}
