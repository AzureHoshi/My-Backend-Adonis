import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import SubjectStructure from "App/Models/SubjectStructure";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const subjectStructuresData = [
      {
        // 1
        subject_category_id: 1,
        subject_type_id: 1,
        subject_group_id: 1,
        subject_id: 1,
      },
      {
        subject_category_id: 1,
        subject_type_id: 1,
        subject_group_id: 1,
        subject_id: 2,
      },
      {
        subject_category_id: 1,
        subject_type_id: 1,
        subject_group_id: 1,
        subject_id: 3,
      },
      {
        subject_category_id: 1,
        subject_type_id: 1,
        subject_group_id: 1,
        subject_id: 4,
      },
      {
        // 2
        subject_category_id: 1,
        subject_type_id: 1,
        subject_group_id: 2,
        subject_id: 5,
      },
      {
        // 3
        subject_category_id: 1,
        subject_type_id: 1,
        subject_group_id: 3,
        subject_id: 6,
      },
      {
        subject_category_id: 1,
        subject_type_id: 1,
        subject_group_id: 3,
        subject_id: 7,
      },
      {
        subject_category_id: 1,
        subject_type_id: 1,
        subject_group_id: 3,
        subject_id: 8,
      },
      {
        // 4
        subject_category_id: 1,
        subject_type_id: 2,
        subject_group_id: 4,
        subject_id: 9,
      },
      {
        subject_category_id: 1,
        subject_type_id: 2,
        subject_group_id: 4,
        subject_id: 10,
      },
      {
        subject_category_id: 1,
        subject_type_id: 2,
        subject_group_id: 4,
        subject_id: 11,
      },
      {
        subject_category_id: 1,
        subject_type_id: 2,
        subject_group_id: 4,
        subject_id: 12,
      },
      {
        subject_category_id: 1,
        subject_type_id: 2,
        subject_group_id: 4,
        subject_id: 13,
      },
      {
        subject_category_id: 1,
        subject_type_id: 2,
        subject_group_id: 4,
        subject_id: 14,
      },
      {
        // 5
        subject_category_id: 1,
        subject_type_id: 2,
        subject_group_id: 5,
        subject_id: 15,
      },
      {
        subject_category_id: 1,
        subject_type_id: 2,
        subject_group_id: 5,
        subject_id: 16,
      },
      {
        subject_category_id: 1,
        subject_type_id: 2,
        subject_group_id: 5,
        subject_id: 17,
      },
      {
        subject_category_id: 1,
        subject_type_id: 2,
        subject_group_id: 5,
        subject_id: 18,
      },
      {
        subject_category_id: 1,
        subject_type_id: 2,
        subject_group_id: 5,
        subject_id: 19,
      },
      {
        subject_category_id: 1,
        subject_type_id: 2,
        subject_group_id: 5,
        subject_id: 20,
      },
      {
        // 6
        subject_category_id: 2,
        subject_type_id: 3,
        subject_group_id: 6,
        subject_id: 21,
      },
      {
        subject_category_id: 2,
        subject_type_id: 3,
        subject_group_id: 6,
        subject_id: 22,
      },
      {
        subject_category_id: 2,
        subject_type_id: 3,
        subject_group_id: 6,
        subject_id: 23,
      },
      {
        subject_category_id: 2,
        subject_type_id: 3,
        subject_group_id: 6,
        subject_id: 24,
      },
      {
        // 7
        subject_category_id: 2,
        subject_type_id: 3,
        subject_group_id: 7,
        subject_id: 25,
      },
      {
        subject_category_id: 2,
        subject_type_id: 3,
        subject_group_id: 7,
        subject_id: 26,
      },
      {
        subject_category_id: 2,
        subject_type_id: 3,
        subject_group_id: 7,
        subject_id: 27,
      },
      {
        subject_category_id: 2,
        subject_type_id: 3,
        subject_group_id: 7,
        subject_id: 28,
      },
      {
        subject_category_id: 2,
        subject_type_id: 3,
        subject_group_id: 7,
        subject_id: 29,
      },
      {
        subject_category_id: 2,
        subject_type_id: 3,
        subject_group_id: 7,
        subject_id: 30,
      },
      {
        subject_category_id: 2,
        subject_type_id: 3,
        subject_group_id: 7,
        subject_id: 31,
      },
      {
        subject_category_id: 2,
        subject_type_id: 3,
        subject_group_id: 7,
        subject_id: 32,
      },
      {
        // 8
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 8,
        subject_id: 33,
      },
      {
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 8,
        subject_id: 34,
      },
      {
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 8,
        subject_id: 35,
      },
      {
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 8,
        subject_id: 36,
      },
      {
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 8,
        subject_id: 37,
      },
      {
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 8,
        subject_id: 38,
      },
      {
        // 9
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 9,
        subject_id: 39,
      },
      {
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 9,
        subject_id: 40,
      },
      {
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 9,
        subject_id: 41,
      },
      {
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 9,
        subject_id: 42,
      },
      {
        // 10
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 10,
        subject_id: 43,
      },
      {
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 10,
        subject_id: 44,
      },
      {
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 10,
        subject_id: 45,
      },
      {
        // 11
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 11,
        subject_id: 46,
      },
      {
        // 12
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 12,
        subject_id: 47,
      },
      {
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 12,
        subject_id: 48,
      },
      {
        subject_category_id: 2,
        subject_type_id: 4,
        subject_group_id: 12,
        subject_id: 49,
      },
      {
        // 13
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 13,
        subject_id: 50,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 13,
        subject_id: 51,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 13,
        subject_id: 52,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 13,
        subject_id: 53,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 13,
        subject_id: 54,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 13,
        subject_id: 55,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 13,
        subject_id: 56,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 13,
        subject_id: 57,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 13,
        subject_id: 58,
      },
      {
        // 14
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 14,
        subject_id: 59,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 14,
        subject_id: 60,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 14,
        subject_id: 61,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 14,
        subject_id: 62,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 14,
        subject_id: 63,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 14,
        subject_id: 64,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 14,
        subject_id: 65,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 14,
        subject_id: 66,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 14,
        subject_id: 67,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 14,
        subject_id: 68,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 14,
        subject_id: 69,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 14,
        subject_id: 70,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 14,
        subject_id: 71,
      },
      {
        // 15
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 72,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 73,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 74,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 75,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 76,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 77,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 78,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 79,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 80,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 81,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 82,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 83,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 84,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 85,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 86,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 87,
      },
      {
        subject_category_id: 2,
        subject_type_id: 5,
        subject_group_id: 15,
        subject_id: 88,
      },
    ];

    await SubjectStructure.createMany(subjectStructuresData);
  }
}
