import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import SubPloMapping from "App/Models/SubPloMapping";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const subPLOsMappingData = [
      {
        sub_plo_id: 1,
        subject_id: 26,
      },
      {
        sub_plo_id: 2,
        subject_id: 26,
      },
      {
        sub_plo_id: 3,
        subject_id: 26,
      },
      {
        sub_plo_id: 5,
        subject_id: 26,
      },
      {
        sub_plo_id: 6,
        subject_id: 26,
      },
      {
        sub_plo_id: 7,
        subject_id: 26,
      },
      {
        sub_plo_id: 10,
        subject_id: 26,
      },
      {
        sub_plo_id: 11,
        subject_id: 26,
      },
      {
        sub_plo_id: 13,
        subject_id: 26,
      },
      {
        sub_plo_id: 14,
        subject_id: 26,
      },
      {
        sub_plo_id: 16,
        subject_id: 26,
      },
      {
        sub_plo_id: 1,
        subject_id: 27,
      },
      {
        sub_plo_id: 2,
        subject_id: 27,
      },
      {
        sub_plo_id: 3,
        subject_id: 27,
      },
      {
        sub_plo_id: 5,
        subject_id: 27,
      },
      {
        sub_plo_id: 6,
        subject_id: 27,
      },
      {
        sub_plo_id: 7,
        subject_id: 27,
      },
      {
        sub_plo_id: 10,
        subject_id: 27,
      },
      {
        sub_plo_id: 11,
        subject_id: 27,
      },
      {
        sub_plo_id: 13,
        subject_id: 27,
      },
      {
        sub_plo_id: 14,
        subject_id: 27,
      },
      {
        sub_plo_id: 16,
        subject_id: 27,
      },
      {
        sub_plo_id: 1,
        subject_id: 28,
      },
      {
        sub_plo_id: 2,
        subject_id: 28,
      },
      {
        sub_plo_id: 3,
        subject_id: 28,
      },
      {
        sub_plo_id: 5,
        subject_id: 28,
      },
      {
        sub_plo_id: 6,
        subject_id: 28,
      },
      {
        sub_plo_id: 7,
        subject_id: 28,
      },
      {
        sub_plo_id: 10,
        subject_id: 28,
      },
      {
        sub_plo_id: 11,
        subject_id: 28,
      },
      {
        sub_plo_id: 13,
        subject_id: 28,
      },
      {
        sub_plo_id: 14,
        subject_id: 28,
      },
      {
        sub_plo_id: 16,
        subject_id: 28,
      },
      {
        sub_plo_id: 1,
        subject_id: 29,
      },
      {
        sub_plo_id: 3,
        subject_id: 29,
      },
      {
        sub_plo_id: 6,
        subject_id: 29,
      },
      {
        sub_plo_id: 7,
        subject_id: 29,
      },
      {
        sub_plo_id: 8,
        subject_id: 29,
      },
      {
        sub_plo_id: 9,
        subject_id: 29,
      },
      {
        sub_plo_id: 11,
        subject_id: 29,
      },
      {
        sub_plo_id: 12,
        subject_id: 29,
      },
      {
        sub_plo_id: 13,
        subject_id: 29,
      },
      {
        sub_plo_id: 14,
        subject_id: 29,
      },
      {
        sub_plo_id: 15,
        subject_id: 29,
      },
      {
        sub_plo_id: 19,
        subject_id: 29,
      },
      {
        sub_plo_id: 21,
        subject_id: 29,
      },
      {
        sub_plo_id: 22,
        subject_id: 29,
      },
      {
        sub_plo_id: 23,
        subject_id: 29,
      },
      {
        sub_plo_id: 24,
        subject_id: 29,
      },
      {
        sub_plo_id: 26,
        subject_id: 29,
      },
    ];

    await SubPloMapping.createMany(subPLOsMappingData);
  }
}
