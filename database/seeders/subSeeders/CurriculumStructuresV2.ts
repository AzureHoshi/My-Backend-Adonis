import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import CurriculumStructuresV2 from "App/Models/CurriculumStructuresV2";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    // * curriculum_structure old version
    // const curriculumStructureV2Data = [
    //   {
    //     // 1
    //     curriculum_id: 1,
    //     subject_category_id: 1,
    //     subject_type_id: 1,
    //     subject_group_id: 1,
    //     credit_total: 12,
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_category_id: 1,
    //     subject_type_id: 1,
    //     subject_group_id: 2,
    //     credit_total: 3,
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_category_id: 1,
    //     subject_type_id: 1,
    //     subject_group_id: 3,
    //     credit_total: 9,
    //   },
    //   {
    //     // 2
    //     curriculum_id: 1,
    //     subject_category_id: 1,
    //     subject_type_id: 2,
    //     subject_group_id: 4,
    //     credit_total: 3,
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_category_id: 1,
    //     subject_type_id: 2,
    //     subject_group_id: 5,
    //     credit_total: 4,
    //   },
    //   {
    //     // 3
    //     curriculum_id: 1,
    //     subject_category_id: 2,
    //     subject_type_id: 3,
    //     subject_group_id: 6,
    //     credit_total: 10,
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_category_id: 2,
    //     subject_type_id: 3,
    //     subject_group_id: 7,
    //     credit_total: 22,
    //   },
    //   {
    //     // 4
    //     curriculum_id: 1,
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 8,
    //     credit_total: 16,
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 9,
    //     credit_total: 12,
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 10,
    //     credit_total: 9,
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 11,
    //     credit_total: 3,
    //   },
    //   {
    //     curriculum_id: 1,
    //     subject_category_id: 2,
    //     subject_type_id: 4,
    //     subject_group_id: 12,
    //     credit_total: 10,
    //   },
    //   {
    //     // 5
    //     curriculum_id: 1,
    //     subject_category_id: 2,
    //     subject_type_id: 5,
    //     subject_group_id: null,
    //     credit_total: 12,
    //   },
    // ];

    const curriculumStructureSE66Data = [
      {
        curriculum_id: 2,
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 1,
        credit_total: 9,
      },
      {
        curriculum_id: 2,
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 2,
        credit_total: 3,
      },
      {
        curriculum_id: 2,
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 3,
        credit_total: 6,
      },
      {
        curriculum_id: 2,
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 5,
        credit_total: 3,
      },
      {
        curriculum_id: 2,
        subject_category_id: 1,
        subject_type_id: null,
        subject_group_id: 4,
        credit_total: 3,
      },
      {
        curriculum_id: 2,
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 16,
        credit_total: 12,
      },
      {
        curriculum_id: 2,
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 17,
        credit_total: 55,
      },
      {
        curriculum_id: 2,
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 18,
        credit_total: 21,
      },
      {
        curriculum_id: 2,
        subject_category_id: 2,
        subject_type_id: null,
        subject_group_id: 19,
        credit_total: 12,
      },
      {
        curriculum_id: 2,
        subject_category_id: 3,
        subject_type_id: null,
        subject_group_id: null,
        credit_total: 6,
      },
    ];

    await CurriculumStructuresV2.createMany(curriculumStructureSE66Data);
  }
}
