import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import ContinueSubject from "App/Models/ContinueSubject";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    // * continue_subject old version
    // const continueSubjectCE60Data = [
    //   { parent_id: null, subject_id: 1 },
    //   { parent_id: null, subject_id: 2 },
    //   { parent_id: null, subject_id: 3 },
    //   { parent_id: null, subject_id: 4 },
    //   { parent_id: null, subject_id: 5 },
    //   { parent_id: null, subject_id: 6 },
    //   { parent_id: null, subject_id: 7 },
    //   { parent_id: null, subject_id: 8 },
    //   { parent_id: null, subject_id: 9 },
    //   { parent_id: null, subject_id: 10 },
    //   { parent_id: null, subject_id: 11 },
    //   { parent_id: null, subject_id: 12 },
    //   { parent_id: null, subject_id: 13 },
    //   { parent_id: null, subject_id: 14 },
    //   { parent_id: null, subject_id: 15 },
    //   { parent_id: null, subject_id: 16 },
    //   { parent_id: null, subject_id: 17 },
    //   { parent_id: null, subject_id: 18 },
    //   { parent_id: null, subject_id: 19 },
    //   { parent_id: null, subject_id: 20 },
    //   { parent_id: null, subject_id: 21 },
    //   { parent_id: 21, subject_id: 22 },
    //   { parent_id: 21, subject_id: 29 },
    //   { parent_id: 21, subject_id: 30 },
    //   { parent_id: 30, subject_id: 70 },
    //   { parent_id: 30, subject_id: 71 },
    //   { parent_id: null, subject_id: 23 },
    //   { parent_id: 23, subject_id: 24 },
    //   { parent_id: 23, subject_id: 26 },
    //   { parent_id: null, subject_id: 25 },
    //   { parent_id: null, subject_id: 27 },
    //   { parent_id: null, subject_id: 28 },
    //   { parent_id: 28, subject_id: 39 },
    //   { parent_id: 28, subject_id: 65 },
    //   { parent_id: 28, subject_id: 69 },
    //   { parent_id: 28, subject_id: 75 },
    //   { parent_id: 28, subject_id: 76 },
    //   { parent_id: 39, subject_id: 40 },
    //   { parent_id: 39, subject_id: 46 },
    //   { parent_id: 39, subject_id: 45 },
    //   { parent_id: 39, subject_id: 81 },
    //   { parent_id: 40, subject_id: 52 },
    //   { parent_id: 46, subject_id: 43 },
    //   { parent_id: 45, subject_id: 72 },
    //   { parent_id: 45, subject_id: 73 },
    //   { parent_id: 45, subject_id: 74 },
    //   { parent_id: 45, subject_id: 77 },
    //   { parent_id: 45, subject_id: 78 },
    //   { parent_id: 45, subject_id: 83 },
    //   { parent_id: 45, subject_id: 86 },
    //   { parent_id: null, subject_id: 31 },
    //   { parent_id: null, subject_id: 32 },
    //   { parent_id: null, subject_id: 33 },
    //   { parent_id: null, subject_id: 34 },
    //   { parent_id: 34, subject_id: 38 },
    //   { parent_id: 34, subject_id: 61 },
    //   { parent_id: 34, subject_id: 66 },
    //   { parent_id: 38, subject_id: 62 },
    //   { parent_id: null, subject_id: 35 },
    //   { parent_id: null, subject_id: 36 },
    //   { parent_id: 36, subject_id: 60 },
    //   { parent_id: 36, subject_id: 80 },
    //   { parent_id: 36, subject_id: 82 },
    //   { parent_id: null, subject_id: 37 },
    //   { parent_id: 37, subject_id: 52 },
    //   { parent_id: 37, subject_id: 69 },
    //   { parent_id: null, subject_id: 41 },
    //   { parent_id: 41, subject_id: 42 },
    //   { parent_id: 41, subject_id: 53 },
    //   { parent_id: 41, subject_id: 59 },
    //   { parent_id: 42, subject_id: 54 },
    //   { parent_id: 42, subject_id: 55 },
    //   { parent_id: 42, subject_id: 56 },
    //   { parent_id: 42, subject_id: 58 },
    //   { parent_id: null, subject_id: 44 },
    //   { parent_id: 44, subject_id: 54 },
    //   { parent_id: null, subject_id: 47 },
    //   { parent_id: 47, subject_id: 48 },
    //   { parent_id: null, subject_id: 49 },
    //   { parent_id: null, subject_id: 50 },
    //   { parent_id: null, subject_id: 51 },
    //   { parent_id: null, subject_id: 57 },
    //   { parent_id: null, subject_id: 63 },
    //   { parent_id: null, subject_id: 64 },
    //   { parent_id: null, subject_id: 67 },
    //   { parent_id: null, subject_id: 68 },
    //   { parent_id: null, subject_id: 79 },
    //   { parent_id: null, subject_id: 84 },
    //   { parent_id: null, subject_id: 85 },
    //   { parent_id: null, subject_id: 87 },
    //   { parent_id: null, subject_id: 88 },
    // ];

    const continueSubjectsSE66Data = [
      {
        parent_id: null,
        subject_id: 1,
      },
      {
        parent_id: null,
        subject_id: 2,
      },
      {
        parent_id: null,
        subject_id: 3,
      },
      {
        parent_id: null,
        subject_id: 4,
      },
      {
        parent_id: null,
        subject_id: 5,
      },
      {
        parent_id: null,
        subject_id: 6,
      },
      {
        parent_id: null,
        subject_id: 7,
      },
      {
        parent_id: null,
        subject_id: 8,
      },
      {
        parent_id: null,
        subject_id: 9,
      },
      {
        parent_id: null,
        subject_id: 10,
      },
      {
        parent_id: null,
        subject_id: 11,
      },
      {
        parent_id: null,
        subject_id: 12,
      },
      {
        parent_id: null,
        subject_id: 13,
      },
      {
        parent_id: null,
        subject_id: 14,
      },
      {
        parent_id: null,
        subject_id: 15,
      },
      {
        parent_id: null,
        subject_id: 16,
      },
      {
        parent_id: null,
        subject_id: 17,
      },
      {
        parent_id: null,
        subject_id: 18,
      },
      {
        parent_id: null,
        subject_id: 19,
      },
      {
        parent_id: null,
        subject_id: 20,
      },
      {
        parent_id: null,
        subject_id: 21,
      },
      {
        parent_id: null,
        subject_id: 22,
      },
      {
        parent_id: null,
        subject_id: 23,
      },
      {
        parent_id: null,
        subject_id: 24,
      },
      {
        parent_id: null,
        subject_id: 25,
      },
      {
        parent_id: null,
        subject_id: 26,
      },
      {
        parent_id: null,
        subject_id: 27,
      },
      {
        parent_id: null,
        subject_id: 28,
      },
      {
        parent_id: null,
        subject_id: 29,
      },
      {
        parent_id: 29,
        subject_id: 33,
      },
      {
        parent_id: 29,
        subject_id: 34,
      },
      {
        parent_id: 29,
        subject_id: 46,
      },
      {
        parent_id: 29,
        subject_id: 66,
      },
      {
        parent_id: 29,
        subject_id: 67,
      },
      {
        parent_id: 29,
        subject_id: 90,
      },
      {
        parent_id: 33,
        subject_id: 94,
      },
      {
        parent_id: 90,
        subject_id: 95,
      },
      {
        parent_id: null,
        subject_id: 30,
      },
      {
        parent_id: null,
        subject_id: 31,
      },
      {
        parent_id: null,
        subject_id: 32,
      },
      {
        parent_id: null,
        subject_id: 35,
      },
      {
        parent_id: null,
        subject_id: 36,
      },
      {
        parent_id: null,
        subject_id: 37,
      },
      {
        parent_id: null,
        subject_id: 38,
      },
      {
        parent_id: null,
        subject_id: 39,
      },
      {
        parent_id: null,
        subject_id: 40,
      },
      {
        parent_id: null,
        subject_id: 41,
      },
      {
        parent_id: 41,
        subject_id: 42,
      },
      {
        parent_id: null,
        subject_id: 43,
      },
      {
        parent_id: null,
        subject_id: 44,
      },
      {
        parent_id: null,
        subject_id: 45,
      },
      {
        parent_id: null,
        subject_id: 47,
      },
      {
        parent_id: null,
        subject_id: 48,
      },
      {
        parent_id: 48,
        subject_id: 64,
      },
      {
        parent_id: null,
        subject_id: 49,
      },
      {
        parent_id: null,
        subject_id: 50,
      },
      {
        parent_id: null,
        subject_id: 51,
      },
      {
        parent_id: null,
        subject_id: 52,
      },
      {
        parent_id: null,
        subject_id: 53,
      },
      {
        parent_id: null,
        subject_id: 54,
      },
      {
        parent_id: null,
        subject_id: 55,
      },
      {
        parent_id: null,
        subject_id: 56,
      },
      {
        parent_id: null,
        subject_id: 57,
      },
      {
        parent_id: null,
        subject_id: 58,
      },
      {
        parent_id: null,
        subject_id: 59,
      },
      {
        parent_id: null,
        subject_id: 60,
      },
      {
        parent_id: null,
        subject_id: 61,
      },
      {
        parent_id: null,
        subject_id: 62,
      },
      {
        parent_id: null,
        subject_id: 63,
      },
      {
        parent_id: null,
        subject_id: 65,
      },
      {
        parent_id: null,
        subject_id: 68,
      },
      {
        parent_id: null,
        subject_id: 69,
      },
      {
        parent_id: null,
        subject_id: 70,
      },
      {
        parent_id: null,
        subject_id: 71,
      },
      {
        parent_id: null,
        subject_id: 72,
      },
      {
        parent_id: null,
        subject_id: 73,
      },
      {
        parent_id: null,
        subject_id: 74,
      },
      {
        parent_id: null,
        subject_id: 75,
      },
      {
        parent_id: null,
        subject_id: 76,
      },
      {
        parent_id: null,
        subject_id: 77,
      },
      {
        parent_id: null,
        subject_id: 78,
      },
      {
        parent_id: null,
        subject_id: 79,
      },
      {
        parent_id: null,
        subject_id: 80,
      },
      {
        parent_id: null,
        subject_id: 81,
      },
      {
        parent_id: null,
        subject_id: 82,
      },
      {
        parent_id: null,
        subject_id: 83,
      },
      {
        parent_id: null,
        subject_id: 84,
      },
      {
        parent_id: null,
        subject_id: 85,
      },
      {
        parent_id: null,
        subject_id: 86,
      },
      {
        parent_id: null,
        subject_id: 87,
      },
      {
        parent_id: null,
        subject_id: 88,
      },
      {
        parent_id: null,
        subject_id: 89,
      },
      {
        parent_id: null,
        subject_id: 91,
      },
      {
        parent_id: null,
        subject_id: 92,
      },
      {
        parent_id: null,
        subject_id: 93,
      },
      {
        parent_id: null,
        subject_id: 96,
      },
      {
        parent_id: null,
        subject_id: 97,
      },
      {
        parent_id: null,
        subject_id: 98,
      },
      {
        parent_id: null,
        subject_id: 99,
      },
      {
        parent_id: null,
        subject_id: 100,
      },
      {
        parent_id: null,
        subject_id: 101,
      },
      {
        parent_id: null,
        subject_id: 102,
      },
      {
        parent_id: null,
        subject_id: 103,
      },
      {
        parent_id: null,
        subject_id: 104,
      },
      {
        parent_id: null,
        subject_id: 105,
      },
      {
        parent_id: null,
        subject_id: 106,
      },
      {
        parent_id: null,
        subject_id: 107,
      },
      {
        parent_id: null,
        subject_id: 108,
      },
      {
        parent_id: null,
        subject_id: 109,
      },
      {
        parent_id: null,
        subject_id: 110,
      },
      {
        parent_id: 110,
        subject_id: 111,
      },
      {
        parent_id: null,
        subject_id: 112,
      },
      {
        parent_id: 112,
        subject_id: 113,
      },
      {
        parent_id: null,
        subject_id: 114,
      },
      {
        parent_id: null,
        subject_id: 115,
      },
    ];

    await ContinueSubject.createMany(continueSubjectsSE66Data);
  }
}
