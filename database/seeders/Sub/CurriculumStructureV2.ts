import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import CurriculumStructuresV2 from "App/Models/CurriculumStructuresV2";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const curriculumStructureV2Data = [
      {
        // 1
        curriculum_id: 1,
        subject_category_id: 1,
        subject_type_id: 1,
        subject_group_id: 1,
        csv2_credit_total: 12,
      },
      {
        curriculum_id: 1,
        subject_category_id: 1,
        subject_type_id: 1,
        subject_group_id: 2,
        csv2_credit_total: 3,
      },
      {
        curriculum_id: 1,
        subject_category_id: 1,
        subject_type_id: 1,
        subject_group_id: 3,
        csv2_credit_total: 9,
      },
      {
        // 2
        curriculum_id: 1,
        subject_category_id: 1,
        subject_type_id: 2,
        subject_group_id: 4,
        csv2_credit_total: 3,
      },
      {
        curriculum_id: 1,
        subject_category_id: 1,
        subject_type_id: 2,
        subject_group_id: 5,
        csv2_credit_total: 4,
      },
      {
        // 3
        curriculum_id: 1,
        subject_category_id: 2,
        subject_type_id: 3,
        subject_group_id: 6,
        csv2_credit_total: 10,
      },
      {
        curriculum_id: 1,
        subject_category_id: 2,
        subject_type_id: 3,
        subject_group_id: 7,
        csv2_credit_total: 22,
      },
      {
        // 4
        curriculum_id: 1,
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 8,
        csv2_credit_total: 16,
      },
      {
        curriculum_id: 1,
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 9,
        csv2_credit_total: 12,
      },
      {
        curriculum_id: 1,
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 10,
        csv2_credit_total: 9,
      },
      {
        curriculum_id: 1,
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 11,
        csv2_credit_total: 3,
      },
      {
        curriculum_id: 1,
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 12,
        csv2_credit_total: 10,
      },
      {
        // 5
        curriculum_id: 1,
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: null,
        csv2_credit_total: 12,
      },
    ];

    await CurriculumStructuresV2.createMany(curriculumStructureV2Data);
  }
}
