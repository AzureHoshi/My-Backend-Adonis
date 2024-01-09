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
      {
        sub_plo_id: 1,
        subject_id: 30,
      },
      {
        sub_plo_id: 2,
        subject_id: 30,
      },
      {
        sub_plo_id: 3,
        subject_id: 30,
      },
      {
        sub_plo_id: 4,
        subject_id: 30,
      },
      {
        sub_plo_id: 5,
        subject_id: 30,
      },
      {
        sub_plo_id: 6,
        subject_id: 30,
      },
      {
        sub_plo_id: 7,
        subject_id: 30,
      },
      {
        sub_plo_id: 8,
        subject_id: 30,
      },
      {
        sub_plo_id: 9,
        subject_id: 30,
      },
      {
        sub_plo_id: 10,
        subject_id: 30,
      },
      {
        sub_plo_id: 11,
        subject_id: 30,
      },
      {
        sub_plo_id: 12,
        subject_id: 30,
      },
      {
        sub_plo_id: 13,
        subject_id: 30,
      },
      {
        sub_plo_id: 14,
        subject_id: 30,
      },
      {
        sub_plo_id: 15,
        subject_id: 30,
      },
      {
        sub_plo_id: 16,
        subject_id: 30,
      },
      {
        sub_plo_id: 19,
        subject_id: 30,
      },
      {
        sub_plo_id: 21,
        subject_id: 30,
      },
      {
        sub_plo_id: 22,
        subject_id: 30,
      },
      {
        sub_plo_id: 23,
        subject_id: 30,
      },
      {
        sub_plo_id: 24,
        subject_id: 30,
      },
      {
        sub_plo_id: 26,
        subject_id: 30,
      },
      {
        sub_plo_id: 1,
        subject_id: 31,
      },
      {
        sub_plo_id: 2,
        subject_id: 31,
      },
      {
        sub_plo_id: 4,
        subject_id: 31,
      },
      {
        sub_plo_id: 7,
        subject_id: 31,
      },
      {
        sub_plo_id: 8,
        subject_id: 31,
      },
      {
        sub_plo_id: 13,
        subject_id: 31,
      },
      {
        sub_plo_id: 22,
        subject_id: 31,
      },
      {
        sub_plo_id: 24,
        subject_id: 31,
      },
      {
        sub_plo_id: 3,
        subject_id: 32,
      },
      {
        sub_plo_id: 6,
        subject_id: 32,
      },
      {
        sub_plo_id: 7,
        subject_id: 32,
      },
      {
        sub_plo_id: 8,
        subject_id: 32,
      },
      {
        sub_plo_id: 9,
        subject_id: 32,
      },
      {
        sub_plo_id: 11,
        subject_id: 32,
      },
      {
        sub_plo_id: 12,
        subject_id: 32,
      },
      {
        sub_plo_id: 13,
        subject_id: 32,
      },
      {
        sub_plo_id: 14,
        subject_id: 32,
      },
      {
        sub_plo_id: 15,
        subject_id: 32,
      },
      {
        sub_plo_id: 19,
        subject_id: 32,
      },
      {
        sub_plo_id: 21,
        subject_id: 32,
      },
      {
        sub_plo_id: 22,
        subject_id: 32,
      },
      {
        sub_plo_id: 23,
        subject_id: 32,
      },
      {
        sub_plo_id: 24,
        subject_id: 32,
      },
      {
        sub_plo_id: 26,
        subject_id: 32,
      },
      {
        sub_plo_id: 1,
        subject_id: 33,
      },
      {
        sub_plo_id: 3,
        subject_id: 33,
      },
      {
        sub_plo_id: 6,
        subject_id: 33,
      },
      {
        sub_plo_id: 7,
        subject_id: 33,
      },
      {
        sub_plo_id: 8,
        subject_id: 33,
      },
      {
        sub_plo_id: 9,
        subject_id: 33,
      },
      {
        sub_plo_id: 11,
        subject_id: 33,
      },
      {
        sub_plo_id: 12,
        subject_id: 33,
      },
      {
        sub_plo_id: 13,
        subject_id: 33,
      },
      {
        sub_plo_id: 14,
        subject_id: 33,
      },
      {
        sub_plo_id: 15,
        subject_id: 33,
      },
      {
        sub_plo_id: 19,
        subject_id: 33,
      },
      {
        sub_plo_id: 21,
        subject_id: 33,
      },
      {
        sub_plo_id: 22,
        subject_id: 33,
      },
      {
        sub_plo_id: 23,
        subject_id: 33,
      },
      {
        sub_plo_id: 24,
        subject_id: 33,
      },
      {
        sub_plo_id: 26,
        subject_id: 33,
      },
      {
        sub_plo_id: 1,
        subject_id: 34,
      },
      {
        sub_plo_id: 3,
        subject_id: 34,
      },
      {
        sub_plo_id: 6,
        subject_id: 34,
      },
      {
        sub_plo_id: 7,
        subject_id: 34,
      },
      {
        sub_plo_id: 8,
        subject_id: 34,
      },
      {
        sub_plo_id: 9,
        subject_id: 34,
      },
      {
        sub_plo_id: 11,
        subject_id: 34,
      },
      {
        sub_plo_id: 12,
        subject_id: 34,
      },
      {
        sub_plo_id: 13,
        subject_id: 34,
      },
      {
        sub_plo_id: 14,
        subject_id: 34,
      },
      {
        sub_plo_id: 15,
        subject_id: 34,
      },
      {
        sub_plo_id: 19,
        subject_id: 34,
      },
      {
        sub_plo_id: 21,
        subject_id: 34,
      },
      {
        sub_plo_id: 22,
        subject_id: 34,
      },
      {
        sub_plo_id: 23,
        subject_id: 34,
      },
      {
        sub_plo_id: 24,
        subject_id: 34,
      },
      {
        sub_plo_id: 26,
        subject_id: 34,
      },
      {
        sub_plo_id: 1,
        subject_id: 35,
      },
      {
        sub_plo_id: 2,
        subject_id: 35,
      },
      {
        sub_plo_id: 3,
        subject_id: 35,
      },
      {
        sub_plo_id: 6,
        subject_id: 35,
      },
      {
        sub_plo_id: 7,
        subject_id: 35,
      },
      {
        sub_plo_id: 9,
        subject_id: 35,
      },
      {
        sub_plo_id: 10,
        subject_id: 35,
      },
      {
        sub_plo_id: 11,
        subject_id: 35,
      },
      {
        sub_plo_id: 12,
        subject_id: 35,
      },
      {
        sub_plo_id: 13,
        subject_id: 35,
      },
      {
        sub_plo_id: 15,
        subject_id: 35,
      },
      {
        sub_plo_id: 16,
        subject_id: 35,
      },
      {
        sub_plo_id: 21,
        subject_id: 35,
      },
      {
        sub_plo_id: 1,
        subject_id: 36,
      },
      {
        sub_plo_id: 2,
        subject_id: 36,
      },
      {
        sub_plo_id: 3,
        subject_id: 36,
      },
      {
        sub_plo_id: 6,
        subject_id: 36,
      },
      {
        sub_plo_id: 7,
        subject_id: 36,
      },
      {
        sub_plo_id: 9,
        subject_id: 36,
      },
      {
        sub_plo_id: 10,
        subject_id: 36,
      },
      {
        sub_plo_id: 11,
        subject_id: 36,
      },
      {
        sub_plo_id: 12,
        subject_id: 36,
      },
      {
        sub_plo_id: 13,
        subject_id: 36,
      },
      {
        sub_plo_id: 15,
        subject_id: 36,
      },
      {
        sub_plo_id: 16,
        subject_id: 36,
      },
      {
        sub_plo_id: 21,
        subject_id: 36,
      },
      {
        sub_plo_id: 3,
        subject_id: 37,
      },
      {
        sub_plo_id: 6,
        subject_id: 37,
      },
      {
        sub_plo_id: 7,
        subject_id: 37,
      },
      {
        sub_plo_id: 8,
        subject_id: 37,
      },
      {
        sub_plo_id: 9,
        subject_id: 37,
      },
      {
        sub_plo_id: 11,
        subject_id: 37,
      },
      {
        sub_plo_id: 12,
        subject_id: 37,
      },
      {
        sub_plo_id: 13,
        subject_id: 37,
      },
      {
        sub_plo_id: 14,
        subject_id: 37,
      },
      {
        sub_plo_id: 15,
        subject_id: 37,
      },
      {
        sub_plo_id: 19,
        subject_id: 37,
      },
      {
        sub_plo_id: 21,
        subject_id: 37,
      },
      {
        sub_plo_id: 22,
        subject_id: 37,
      },
      {
        sub_plo_id: 23,
        subject_id: 37,
      },
      {
        sub_plo_id: 24,
        subject_id: 37,
      },
      {
        sub_plo_id: 26,
        subject_id: 37,
      },
      {
        sub_plo_id: 1,
        subject_id: 38,
      },
      {
        sub_plo_id: 3,
        subject_id: 38,
      },
      {
        sub_plo_id: 6,
        subject_id: 38,
      },
      {
        sub_plo_id: 7,
        subject_id: 38,
      },
      {
        sub_plo_id: 8,
        subject_id: 38,
      },
      {
        sub_plo_id: 9,
        subject_id: 38,
      },
      {
        sub_plo_id: 11,
        subject_id: 38,
      },
      {
        sub_plo_id: 12,
        subject_id: 38,
      },
      {
        sub_plo_id: 13,
        subject_id: 38,
      },
      {
        sub_plo_id: 14,
        subject_id: 38,
      },
      {
        sub_plo_id: 15,
        subject_id: 38,
      },
      {
        sub_plo_id: 19,
        subject_id: 38,
      },
      {
        sub_plo_id: 21,
        subject_id: 38,
      },
      {
        sub_plo_id: 22,
        subject_id: 38,
      },
      {
        sub_plo_id: 23,
        subject_id: 38,
      },
      {
        sub_plo_id: 24,
        subject_id: 38,
      },
      {
        sub_plo_id: 26,
        subject_id: 38,
      },
      {
        sub_plo_id: 1,
        subject_id: 39,
      },
      {
        sub_plo_id: 2,
        subject_id: 39,
      },
      {
        sub_plo_id: 3,
        subject_id: 39,
      },
      {
        sub_plo_id: 6,
        subject_id: 39,
      },
      {
        sub_plo_id: 7,
        subject_id: 39,
      },
      {
        sub_plo_id: 9,
        subject_id: 39,
      },
      {
        sub_plo_id: 10,
        subject_id: 39,
      },
      {
        sub_plo_id: 11,
        subject_id: 39,
      },
      {
        sub_plo_id: 12,
        subject_id: 39,
      },
      {
        sub_plo_id: 13,
        subject_id: 39,
      },
      {
        sub_plo_id: 15,
        subject_id: 39,
      },
      {
        sub_plo_id: 16,
        subject_id: 39,
      },
      {
        sub_plo_id: 21,
        subject_id: 39,
      },
      {
        sub_plo_id: 1,
        subject_id: 40,
      },
      {
        sub_plo_id: 2,
        subject_id: 40,
      },
      {
        sub_plo_id: 3,
        subject_id: 40,
      },
      {
        sub_plo_id: 5,
        subject_id: 40,
      },
      {
        sub_plo_id: 6,
        subject_id: 40,
      },
      {
        sub_plo_id: 7,
        subject_id: 40,
      },
      {
        sub_plo_id: 8,
        subject_id: 40,
      },
      {
        sub_plo_id: 9,
        subject_id: 40,
      },
      {
        sub_plo_id: 10,
        subject_id: 40,
      },
      {
        sub_plo_id: 11,
        subject_id: 40,
      },
      {
        sub_plo_id: 12,
        subject_id: 40,
      },
      {
        sub_plo_id: 13,
        subject_id: 40,
      },
      {
        sub_plo_id: 14,
        subject_id: 40,
      },
      {
        sub_plo_id: 15,
        subject_id: 40,
      },
      {
        sub_plo_id: 16,
        subject_id: 40,
      },
      {
        sub_plo_id: 18,
        subject_id: 40,
      },
      {
        sub_plo_id: 21,
        subject_id: 40,
      },
      {
        sub_plo_id: 24,
        subject_id: 40,
      },
      {
        sub_plo_id: 1,
        subject_id: 41,
      },
      {
        sub_plo_id: 2,
        subject_id: 41,
      },
      {
        sub_plo_id: 3,
        subject_id: 41,
      },
      {
        sub_plo_id: 4,
        subject_id: 41,
      },
      {
        sub_plo_id: 5,
        subject_id: 41,
      },
      {
        sub_plo_id: 6,
        subject_id: 41,
      },
      {
        sub_plo_id: 7,
        subject_id: 41,
      },
      {
        sub_plo_id: 8,
        subject_id: 41,
      },
      {
        sub_plo_id: 9,
        subject_id: 41,
      },
      {
        sub_plo_id: 10,
        subject_id: 41,
      },
      {
        sub_plo_id: 11,
        subject_id: 41,
      },
      {
        sub_plo_id: 12,
        subject_id: 41,
      },
      {
        sub_plo_id: 13,
        subject_id: 41,
      },
      {
        sub_plo_id: 14,
        subject_id: 41,
      },
      {
        sub_plo_id: 15,
        subject_id: 41,
      },
      {
        sub_plo_id: 16,
        subject_id: 41,
      },
      {
        sub_plo_id: 19,
        subject_id: 41,
      },
      {
        sub_plo_id: 21,
        subject_id: 41,
      },
      {
        sub_plo_id: 22,
        subject_id: 41,
      },
      {
        sub_plo_id: 23,
        subject_id: 41,
      },
      {
        sub_plo_id: 24,
        subject_id: 41,
      },
      {
        sub_plo_id: 26,
        subject_id: 41,
      },
      {
        sub_plo_id: 1,
        subject_id: 42,
      },
      {
        sub_plo_id: 2,
        subject_id: 42,
      },
      {
        sub_plo_id: 3,
        subject_id: 42,
      },
      {
        sub_plo_id: 5,
        subject_id: 42,
      },
      {
        sub_plo_id: 6,
        subject_id: 42,
      },
      {
        sub_plo_id: 7,
        subject_id: 42,
      },
      {
        sub_plo_id: 8,
        subject_id: 42,
      },
      {
        sub_plo_id: 9,
        subject_id: 42,
      },
      {
        sub_plo_id: 10,
        subject_id: 42,
      },
      {
        sub_plo_id: 11,
        subject_id: 42,
      },
      {
        sub_plo_id: 12,
        subject_id: 42,
      },
      {
        sub_plo_id: 13,
        subject_id: 42,
      },
      {
        sub_plo_id: 14,
        subject_id: 42,
      },
      {
        sub_plo_id: 15,
        subject_id: 42,
      },
      {
        sub_plo_id: 16,
        subject_id: 42,
      },
      {
        sub_plo_id: 21,
        subject_id: 42,
      },
      {
        sub_plo_id: 24,
        subject_id: 42,
      },
      {
        sub_plo_id: 1,
        subject_id: 43,
      },
      {
        sub_plo_id: 3,
        subject_id: 43,
      },
      {
        sub_plo_id: 6,
        subject_id: 43,
      },
      {
        sub_plo_id: 7,
        subject_id: 43,
      },
      {
        sub_plo_id: 8,
        subject_id: 43,
      },
      {
        sub_plo_id: 9,
        subject_id: 43,
      },
      {
        sub_plo_id: 11,
        subject_id: 43,
      },
      {
        sub_plo_id: 12,
        subject_id: 43,
      },
      {
        sub_plo_id: 13,
        subject_id: 43,
      },
      {
        sub_plo_id: 14,
        subject_id: 43,
      },
      {
        sub_plo_id: 15,
        subject_id: 43,
      },
      {
        sub_plo_id: 19,
        subject_id: 43,
      },
      {
        sub_plo_id: 21,
        subject_id: 43,
      },
      {
        sub_plo_id: 22,
        subject_id: 43,
      },
      {
        sub_plo_id: 23,
        subject_id: 43,
      },
      {
        sub_plo_id: 24,
        subject_id: 43,
      },
      {
        sub_plo_id: 26,
        subject_id: 43,
      },
      {
        sub_plo_id: 3,
        subject_id: 44,
      },
      {
        sub_plo_id: 6,
        subject_id: 44,
      },
      {
        sub_plo_id: 7,
        subject_id: 44,
      },
      {
        sub_plo_id: 8,
        subject_id: 44,
      },
      {
        sub_plo_id: 9,
        subject_id: 44,
      },
      {
        sub_plo_id: 11,
        subject_id: 44,
      },
      {
        sub_plo_id: 12,
        subject_id: 44,
      },
      {
        sub_plo_id: 13,
        subject_id: 44,
      },
      {
        sub_plo_id: 14,
        subject_id: 44,
      },
      {
        sub_plo_id: 15,
        subject_id: 44,
      },
      {
        sub_plo_id: 19,
        subject_id: 44,
      },
      {
        sub_plo_id: 21,
        subject_id: 44,
      },
      {
        sub_plo_id: 22,
        subject_id: 44,
      },
      {
        sub_plo_id: 23,
        subject_id: 44,
      },
      {
        sub_plo_id: 24,
        subject_id: 44,
      },
      {
        sub_plo_id: 26,
        subject_id: 44,
      },
      {
        sub_plo_id: 1,
        subject_id: 46,
      },
      {
        sub_plo_id: 3,
        subject_id: 46,
      },
      {
        sub_plo_id: 6,
        subject_id: 46,
      },
      {
        sub_plo_id: 7,
        subject_id: 46,
      },
      {
        sub_plo_id: 8,
        subject_id: 46,
      },
      {
        sub_plo_id: 9,
        subject_id: 46,
      },
      {
        sub_plo_id: 11,
        subject_id: 46,
      },
      {
        sub_plo_id: 12,
        subject_id: 46,
      },
      {
        sub_plo_id: 13,
        subject_id: 46,
      },
      {
        sub_plo_id: 14,
        subject_id: 46,
      },
      {
        sub_plo_id: 15,
        subject_id: 46,
      },
      {
        sub_plo_id: 19,
        subject_id: 46,
      },
      {
        sub_plo_id: 21,
        subject_id: 46,
      },
      {
        sub_plo_id: 22,
        subject_id: 46,
      },
      {
        sub_plo_id: 23,
        subject_id: 46,
      },
      {
        sub_plo_id: 24,
        subject_id: 46,
      },
      {
        sub_plo_id: 26,
        subject_id: 46,
      },
      {
        sub_plo_id: 3,
        subject_id: 45,
      },
      {
        sub_plo_id: 6,
        subject_id: 45,
      },
      {
        sub_plo_id: 7,
        subject_id: 45,
      },
      {
        sub_plo_id: 8,
        subject_id: 45,
      },
      {
        sub_plo_id: 9,
        subject_id: 45,
      },
      {
        sub_plo_id: 11,
        subject_id: 45,
      },
      {
        sub_plo_id: 12,
        subject_id: 45,
      },
      {
        sub_plo_id: 13,
        subject_id: 45,
      },
      {
        sub_plo_id: 14,
        subject_id: 45,
      },
      {
        sub_plo_id: 15,
        subject_id: 45,
      },
      {
        sub_plo_id: 19,
        subject_id: 45,
      },
      {
        sub_plo_id: 21,
        subject_id: 45,
      },
      {
        sub_plo_id: 22,
        subject_id: 45,
      },
      {
        sub_plo_id: 23,
        subject_id: 45,
      },
      {
        sub_plo_id: 24,
        subject_id: 45,
      },
      {
        sub_plo_id: 26,
        subject_id: 45,
      },
      {
        sub_plo_id: 3,
        subject_id: 47,
      },
      {
        sub_plo_id: 6,
        subject_id: 47,
      },
      {
        sub_plo_id: 7,
        subject_id: 47,
      },
      {
        sub_plo_id: 8,
        subject_id: 47,
      },
      {
        sub_plo_id: 9,
        subject_id: 47,
      },
      {
        sub_plo_id: 11,
        subject_id: 47,
      },
      {
        sub_plo_id: 12,
        subject_id: 47,
      },
      {
        sub_plo_id: 13,
        subject_id: 47,
      },
      {
        sub_plo_id: 14,
        subject_id: 47,
      },
      {
        sub_plo_id: 15,
        subject_id: 47,
      },
      {
        sub_plo_id: 19,
        subject_id: 47,
      },
      {
        sub_plo_id: 21,
        subject_id: 47,
      },
      {
        sub_plo_id: 22,
        subject_id: 47,
      },
      {
        sub_plo_id: 23,
        subject_id: 47,
      },
      {
        sub_plo_id: 24,
        subject_id: 47,
      },
      {
        sub_plo_id: 26,
        subject_id: 47,
      },
      {
        sub_plo_id: 3,
        subject_id: 48,
      },
      {
        sub_plo_id: 6,
        subject_id: 48,
      },
      {
        sub_plo_id: 7,
        subject_id: 48,
      },
      {
        sub_plo_id: 8,
        subject_id: 48,
      },
      {
        sub_plo_id: 9,
        subject_id: 48,
      },
      {
        sub_plo_id: 11,
        subject_id: 48,
      },
      {
        sub_plo_id: 12,
        subject_id: 48,
      },
      {
        sub_plo_id: 13,
        subject_id: 48,
      },
      {
        sub_plo_id: 14,
        subject_id: 48,
      },
      {
        sub_plo_id: 15,
        subject_id: 48,
      },
      {
        sub_plo_id: 19,
        subject_id: 48,
      },
      {
        sub_plo_id: 21,
        subject_id: 48,
      },
      {
        sub_plo_id: 22,
        subject_id: 48,
      },
      {
        sub_plo_id: 23,
        subject_id: 48,
      },
      {
        sub_plo_id: 24,
        subject_id: 48,
      },
      {
        sub_plo_id: 26,
        subject_id: 48,
      },
      {
        sub_plo_id: 3,
        subject_id: 49,
      },
      {
        sub_plo_id: 6,
        subject_id: 49,
      },
      {
        sub_plo_id: 7,
        subject_id: 49,
      },
      {
        sub_plo_id: 8,
        subject_id: 49,
      },
      {
        sub_plo_id: 9,
        subject_id: 49,
      },
      {
        sub_plo_id: 11,
        subject_id: 49,
      },
      {
        sub_plo_id: 12,
        subject_id: 49,
      },
      {
        sub_plo_id: 13,
        subject_id: 49,
      },
      {
        sub_plo_id: 14,
        subject_id: 49,
      },
      {
        sub_plo_id: 15,
        subject_id: 49,
      },
      {
        sub_plo_id: 19,
        subject_id: 49,
      },
      {
        sub_plo_id: 21,
        subject_id: 49,
      },
      {
        sub_plo_id: 22,
        subject_id: 49,
      },
      {
        sub_plo_id: 23,
        subject_id: 49,
      },
      {
        sub_plo_id: 24,
        subject_id: 49,
      },
      {
        sub_plo_id: 26,
        subject_id: 49,
      },
      {
        sub_plo_id: 1,
        subject_id: 50,
      },
      {
        sub_plo_id: 3,
        subject_id: 50,
      },
      {
        sub_plo_id: 6,
        subject_id: 50,
      },
      {
        sub_plo_id: 7,
        subject_id: 50,
      },
      {
        sub_plo_id: 8,
        subject_id: 50,
      },
      {
        sub_plo_id: 9,
        subject_id: 50,
      },
      {
        sub_plo_id: 11,
        subject_id: 50,
      },
      {
        sub_plo_id: 12,
        subject_id: 50,
      },
      {
        sub_plo_id: 13,
        subject_id: 50,
      },
      {
        sub_plo_id: 14,
        subject_id: 50,
      },
      {
        sub_plo_id: 15,
        subject_id: 50,
      },
      {
        sub_plo_id: 19,
        subject_id: 50,
      },
      {
        sub_plo_id: 21,
        subject_id: 50,
      },
      {
        sub_plo_id: 22,
        subject_id: 50,
      },
      {
        sub_plo_id: 23,
        subject_id: 50,
      },
      {
        sub_plo_id: 24,
        subject_id: 50,
      },
      {
        sub_plo_id: 26,
        subject_id: 50,
      },
      {
        sub_plo_id: 1,
        subject_id: 51,
      },
      {
        sub_plo_id: 3,
        subject_id: 51,
      },
      {
        sub_plo_id: 6,
        subject_id: 51,
      },
      {
        sub_plo_id: 7,
        subject_id: 51,
      },
      {
        sub_plo_id: 8,
        subject_id: 51,
      },
      {
        sub_plo_id: 9,
        subject_id: 51,
      },
      {
        sub_plo_id: 11,
        subject_id: 51,
      },
      {
        sub_plo_id: 12,
        subject_id: 51,
      },
      {
        sub_plo_id: 13,
        subject_id: 51,
      },
      {
        sub_plo_id: 14,
        subject_id: 51,
      },
      {
        sub_plo_id: 15,
        subject_id: 51,
      },
      {
        sub_plo_id: 19,
        subject_id: 51,
      },
      {
        sub_plo_id: 21,
        subject_id: 51,
      },
      {
        sub_plo_id: 22,
        subject_id: 51,
      },
      {
        sub_plo_id: 23,
        subject_id: 51,
      },
      {
        sub_plo_id: 24,
        subject_id: 51,
      },
      {
        sub_plo_id: 26,
        subject_id: 51,
      },
      {
        sub_plo_id: 1,
        subject_id: 52,
      },
      {
        sub_plo_id: 3,
        subject_id: 52,
      },
      {
        sub_plo_id: 6,
        subject_id: 52,
      },
      {
        sub_plo_id: 7,
        subject_id: 52,
      },
      {
        sub_plo_id: 8,
        subject_id: 52,
      },
      {
        sub_plo_id: 9,
        subject_id: 52,
      },
      {
        sub_plo_id: 11,
        subject_id: 52,
      },
      {
        sub_plo_id: 12,
        subject_id: 52,
      },
      {
        sub_plo_id: 13,
        subject_id: 52,
      },
      {
        sub_plo_id: 14,
        subject_id: 52,
      },
      {
        sub_plo_id: 15,
        subject_id: 52,
      },
      {
        sub_plo_id: 19,
        subject_id: 52,
      },
      {
        sub_plo_id: 21,
        subject_id: 52,
      },
      {
        sub_plo_id: 22,
        subject_id: 52,
      },
      {
        sub_plo_id: 23,
        subject_id: 52,
      },
      {
        sub_plo_id: 24,
        subject_id: 52,
      },
      {
        sub_plo_id: 26,
        subject_id: 52,
      },
      {
        sub_plo_id: 1,
        subject_id: 53,
      },
      {
        sub_plo_id: 3,
        subject_id: 53,
      },
      {
        sub_plo_id: 6,
        subject_id: 53,
      },
      {
        sub_plo_id: 7,
        subject_id: 53,
      },
      {
        sub_plo_id: 8,
        subject_id: 53,
      },
      {
        sub_plo_id: 9,
        subject_id: 53,
      },
      {
        sub_plo_id: 11,
        subject_id: 53,
      },
      {
        sub_plo_id: 12,
        subject_id: 53,
      },
      {
        sub_plo_id: 13,
        subject_id: 53,
      },
      {
        sub_plo_id: 14,
        subject_id: 53,
      },
      {
        sub_plo_id: 15,
        subject_id: 53,
      },
      {
        sub_plo_id: 19,
        subject_id: 53,
      },
      {
        sub_plo_id: 21,
        subject_id: 53,
      },
      {
        sub_plo_id: 22,
        subject_id: 53,
      },
      {
        sub_plo_id: 23,
        subject_id: 53,
      },
      {
        sub_plo_id: 24,
        subject_id: 53,
      },
      {
        sub_plo_id: 26,
        subject_id: 53,
      },
      {
        sub_plo_id: 1,
        subject_id: 54,
      },
      {
        sub_plo_id: 3,
        subject_id: 54,
      },
      {
        sub_plo_id: 6,
        subject_id: 54,
      },
      {
        sub_plo_id: 7,
        subject_id: 54,
      },
      {
        sub_plo_id: 8,
        subject_id: 54,
      },
      {
        sub_plo_id: 9,
        subject_id: 54,
      },
      {
        sub_plo_id: 11,
        subject_id: 54,
      },
      {
        sub_plo_id: 12,
        subject_id: 54,
      },
      {
        sub_plo_id: 13,
        subject_id: 54,
      },
      {
        sub_plo_id: 14,
        subject_id: 54,
      },
      {
        sub_plo_id: 15,
        subject_id: 54,
      },
      {
        sub_plo_id: 19,
        subject_id: 54,
      },
      {
        sub_plo_id: 21,
        subject_id: 54,
      },
      {
        sub_plo_id: 22,
        subject_id: 54,
      },
      {
        sub_plo_id: 23,
        subject_id: 54,
      },
      {
        sub_plo_id: 24,
        subject_id: 54,
      },
      {
        sub_plo_id: 26,
        subject_id: 54,
      },
      {
        sub_plo_id: 1,
        subject_id: 55,
      },
      {
        sub_plo_id: 3,
        subject_id: 55,
      },
      {
        sub_plo_id: 6,
        subject_id: 55,
      },
      {
        sub_plo_id: 7,
        subject_id: 55,
      },
      {
        sub_plo_id: 8,
        subject_id: 55,
      },
      {
        sub_plo_id: 9,
        subject_id: 55,
      },
      {
        sub_plo_id: 11,
        subject_id: 55,
      },
      {
        sub_plo_id: 12,
        subject_id: 55,
      },
      {
        sub_plo_id: 13,
        subject_id: 55,
      },
      {
        sub_plo_id: 14,
        subject_id: 55,
      },
      {
        sub_plo_id: 15,
        subject_id: 55,
      },
      {
        sub_plo_id: 19,
        subject_id: 55,
      },
      {
        sub_plo_id: 21,
        subject_id: 55,
      },
      {
        sub_plo_id: 22,
        subject_id: 55,
      },
      {
        sub_plo_id: 23,
        subject_id: 55,
      },
      {
        sub_plo_id: 24,
        subject_id: 55,
      },
      {
        sub_plo_id: 26,
        subject_id: 55,
      },
      {
        sub_plo_id: 1,
        subject_id: 56,
      },
      {
        sub_plo_id: 3,
        subject_id: 56,
      },
      {
        sub_plo_id: 6,
        subject_id: 56,
      },
      {
        sub_plo_id: 7,
        subject_id: 56,
      },
      {
        sub_plo_id: 8,
        subject_id: 56,
      },
      {
        sub_plo_id: 9,
        subject_id: 56,
      },
      {
        sub_plo_id: 11,
        subject_id: 56,
      },
      {
        sub_plo_id: 12,
        subject_id: 56,
      },
      {
        sub_plo_id: 13,
        subject_id: 56,
      },
      {
        sub_plo_id: 14,
        subject_id: 56,
      },
      {
        sub_plo_id: 15,
        subject_id: 56,
      },
      {
        sub_plo_id: 19,
        subject_id: 56,
      },
      {
        sub_plo_id: 21,
        subject_id: 56,
      },
      {
        sub_plo_id: 22,
        subject_id: 56,
      },
      {
        sub_plo_id: 23,
        subject_id: 56,
      },
      {
        sub_plo_id: 24,
        subject_id: 56,
      },
      {
        sub_plo_id: 26,
        subject_id: 56,
      },
      {
        sub_plo_id: 1,
        subject_id: 57,
      },
      {
        sub_plo_id: 3,
        subject_id: 57,
      },
      {
        sub_plo_id: 6,
        subject_id: 57,
      },
      {
        sub_plo_id: 7,
        subject_id: 57,
      },
      {
        sub_plo_id: 8,
        subject_id: 57,
      },
      {
        sub_plo_id: 9,
        subject_id: 57,
      },
      {
        sub_plo_id: 11,
        subject_id: 57,
      },
      {
        sub_plo_id: 12,
        subject_id: 57,
      },
      {
        sub_plo_id: 13,
        subject_id: 57,
      },
      {
        sub_plo_id: 14,
        subject_id: 57,
      },
      {
        sub_plo_id: 15,
        subject_id: 57,
      },
      {
        sub_plo_id: 19,
        subject_id: 57,
      },
      {
        sub_plo_id: 21,
        subject_id: 57,
      },
      {
        sub_plo_id: 22,
        subject_id: 57,
      },
      {
        sub_plo_id: 23,
        subject_id: 57,
      },
      {
        sub_plo_id: 24,
        subject_id: 57,
      },
      {
        sub_plo_id: 26,
        subject_id: 57,
      },
      {
        sub_plo_id: 1,
        subject_id: 58,
      },
      {
        sub_plo_id: 2,
        subject_id: 58,
      },
      {
        sub_plo_id: 3,
        subject_id: 58,
      },
      {
        sub_plo_id: 7,
        subject_id: 58,
      },
      {
        sub_plo_id: 9,
        subject_id: 58,
      },
      {
        sub_plo_id: 10,
        subject_id: 58,
      },
      {
        sub_plo_id: 11,
        subject_id: 58,
      },
      {
        sub_plo_id: 12,
        subject_id: 58,
      },
      {
        sub_plo_id: 22,
        subject_id: 58,
      },
      {
        sub_plo_id: 23,
        subject_id: 58,
      },
      {
        sub_plo_id: 24,
        subject_id: 58,
      },
      {
        sub_plo_id: 25,
        subject_id: 58,
      },
      {
        sub_plo_id: 1,
        subject_id: 59,
      },
      {
        sub_plo_id: 2,
        subject_id: 59,
      },
      {
        sub_plo_id: 3,
        subject_id: 59,
      },
      {
        sub_plo_id: 7,
        subject_id: 59,
      },
      {
        sub_plo_id: 9,
        subject_id: 59,
      },
      {
        sub_plo_id: 10,
        subject_id: 59,
      },
      {
        sub_plo_id: 11,
        subject_id: 59,
      },
      {
        sub_plo_id: 12,
        subject_id: 59,
      },
      {
        sub_plo_id: 22,
        subject_id: 59,
      },
      {
        sub_plo_id: 23,
        subject_id: 59,
      },
      {
        sub_plo_id: 24,
        subject_id: 59,
      },
      {
        sub_plo_id: 25,
        subject_id: 59,
      },
      {
        sub_plo_id: 1,
        subject_id: 60,
      },
      {
        sub_plo_id: 2,
        subject_id: 60,
      },
      {
        sub_plo_id: 3,
        subject_id: 60,
      },
      {
        sub_plo_id: 7,
        subject_id: 60,
      },
      {
        sub_plo_id: 9,
        subject_id: 60,
      },
      {
        sub_plo_id: 10,
        subject_id: 60,
      },
      {
        sub_plo_id: 11,
        subject_id: 60,
      },
      {
        sub_plo_id: 12,
        subject_id: 60,
      },
      {
        sub_plo_id: 22,
        subject_id: 60,
      },
      {
        sub_plo_id: 23,
        subject_id: 60,
      },
      {
        sub_plo_id: 24,
        subject_id: 60,
      },
      {
        sub_plo_id: 25,
        subject_id: 60,
      },
      {
        sub_plo_id: 1,
        subject_id: 61,
      },
      {
        sub_plo_id: 2,
        subject_id: 61,
      },
      {
        sub_plo_id: 3,
        subject_id: 61,
      },
      {
        sub_plo_id: 7,
        subject_id: 61,
      },
      {
        sub_plo_id: 9,
        subject_id: 61,
      },
      {
        sub_plo_id: 10,
        subject_id: 61,
      },
      {
        sub_plo_id: 11,
        subject_id: 61,
      },
      {
        sub_plo_id: 12,
        subject_id: 61,
      },
      {
        sub_plo_id: 22,
        subject_id: 61,
      },
      {
        sub_plo_id: 23,
        subject_id: 61,
      },
      {
        sub_plo_id: 24,
        subject_id: 61,
      },
      {
        sub_plo_id: 25,
        subject_id: 61,
      },
      {
        sub_plo_id: 1,
        subject_id: 62,
      },
      {
        sub_plo_id: 2,
        subject_id: 62,
      },
      {
        sub_plo_id: 3,
        subject_id: 62,
      },
      {
        sub_plo_id: 7,
        subject_id: 62,
      },
      {
        sub_plo_id: 9,
        subject_id: 62,
      },
      {
        sub_plo_id: 10,
        subject_id: 62,
      },
      {
        sub_plo_id: 11,
        subject_id: 62,
      },
      {
        sub_plo_id: 12,
        subject_id: 62,
      },
      {
        sub_plo_id: 22,
        subject_id: 62,
      },
      {
        sub_plo_id: 23,
        subject_id: 62,
      },
      {
        sub_plo_id: 24,
        subject_id: 62,
      },
      {
        sub_plo_id: 25,
        subject_id: 62,
      },
      {
        sub_plo_id: 1,
        subject_id: 63,
      },
      {
        sub_plo_id: 2,
        subject_id: 63,
      },
      {
        sub_plo_id: 3,
        subject_id: 63,
      },
      {
        sub_plo_id: 7,
        subject_id: 63,
      },
      {
        sub_plo_id: 9,
        subject_id: 63,
      },
      {
        sub_plo_id: 10,
        subject_id: 63,
      },
      {
        sub_plo_id: 11,
        subject_id: 63,
      },
      {
        sub_plo_id: 12,
        subject_id: 63,
      },
      {
        sub_plo_id: 22,
        subject_id: 63,
      },
      {
        sub_plo_id: 23,
        subject_id: 63,
      },
      {
        sub_plo_id: 24,
        subject_id: 63,
      },
      {
        sub_plo_id: 25,
        subject_id: 63,
      },
      {
        sub_plo_id: 1,
        subject_id: 64,
      },
      {
        sub_plo_id: 3,
        subject_id: 64,
      },
      {
        sub_plo_id: 6,
        subject_id: 64,
      },
      {
        sub_plo_id: 7,
        subject_id: 64,
      },
      {
        sub_plo_id: 8,
        subject_id: 64,
      },
      {
        sub_plo_id: 9,
        subject_id: 64,
      },
      {
        sub_plo_id: 11,
        subject_id: 64,
      },
      {
        sub_plo_id: 12,
        subject_id: 64,
      },
      {
        sub_plo_id: 13,
        subject_id: 64,
      },
      {
        sub_plo_id: 14,
        subject_id: 64,
      },
      {
        sub_plo_id: 15,
        subject_id: 64,
      },
      {
        sub_plo_id: 19,
        subject_id: 64,
      },
      {
        sub_plo_id: 21,
        subject_id: 64,
      },
      {
        sub_plo_id: 22,
        subject_id: 64,
      },
      {
        sub_plo_id: 23,
        subject_id: 64,
      },
      {
        sub_plo_id: 24,
        subject_id: 64,
      },
      {
        sub_plo_id: 26,
        subject_id: 64,
      },
      {
        sub_plo_id: 1,
        subject_id: 65,
      },
      {
        sub_plo_id: 3,
        subject_id: 65,
      },
      {
        sub_plo_id: 6,
        subject_id: 65,
      },
      {
        sub_plo_id: 7,
        subject_id: 65,
      },
      {
        sub_plo_id: 8,
        subject_id: 65,
      },
      {
        sub_plo_id: 9,
        subject_id: 65,
      },
      {
        sub_plo_id: 11,
        subject_id: 65,
      },
      {
        sub_plo_id: 12,
        subject_id: 65,
      },
      {
        sub_plo_id: 13,
        subject_id: 65,
      },
      {
        sub_plo_id: 14,
        subject_id: 65,
      },
      {
        sub_plo_id: 15,
        subject_id: 65,
      },
      {
        sub_plo_id: 19,
        subject_id: 65,
      },
      {
        sub_plo_id: 21,
        subject_id: 65,
      },
      {
        sub_plo_id: 22,
        subject_id: 65,
      },
      {
        sub_plo_id: 23,
        subject_id: 65,
      },
      {
        sub_plo_id: 24,
        subject_id: 65,
      },
      {
        sub_plo_id: 26,
        subject_id: 65,
      },
      {
        sub_plo_id: 1,
        subject_id: 66,
      },
      {
        sub_plo_id: 3,
        subject_id: 66,
      },
      {
        sub_plo_id: 6,
        subject_id: 66,
      },
      {
        sub_plo_id: 7,
        subject_id: 66,
      },
      {
        sub_plo_id: 8,
        subject_id: 66,
      },
      {
        sub_plo_id: 9,
        subject_id: 66,
      },
      {
        sub_plo_id: 11,
        subject_id: 66,
      },
      {
        sub_plo_id: 12,
        subject_id: 66,
      },
      {
        sub_plo_id: 13,
        subject_id: 66,
      },
      {
        sub_plo_id: 14,
        subject_id: 66,
      },
      {
        sub_plo_id: 15,
        subject_id: 66,
      },
      {
        sub_plo_id: 19,
        subject_id: 66,
      },
      {
        sub_plo_id: 21,
        subject_id: 66,
      },
      {
        sub_plo_id: 22,
        subject_id: 66,
      },
      {
        sub_plo_id: 23,
        subject_id: 66,
      },
      {
        sub_plo_id: 24,
        subject_id: 66,
      },
      {
        sub_plo_id: 26,
        subject_id: 66,
      },
      {
        sub_plo_id: 1,
        subject_id: 67,
      },
      {
        sub_plo_id: 3,
        subject_id: 67,
      },
      {
        sub_plo_id: 6,
        subject_id: 67,
      },
      {
        sub_plo_id: 7,
        subject_id: 67,
      },
      {
        sub_plo_id: 8,
        subject_id: 67,
      },
      {
        sub_plo_id: 9,
        subject_id: 67,
      },
      {
        sub_plo_id: 11,
        subject_id: 67,
      },
      {
        sub_plo_id: 12,
        subject_id: 67,
      },
      {
        sub_plo_id: 13,
        subject_id: 67,
      },
      {
        sub_plo_id: 14,
        subject_id: 67,
      },
      {
        sub_plo_id: 15,
        subject_id: 67,
      },
      {
        sub_plo_id: 19,
        subject_id: 67,
      },
      {
        sub_plo_id: 21,
        subject_id: 67,
      },
      {
        sub_plo_id: 22,
        subject_id: 67,
      },
      {
        sub_plo_id: 23,
        subject_id: 67,
      },
      {
        sub_plo_id: 24,
        subject_id: 67,
      },
      {
        sub_plo_id: 26,
        subject_id: 67,
      },
      {
        sub_plo_id: 1,
        subject_id: 68,
      },
      {
        sub_plo_id: 3,
        subject_id: 68,
      },
      {
        sub_plo_id: 6,
        subject_id: 68,
      },
      {
        sub_plo_id: 7,
        subject_id: 68,
      },
      {
        sub_plo_id: 8,
        subject_id: 68,
      },
      {
        sub_plo_id: 9,
        subject_id: 68,
      },
      {
        sub_plo_id: 11,
        subject_id: 68,
      },
      {
        sub_plo_id: 12,
        subject_id: 68,
      },
      {
        sub_plo_id: 13,
        subject_id: 68,
      },
      {
        sub_plo_id: 14,
        subject_id: 68,
      },
      {
        sub_plo_id: 15,
        subject_id: 68,
      },
      {
        sub_plo_id: 19,
        subject_id: 68,
      },
      {
        sub_plo_id: 21,
        subject_id: 68,
      },
      {
        sub_plo_id: 22,
        subject_id: 68,
      },
      {
        sub_plo_id: 23,
        subject_id: 68,
      },
      {
        sub_plo_id: 24,
        subject_id: 68,
      },
      {
        sub_plo_id: 26,
        subject_id: 68,
      },
      {
        sub_plo_id: 1,
        subject_id: 69,
      },
      {
        sub_plo_id: 3,
        subject_id: 69,
      },
      {
        sub_plo_id: 6,
        subject_id: 69,
      },
      {
        sub_plo_id: 7,
        subject_id: 69,
      },
      {
        sub_plo_id: 8,
        subject_id: 69,
      },
      {
        sub_plo_id: 9,
        subject_id: 69,
      },
      {
        sub_plo_id: 11,
        subject_id: 69,
      },
      {
        sub_plo_id: 12,
        subject_id: 69,
      },
      {
        sub_plo_id: 13,
        subject_id: 69,
      },
      {
        sub_plo_id: 14,
        subject_id: 69,
      },
      {
        sub_plo_id: 15,
        subject_id: 69,
      },
      {
        sub_plo_id: 19,
        subject_id: 69,
      },
      {
        sub_plo_id: 21,
        subject_id: 69,
      },
      {
        sub_plo_id: 22,
        subject_id: 69,
      },
      {
        sub_plo_id: 23,
        subject_id: 69,
      },
      {
        sub_plo_id: 24,
        subject_id: 69,
      },
      {
        sub_plo_id: 26,
        subject_id: 69,
      },
      {
        sub_plo_id: 1,
        subject_id: 70,
      },
      {
        sub_plo_id: 3,
        subject_id: 70,
      },
      {
        sub_plo_id: 6,
        subject_id: 70,
      },
      {
        sub_plo_id: 7,
        subject_id: 70,
      },
      {
        sub_plo_id: 8,
        subject_id: 70,
      },
      {
        sub_plo_id: 9,
        subject_id: 70,
      },
      {
        sub_plo_id: 11,
        subject_id: 70,
      },
      {
        sub_plo_id: 12,
        subject_id: 70,
      },
      {
        sub_plo_id: 13,
        subject_id: 70,
      },
      {
        sub_plo_id: 14,
        subject_id: 70,
      },
      {
        sub_plo_id: 15,
        subject_id: 70,
      },
      {
        sub_plo_id: 19,
        subject_id: 70,
      },
      {
        sub_plo_id: 21,
        subject_id: 70,
      },
      {
        sub_plo_id: 22,
        subject_id: 70,
      },
      {
        sub_plo_id: 23,
        subject_id: 70,
      },
      {
        sub_plo_id: 24,
        subject_id: 70,
      },
      {
        sub_plo_id: 26,
        subject_id: 70,
      },
      {
        sub_plo_id: 1,
        subject_id: 71,
      },
      {
        sub_plo_id: 3,
        subject_id: 71,
      },
      {
        sub_plo_id: 6,
        subject_id: 71,
      },
      {
        sub_plo_id: 7,
        subject_id: 71,
      },
      {
        sub_plo_id: 8,
        subject_id: 71,
      },
      {
        sub_plo_id: 9,
        subject_id: 71,
      },
      {
        sub_plo_id: 11,
        subject_id: 71,
      },
      {
        sub_plo_id: 12,
        subject_id: 71,
      },
      {
        sub_plo_id: 13,
        subject_id: 71,
      },
      {
        sub_plo_id: 14,
        subject_id: 71,
      },
      {
        sub_plo_id: 15,
        subject_id: 71,
      },
      {
        sub_plo_id: 19,
        subject_id: 71,
      },
      {
        sub_plo_id: 21,
        subject_id: 71,
      },
      {
        sub_plo_id: 22,
        subject_id: 71,
      },
      {
        sub_plo_id: 23,
        subject_id: 71,
      },
      {
        sub_plo_id: 24,
        subject_id: 71,
      },
      {
        sub_plo_id: 26,
        subject_id: 71,
      },
      {
        sub_plo_id: 1,
        subject_id: 72,
      },
      {
        sub_plo_id: 3,
        subject_id: 72,
      },
      {
        sub_plo_id: 6,
        subject_id: 72,
      },
      {
        sub_plo_id: 7,
        subject_id: 72,
      },
      {
        sub_plo_id: 8,
        subject_id: 72,
      },
      {
        sub_plo_id: 9,
        subject_id: 72,
      },
      {
        sub_plo_id: 11,
        subject_id: 72,
      },
      {
        sub_plo_id: 12,
        subject_id: 72,
      },
      {
        sub_plo_id: 13,
        subject_id: 72,
      },
      {
        sub_plo_id: 14,
        subject_id: 72,
      },
      {
        sub_plo_id: 15,
        subject_id: 72,
      },
      {
        sub_plo_id: 19,
        subject_id: 72,
      },
      {
        sub_plo_id: 21,
        subject_id: 72,
      },
      {
        sub_plo_id: 22,
        subject_id: 72,
      },
      {
        sub_plo_id: 23,
        subject_id: 72,
      },
      {
        sub_plo_id: 24,
        subject_id: 72,
      },
      {
        sub_plo_id: 26,
        subject_id: 72,
      },
      {
        sub_plo_id: 1,
        subject_id: 73,
      },
      {
        sub_plo_id: 3,
        subject_id: 73,
      },
      {
        sub_plo_id: 6,
        subject_id: 73,
      },
      {
        sub_plo_id: 7,
        subject_id: 73,
      },
      {
        sub_plo_id: 8,
        subject_id: 73,
      },
      {
        sub_plo_id: 9,
        subject_id: 73,
      },
      {
        sub_plo_id: 11,
        subject_id: 73,
      },
      {
        sub_plo_id: 12,
        subject_id: 73,
      },
      {
        sub_plo_id: 13,
        subject_id: 73,
      },
      {
        sub_plo_id: 14,
        subject_id: 73,
      },
      {
        sub_plo_id: 15,
        subject_id: 73,
      },
      {
        sub_plo_id: 19,
        subject_id: 73,
      },
      {
        sub_plo_id: 21,
        subject_id: 73,
      },
      {
        sub_plo_id: 22,
        subject_id: 73,
      },
      {
        sub_plo_id: 23,
        subject_id: 73,
      },
      {
        sub_plo_id: 24,
        subject_id: 73,
      },
      {
        sub_plo_id: 26,
        subject_id: 73,
      },
      {
        sub_plo_id: 1,
        subject_id: 74,
      },
      {
        sub_plo_id: 3,
        subject_id: 74,
      },
      {
        sub_plo_id: 6,
        subject_id: 74,
      },
      {
        sub_plo_id: 7,
        subject_id: 74,
      },
      {
        sub_plo_id: 8,
        subject_id: 74,
      },
      {
        sub_plo_id: 9,
        subject_id: 74,
      },
      {
        sub_plo_id: 11,
        subject_id: 74,
      },
      {
        sub_plo_id: 12,
        subject_id: 74,
      },
      {
        sub_plo_id: 13,
        subject_id: 74,
      },
      {
        sub_plo_id: 14,
        subject_id: 74,
      },
      {
        sub_plo_id: 15,
        subject_id: 74,
      },
      {
        sub_plo_id: 19,
        subject_id: 74,
      },
      {
        sub_plo_id: 21,
        subject_id: 74,
      },
      {
        sub_plo_id: 22,
        subject_id: 74,
      },
      {
        sub_plo_id: 23,
        subject_id: 74,
      },
      {
        sub_plo_id: 24,
        subject_id: 74,
      },
      {
        sub_plo_id: 26,
        subject_id: 74,
      },
      {
        sub_plo_id: 1,
        subject_id: 75,
      },
      {
        sub_plo_id: 3,
        subject_id: 75,
      },
      {
        sub_plo_id: 6,
        subject_id: 75,
      },
      {
        sub_plo_id: 7,
        subject_id: 75,
      },
      {
        sub_plo_id: 8,
        subject_id: 75,
      },
      {
        sub_plo_id: 9,
        subject_id: 75,
      },
      {
        sub_plo_id: 11,
        subject_id: 75,
      },
      {
        sub_plo_id: 12,
        subject_id: 75,
      },
      {
        sub_plo_id: 13,
        subject_id: 75,
      },
      {
        sub_plo_id: 14,
        subject_id: 75,
      },
      {
        sub_plo_id: 15,
        subject_id: 75,
      },
      {
        sub_plo_id: 19,
        subject_id: 75,
      },
      {
        sub_plo_id: 21,
        subject_id: 75,
      },
      {
        sub_plo_id: 22,
        subject_id: 75,
      },
      {
        sub_plo_id: 23,
        subject_id: 75,
      },
      {
        sub_plo_id: 24,
        subject_id: 75,
      },
      {
        sub_plo_id: 26,
        subject_id: 75,
      },
      {
        sub_plo_id: 1,
        subject_id: 76,
      },
      {
        sub_plo_id: 2,
        subject_id: 76,
      },
      {
        sub_plo_id: 3,
        subject_id: 76,
      },
      {
        sub_plo_id: 7,
        subject_id: 76,
      },
      {
        sub_plo_id: 9,
        subject_id: 76,
      },
      {
        sub_plo_id: 10,
        subject_id: 76,
      },
      {
        sub_plo_id: 11,
        subject_id: 76,
      },
      {
        sub_plo_id: 12,
        subject_id: 76,
      },
      {
        sub_plo_id: 22,
        subject_id: 76,
      },
      {
        sub_plo_id: 23,
        subject_id: 76,
      },
      {
        sub_plo_id: 24,
        subject_id: 76,
      },
      {
        sub_plo_id: 25,
        subject_id: 76,
      },
      {
        sub_plo_id: 1,
        subject_id: 77,
      },
      {
        sub_plo_id: 2,
        subject_id: 77,
      },
      {
        sub_plo_id: 3,
        subject_id: 77,
      },
      {
        sub_plo_id: 7,
        subject_id: 77,
      },
      {
        sub_plo_id: 9,
        subject_id: 77,
      },
      {
        sub_plo_id: 10,
        subject_id: 77,
      },
      {
        sub_plo_id: 11,
        subject_id: 77,
      },
      {
        sub_plo_id: 12,
        subject_id: 77,
      },
      {
        sub_plo_id: 22,
        subject_id: 77,
      },
      {
        sub_plo_id: 23,
        subject_id: 77,
      },
      {
        sub_plo_id: 24,
        subject_id: 77,
      },
      {
        sub_plo_id: 25,
        subject_id: 77,
      },
      {
        sub_plo_id: 1,
        subject_id: 78,
      },
      {
        sub_plo_id: 2,
        subject_id: 78,
      },
      {
        sub_plo_id: 3,
        subject_id: 78,
      },
      {
        sub_plo_id: 7,
        subject_id: 78,
      },
      {
        sub_plo_id: 9,
        subject_id: 78,
      },
      {
        sub_plo_id: 10,
        subject_id: 78,
      },
      {
        sub_plo_id: 11,
        subject_id: 78,
      },
      {
        sub_plo_id: 12,
        subject_id: 78,
      },
      {
        sub_plo_id: 22,
        subject_id: 78,
      },
      {
        sub_plo_id: 23,
        subject_id: 78,
      },
      {
        sub_plo_id: 24,
        subject_id: 78,
      },
      {
        sub_plo_id: 25,
        subject_id: 78,
      },
      {
        sub_plo_id: 1,
        subject_id: 79,
      },
      {
        sub_plo_id: 2,
        subject_id: 79,
      },
      {
        sub_plo_id: 3,
        subject_id: 79,
      },
      {
        sub_plo_id: 7,
        subject_id: 79,
      },
      {
        sub_plo_id: 9,
        subject_id: 79,
      },
      {
        sub_plo_id: 10,
        subject_id: 79,
      },
      {
        sub_plo_id: 11,
        subject_id: 79,
      },
      {
        sub_plo_id: 12,
        subject_id: 79,
      },
      {
        sub_plo_id: 22,
        subject_id: 79,
      },
      {
        sub_plo_id: 23,
        subject_id: 79,
      },
      {
        sub_plo_id: 24,
        subject_id: 79,
      },
      {
        sub_plo_id: 25,
        subject_id: 79,
      },
      {
        sub_plo_id: 1,
        subject_id: 80,
      },
      {
        sub_plo_id: 2,
        subject_id: 80,
      },
      {
        sub_plo_id: 3,
        subject_id: 80,
      },
      {
        sub_plo_id: 7,
        subject_id: 80,
      },
      {
        sub_plo_id: 9,
        subject_id: 80,
      },
      {
        sub_plo_id: 10,
        subject_id: 80,
      },
      {
        sub_plo_id: 11,
        subject_id: 80,
      },
      {
        sub_plo_id: 12,
        subject_id: 80,
      },
      {
        sub_plo_id: 22,
        subject_id: 80,
      },
      {
        sub_plo_id: 23,
        subject_id: 80,
      },
      {
        sub_plo_id: 24,
        subject_id: 80,
      },
      {
        sub_plo_id: 25,
        subject_id: 80,
      },
      {
        sub_plo_id: 1,
        subject_id: 81,
      },
      {
        sub_plo_id: 2,
        subject_id: 81,
      },
      {
        sub_plo_id: 3,
        subject_id: 81,
      },
      {
        sub_plo_id: 7,
        subject_id: 81,
      },
      {
        sub_plo_id: 9,
        subject_id: 81,
      },
      {
        sub_plo_id: 10,
        subject_id: 81,
      },
      {
        sub_plo_id: 11,
        subject_id: 81,
      },
      {
        sub_plo_id: 12,
        subject_id: 81,
      },
      {
        sub_plo_id: 22,
        subject_id: 81,
      },
      {
        sub_plo_id: 23,
        subject_id: 81,
      },
      {
        sub_plo_id: 24,
        subject_id: 81,
      },
      {
        sub_plo_id: 25,
        subject_id: 81,
      },
      {
        sub_plo_id: 1,
        subject_id: 82,
      },
      {
        sub_plo_id: 3,
        subject_id: 82,
      },
      {
        sub_plo_id: 6,
        subject_id: 82,
      },
      {
        sub_plo_id: 7,
        subject_id: 82,
      },
      {
        sub_plo_id: 8,
        subject_id: 82,
      },
      {
        sub_plo_id: 9,
        subject_id: 82,
      },
      {
        sub_plo_id: 11,
        subject_id: 82,
      },
      {
        sub_plo_id: 12,
        subject_id: 82,
      },
      {
        sub_plo_id: 13,
        subject_id: 82,
      },
      {
        sub_plo_id: 14,
        subject_id: 82,
      },
      {
        sub_plo_id: 15,
        subject_id: 82,
      },
      {
        sub_plo_id: 19,
        subject_id: 82,
      },
      {
        sub_plo_id: 21,
        subject_id: 82,
      },
      {
        sub_plo_id: 22,
        subject_id: 82,
      },
      {
        sub_plo_id: 23,
        subject_id: 82,
      },
      {
        sub_plo_id: 24,
        subject_id: 82,
      },
      {
        sub_plo_id: 26,
        subject_id: 82,
      },
      {
        sub_plo_id: 1,
        subject_id: 83,
      },
      {
        sub_plo_id: 3,
        subject_id: 83,
      },
      {
        sub_plo_id: 6,
        subject_id: 83,
      },
      {
        sub_plo_id: 7,
        subject_id: 83,
      },
      {
        sub_plo_id: 8,
        subject_id: 83,
      },
      {
        sub_plo_id: 9,
        subject_id: 83,
      },
      {
        sub_plo_id: 11,
        subject_id: 83,
      },
      {
        sub_plo_id: 12,
        subject_id: 83,
      },
      {
        sub_plo_id: 13,
        subject_id: 83,
      },
      {
        sub_plo_id: 14,
        subject_id: 83,
      },
      {
        sub_plo_id: 15,
        subject_id: 83,
      },
      {
        sub_plo_id: 19,
        subject_id: 83,
      },
      {
        sub_plo_id: 21,
        subject_id: 83,
      },
      {
        sub_plo_id: 22,
        subject_id: 83,
      },
      {
        sub_plo_id: 23,
        subject_id: 83,
      },
      {
        sub_plo_id: 24,
        subject_id: 83,
      },
      {
        sub_plo_id: 26,
        subject_id: 83,
      },
      {
        sub_plo_id: 1,
        subject_id: 84,
      },
      {
        sub_plo_id: 3,
        subject_id: 84,
      },
      {
        sub_plo_id: 6,
        subject_id: 84,
      },
      {
        sub_plo_id: 7,
        subject_id: 84,
      },
      {
        sub_plo_id: 8,
        subject_id: 84,
      },
      {
        sub_plo_id: 9,
        subject_id: 84,
      },
      {
        sub_plo_id: 11,
        subject_id: 84,
      },
      {
        sub_plo_id: 12,
        subject_id: 84,
      },
      {
        sub_plo_id: 13,
        subject_id: 84,
      },
      {
        sub_plo_id: 14,
        subject_id: 84,
      },
      {
        sub_plo_id: 15,
        subject_id: 84,
      },
      {
        sub_plo_id: 19,
        subject_id: 84,
      },
      {
        sub_plo_id: 21,
        subject_id: 84,
      },
      {
        sub_plo_id: 22,
        subject_id: 84,
      },
      {
        sub_plo_id: 23,
        subject_id: 84,
      },
      {
        sub_plo_id: 24,
        subject_id: 84,
      },
      {
        sub_plo_id: 26,
        subject_id: 84,
      },
      {
        sub_plo_id: 1,
        subject_id: 85,
      },
      {
        sub_plo_id: 3,
        subject_id: 85,
      },
      {
        sub_plo_id: 6,
        subject_id: 85,
      },
      {
        sub_plo_id: 7,
        subject_id: 85,
      },
      {
        sub_plo_id: 8,
        subject_id: 85,
      },
      {
        sub_plo_id: 9,
        subject_id: 85,
      },
      {
        sub_plo_id: 11,
        subject_id: 85,
      },
      {
        sub_plo_id: 12,
        subject_id: 85,
      },
      {
        sub_plo_id: 13,
        subject_id: 85,
      },
      {
        sub_plo_id: 14,
        subject_id: 85,
      },
      {
        sub_plo_id: 15,
        subject_id: 85,
      },
      {
        sub_plo_id: 19,
        subject_id: 85,
      },
      {
        sub_plo_id: 21,
        subject_id: 85,
      },
      {
        sub_plo_id: 22,
        subject_id: 85,
      },
      {
        sub_plo_id: 23,
        subject_id: 85,
      },
      {
        sub_plo_id: 24,
        subject_id: 85,
      },
      {
        sub_plo_id: 26,
        subject_id: 85,
      },
      {
        sub_plo_id: 1,
        subject_id: 86,
      },
      {
        sub_plo_id: 3,
        subject_id: 86,
      },
      {
        sub_plo_id: 6,
        subject_id: 86,
      },
      {
        sub_plo_id: 7,
        subject_id: 86,
      },
      {
        sub_plo_id: 8,
        subject_id: 86,
      },
      {
        sub_plo_id: 9,
        subject_id: 86,
      },
      {
        sub_plo_id: 11,
        subject_id: 86,
      },
      {
        sub_plo_id: 12,
        subject_id: 86,
      },
      {
        sub_plo_id: 13,
        subject_id: 86,
      },
      {
        sub_plo_id: 14,
        subject_id: 86,
      },
      {
        sub_plo_id: 15,
        subject_id: 86,
      },
      {
        sub_plo_id: 19,
        subject_id: 86,
      },
      {
        sub_plo_id: 21,
        subject_id: 86,
      },
      {
        sub_plo_id: 22,
        subject_id: 86,
      },
      {
        sub_plo_id: 23,
        subject_id: 86,
      },
      {
        sub_plo_id: 24,
        subject_id: 86,
      },
      {
        sub_plo_id: 26,
        subject_id: 86,
      },
      {
        sub_plo_id: 1,
        subject_id: 87,
      },
      {
        sub_plo_id: 3,
        subject_id: 87,
      },
      {
        sub_plo_id: 6,
        subject_id: 87,
      },
      {
        sub_plo_id: 7,
        subject_id: 87,
      },
      {
        sub_plo_id: 8,
        subject_id: 87,
      },
      {
        sub_plo_id: 9,
        subject_id: 87,
      },
      {
        sub_plo_id: 11,
        subject_id: 87,
      },
      {
        sub_plo_id: 12,
        subject_id: 87,
      },
      {
        sub_plo_id: 13,
        subject_id: 87,
      },
      {
        sub_plo_id: 14,
        subject_id: 87,
      },
      {
        sub_plo_id: 15,
        subject_id: 87,
      },
      {
        sub_plo_id: 19,
        subject_id: 87,
      },
      {
        sub_plo_id: 21,
        subject_id: 87,
      },
      {
        sub_plo_id: 22,
        subject_id: 87,
      },
      {
        sub_plo_id: 23,
        subject_id: 87,
      },
      {
        sub_plo_id: 24,
        subject_id: 87,
      },
      {
        sub_plo_id: 26,
        subject_id: 87,
      },
      {
        sub_plo_id: 1,
        subject_id: 88,
      },
      {
        sub_plo_id: 3,
        subject_id: 88,
      },
      {
        sub_plo_id: 6,
        subject_id: 88,
      },
      {
        sub_plo_id: 7,
        subject_id: 88,
      },
      {
        sub_plo_id: 8,
        subject_id: 88,
      },
      {
        sub_plo_id: 9,
        subject_id: 88,
      },
      {
        sub_plo_id: 11,
        subject_id: 88,
      },
      {
        sub_plo_id: 12,
        subject_id: 88,
      },
      {
        sub_plo_id: 13,
        subject_id: 88,
      },
      {
        sub_plo_id: 14,
        subject_id: 88,
      },
      {
        sub_plo_id: 15,
        subject_id: 88,
      },
      {
        sub_plo_id: 19,
        subject_id: 88,
      },
      {
        sub_plo_id: 21,
        subject_id: 88,
      },
      {
        sub_plo_id: 22,
        subject_id: 88,
      },
      {
        sub_plo_id: 23,
        subject_id: 88,
      },
      {
        sub_plo_id: 24,
        subject_id: 88,
      },
      {
        sub_plo_id: 26,
        subject_id: 88,
      },
      {
        sub_plo_id: 1,
        subject_id: 89,
      },
      {
        sub_plo_id: 3,
        subject_id: 89,
      },
      {
        sub_plo_id: 6,
        subject_id: 89,
      },
      {
        sub_plo_id: 7,
        subject_id: 89,
      },
      {
        sub_plo_id: 8,
        subject_id: 89,
      },
      {
        sub_plo_id: 9,
        subject_id: 89,
      },
      {
        sub_plo_id: 11,
        subject_id: 89,
      },
      {
        sub_plo_id: 12,
        subject_id: 89,
      },
      {
        sub_plo_id: 13,
        subject_id: 89,
      },
      {
        sub_plo_id: 14,
        subject_id: 89,
      },
      {
        sub_plo_id: 15,
        subject_id: 89,
      },
      {
        sub_plo_id: 19,
        subject_id: 89,
      },
      {
        sub_plo_id: 21,
        subject_id: 89,
      },
      {
        sub_plo_id: 22,
        subject_id: 89,
      },
      {
        sub_plo_id: 23,
        subject_id: 89,
      },
      {
        sub_plo_id: 24,
        subject_id: 89,
      },
      {
        sub_plo_id: 26,
        subject_id: 89,
      },
      {
        sub_plo_id: 1,
        subject_id: 90,
      },
      {
        sub_plo_id: 3,
        subject_id: 90,
      },
      {
        sub_plo_id: 6,
        subject_id: 90,
      },
      {
        sub_plo_id: 7,
        subject_id: 90,
      },
      {
        sub_plo_id: 8,
        subject_id: 90,
      },
      {
        sub_plo_id: 9,
        subject_id: 90,
      },
      {
        sub_plo_id: 11,
        subject_id: 90,
      },
      {
        sub_plo_id: 12,
        subject_id: 90,
      },
      {
        sub_plo_id: 13,
        subject_id: 90,
      },
      {
        sub_plo_id: 14,
        subject_id: 90,
      },
      {
        sub_plo_id: 15,
        subject_id: 90,
      },
      {
        sub_plo_id: 19,
        subject_id: 90,
      },
      {
        sub_plo_id: 21,
        subject_id: 90,
      },
      {
        sub_plo_id: 22,
        subject_id: 90,
      },
      {
        sub_plo_id: 23,
        subject_id: 90,
      },
      {
        sub_plo_id: 24,
        subject_id: 90,
      },
      {
        sub_plo_id: 26,
        subject_id: 90,
      },
      {
        sub_plo_id: 1,
        subject_id: 91,
      },
      {
        sub_plo_id: 3,
        subject_id: 91,
      },
      {
        sub_plo_id: 6,
        subject_id: 91,
      },
      {
        sub_plo_id: 7,
        subject_id: 91,
      },
      {
        sub_plo_id: 8,
        subject_id: 91,
      },
      {
        sub_plo_id: 9,
        subject_id: 91,
      },
      {
        sub_plo_id: 11,
        subject_id: 91,
      },
      {
        sub_plo_id: 12,
        subject_id: 91,
      },
      {
        sub_plo_id: 13,
        subject_id: 91,
      },
      {
        sub_plo_id: 14,
        subject_id: 91,
      },
      {
        sub_plo_id: 15,
        subject_id: 91,
      },
      {
        sub_plo_id: 19,
        subject_id: 91,
      },
      {
        sub_plo_id: 21,
        subject_id: 91,
      },
      {
        sub_plo_id: 22,
        subject_id: 91,
      },
      {
        sub_plo_id: 23,
        subject_id: 91,
      },
      {
        sub_plo_id: 24,
        subject_id: 91,
      },
      {
        sub_plo_id: 26,
        subject_id: 91,
      },
      {
        sub_plo_id: 1,
        subject_id: 92,
      },
      {
        sub_plo_id: 3,
        subject_id: 92,
      },
      {
        sub_plo_id: 6,
        subject_id: 92,
      },
      {
        sub_plo_id: 7,
        subject_id: 92,
      },
      {
        sub_plo_id: 8,
        subject_id: 92,
      },
      {
        sub_plo_id: 9,
        subject_id: 92,
      },
      {
        sub_plo_id: 11,
        subject_id: 92,
      },
      {
        sub_plo_id: 12,
        subject_id: 92,
      },
      {
        sub_plo_id: 13,
        subject_id: 92,
      },
      {
        sub_plo_id: 14,
        subject_id: 92,
      },
      {
        sub_plo_id: 15,
        subject_id: 92,
      },
      {
        sub_plo_id: 19,
        subject_id: 92,
      },
      {
        sub_plo_id: 21,
        subject_id: 92,
      },
      {
        sub_plo_id: 22,
        subject_id: 92,
      },
      {
        sub_plo_id: 23,
        subject_id: 92,
      },
      {
        sub_plo_id: 24,
        subject_id: 92,
      },
      {
        sub_plo_id: 26,
        subject_id: 92,
      },
      {
        sub_plo_id: 1,
        subject_id: 93,
      },
      {
        sub_plo_id: 3,
        subject_id: 93,
      },
      {
        sub_plo_id: 6,
        subject_id: 93,
      },
      {
        sub_plo_id: 7,
        subject_id: 93,
      },
      {
        sub_plo_id: 8,
        subject_id: 93,
      },
      {
        sub_plo_id: 9,
        subject_id: 93,
      },
      {
        sub_plo_id: 11,
        subject_id: 93,
      },
      {
        sub_plo_id: 12,
        subject_id: 93,
      },
      {
        sub_plo_id: 13,
        subject_id: 93,
      },
      {
        sub_plo_id: 14,
        subject_id: 93,
      },
      {
        sub_plo_id: 15,
        subject_id: 93,
      },
      {
        sub_plo_id: 19,
        subject_id: 93,
      },
      {
        sub_plo_id: 21,
        subject_id: 93,
      },
      {
        sub_plo_id: 22,
        subject_id: 93,
      },
      {
        sub_plo_id: 23,
        subject_id: 93,
      },
      {
        sub_plo_id: 24,
        subject_id: 93,
      },
      {
        sub_plo_id: 26,
        subject_id: 93,
      },
      {
        sub_plo_id: 1,
        subject_id: 94,
      },
      {
        sub_plo_id: 3,
        subject_id: 94,
      },
      {
        sub_plo_id: 6,
        subject_id: 94,
      },
      {
        sub_plo_id: 7,
        subject_id: 94,
      },
      {
        sub_plo_id: 8,
        subject_id: 94,
      },
      {
        sub_plo_id: 9,
        subject_id: 94,
      },
      {
        sub_plo_id: 11,
        subject_id: 94,
      },
      {
        sub_plo_id: 12,
        subject_id: 94,
      },
      {
        sub_plo_id: 13,
        subject_id: 94,
      },
      {
        sub_plo_id: 14,
        subject_id: 94,
      },
      {
        sub_plo_id: 15,
        subject_id: 94,
      },
      {
        sub_plo_id: 19,
        subject_id: 94,
      },
      {
        sub_plo_id: 21,
        subject_id: 94,
      },
      {
        sub_plo_id: 22,
        subject_id: 94,
      },
      {
        sub_plo_id: 23,
        subject_id: 94,
      },
      {
        sub_plo_id: 24,
        subject_id: 94,
      },
      {
        sub_plo_id: 26,
        subject_id: 94,
      },
      {
        sub_plo_id: 1,
        subject_id: 95,
      },
      {
        sub_plo_id: 3,
        subject_id: 95,
      },
      {
        sub_plo_id: 6,
        subject_id: 95,
      },
      {
        sub_plo_id: 7,
        subject_id: 95,
      },
      {
        sub_plo_id: 8,
        subject_id: 95,
      },
      {
        sub_plo_id: 9,
        subject_id: 95,
      },
      {
        sub_plo_id: 11,
        subject_id: 95,
      },
      {
        sub_plo_id: 12,
        subject_id: 95,
      },
      {
        sub_plo_id: 13,
        subject_id: 95,
      },
      {
        sub_plo_id: 14,
        subject_id: 95,
      },
      {
        sub_plo_id: 15,
        subject_id: 95,
      },
      {
        sub_plo_id: 19,
        subject_id: 95,
      },
      {
        sub_plo_id: 21,
        subject_id: 95,
      },
      {
        sub_plo_id: 22,
        subject_id: 95,
      },
      {
        sub_plo_id: 23,
        subject_id: 95,
      },
      {
        sub_plo_id: 24,
        subject_id: 95,
      },
      {
        sub_plo_id: 26,
        subject_id: 95,
      },
      {
        sub_plo_id: 1,
        subject_id: 96,
      },
      {
        sub_plo_id: 3,
        subject_id: 96,
      },
      {
        sub_plo_id: 6,
        subject_id: 96,
      },
      {
        sub_plo_id: 7,
        subject_id: 96,
      },
      {
        sub_plo_id: 8,
        subject_id: 96,
      },
      {
        sub_plo_id: 9,
        subject_id: 96,
      },
      {
        sub_plo_id: 11,
        subject_id: 96,
      },
      {
        sub_plo_id: 12,
        subject_id: 96,
      },
      {
        sub_plo_id: 13,
        subject_id: 96,
      },
      {
        sub_plo_id: 14,
        subject_id: 96,
      },
      {
        sub_plo_id: 15,
        subject_id: 96,
      },
      {
        sub_plo_id: 19,
        subject_id: 96,
      },
      {
        sub_plo_id: 21,
        subject_id: 96,
      },
      {
        sub_plo_id: 22,
        subject_id: 96,
      },
      {
        sub_plo_id: 23,
        subject_id: 96,
      },
      {
        sub_plo_id: 24,
        subject_id: 96,
      },
      {
        sub_plo_id: 26,
        subject_id: 96,
      },
      {
        sub_plo_id: 1,
        subject_id: 97,
      },
      {
        sub_plo_id: 2,
        subject_id: 97,
      },
      {
        sub_plo_id: 3,
        subject_id: 97,
      },
      {
        sub_plo_id: 7,
        subject_id: 97,
      },
      {
        sub_plo_id: 9,
        subject_id: 97,
      },
      {
        sub_plo_id: 10,
        subject_id: 97,
      },
      {
        sub_plo_id: 11,
        subject_id: 97,
      },
      {
        sub_plo_id: 12,
        subject_id: 97,
      },
      {
        sub_plo_id: 22,
        subject_id: 97,
      },
      {
        sub_plo_id: 23,
        subject_id: 97,
      },
      {
        sub_plo_id: 24,
        subject_id: 97,
      },
      {
        sub_plo_id: 25,
        subject_id: 97,
      },
      {
        sub_plo_id: 1,
        subject_id: 98,
      },
      {
        sub_plo_id: 2,
        subject_id: 98,
      },
      {
        sub_plo_id: 3,
        subject_id: 98,
      },
      {
        sub_plo_id: 7,
        subject_id: 98,
      },
      {
        sub_plo_id: 9,
        subject_id: 98,
      },
      {
        sub_plo_id: 10,
        subject_id: 98,
      },
      {
        sub_plo_id: 11,
        subject_id: 98,
      },
      {
        sub_plo_id: 12,
        subject_id: 98,
      },
      {
        sub_plo_id: 22,
        subject_id: 98,
      },
      {
        sub_plo_id: 23,
        subject_id: 98,
      },
      {
        sub_plo_id: 24,
        subject_id: 98,
      },
      {
        sub_plo_id: 25,
        subject_id: 98,
      },
      {
        sub_plo_id: 1,
        subject_id: 99,
      },
      {
        sub_plo_id: 2,
        subject_id: 99,
      },
      {
        sub_plo_id: 3,
        subject_id: 99,
      },
      {
        sub_plo_id: 7,
        subject_id: 99,
      },
      {
        sub_plo_id: 9,
        subject_id: 99,
      },
      {
        sub_plo_id: 10,
        subject_id: 99,
      },
      {
        sub_plo_id: 11,
        subject_id: 99,
      },
      {
        sub_plo_id: 12,
        subject_id: 99,
      },
      {
        sub_plo_id: 22,
        subject_id: 99,
      },
      {
        sub_plo_id: 23,
        subject_id: 99,
      },
      {
        sub_plo_id: 24,
        subject_id: 99,
      },
      {
        sub_plo_id: 25,
        subject_id: 99,
      },
      {
        sub_plo_id: 1,
        subject_id: 100,
      },
      {
        sub_plo_id: 2,
        subject_id: 100,
      },
      {
        sub_plo_id: 3,
        subject_id: 100,
      },
      {
        sub_plo_id: 7,
        subject_id: 100,
      },
      {
        sub_plo_id: 9,
        subject_id: 100,
      },
      {
        sub_plo_id: 10,
        subject_id: 100,
      },
      {
        sub_plo_id: 11,
        subject_id: 100,
      },
      {
        sub_plo_id: 12,
        subject_id: 100,
      },
      {
        sub_plo_id: 22,
        subject_id: 100,
      },
      {
        sub_plo_id: 23,
        subject_id: 100,
      },
      {
        sub_plo_id: 24,
        subject_id: 100,
      },
      {
        sub_plo_id: 25,
        subject_id: 100,
      },
      {
        sub_plo_id: 1,
        subject_id: 101,
      },
      {
        sub_plo_id: 2,
        subject_id: 101,
      },
      {
        sub_plo_id: 3,
        subject_id: 101,
      },
      {
        sub_plo_id: 7,
        subject_id: 101,
      },
      {
        sub_plo_id: 9,
        subject_id: 101,
      },
      {
        sub_plo_id: 10,
        subject_id: 101,
      },
      {
        sub_plo_id: 11,
        subject_id: 101,
      },
      {
        sub_plo_id: 12,
        subject_id: 101,
      },
      {
        sub_plo_id: 22,
        subject_id: 101,
      },
      {
        sub_plo_id: 23,
        subject_id: 101,
      },
      {
        sub_plo_id: 24,
        subject_id: 101,
      },
      {
        sub_plo_id: 25,
        subject_id: 101,
      },
      {
        sub_plo_id: 1,
        subject_id: 102,
      },
      {
        sub_plo_id: 2,
        subject_id: 102,
      },
      {
        sub_plo_id: 3,
        subject_id: 102,
      },
      {
        sub_plo_id: 7,
        subject_id: 102,
      },
      {
        sub_plo_id: 9,
        subject_id: 102,
      },
      {
        sub_plo_id: 10,
        subject_id: 102,
      },
      {
        sub_plo_id: 11,
        subject_id: 102,
      },
      {
        sub_plo_id: 12,
        subject_id: 102,
      },
      {
        sub_plo_id: 22,
        subject_id: 102,
      },
      {
        sub_plo_id: 23,
        subject_id: 102,
      },
      {
        sub_plo_id: 24,
        subject_id: 102,
      },
      {
        sub_plo_id: 25,
        subject_id: 102,
      },
      {
        sub_plo_id: 1,
        subject_id: 103,
      },
      {
        sub_plo_id: 2,
        subject_id: 103,
      },
      {
        sub_plo_id: 3,
        subject_id: 103,
      },
      {
        sub_plo_id: 7,
        subject_id: 103,
      },
      {
        sub_plo_id: 9,
        subject_id: 103,
      },
      {
        sub_plo_id: 10,
        subject_id: 103,
      },
      {
        sub_plo_id: 11,
        subject_id: 103,
      },
      {
        sub_plo_id: 12,
        subject_id: 103,
      },
      {
        sub_plo_id: 22,
        subject_id: 103,
      },
      {
        sub_plo_id: 23,
        subject_id: 103,
      },
      {
        sub_plo_id: 24,
        subject_id: 103,
      },
      {
        sub_plo_id: 25,
        subject_id: 103,
      },
      {
        sub_plo_id: 1,
        subject_id: 104,
      },
      {
        sub_plo_id: 2,
        subject_id: 104,
      },
      {
        sub_plo_id: 3,
        subject_id: 104,
      },
      {
        sub_plo_id: 7,
        subject_id: 104,
      },
      {
        sub_plo_id: 9,
        subject_id: 104,
      },
      {
        sub_plo_id: 10,
        subject_id: 104,
      },
      {
        sub_plo_id: 11,
        subject_id: 104,
      },
      {
        sub_plo_id: 12,
        subject_id: 104,
      },
      {
        sub_plo_id: 22,
        subject_id: 104,
      },
      {
        sub_plo_id: 23,
        subject_id: 104,
      },
      {
        sub_plo_id: 24,
        subject_id: 104,
      },
      {
        sub_plo_id: 25,
        subject_id: 104,
      },
      {
        sub_plo_id: 1,
        subject_id: 105,
      },
      {
        sub_plo_id: 2,
        subject_id: 105,
      },
      {
        sub_plo_id: 3,
        subject_id: 105,
      },
      {
        sub_plo_id: 7,
        subject_id: 105,
      },
      {
        sub_plo_id: 9,
        subject_id: 105,
      },
      {
        sub_plo_id: 10,
        subject_id: 105,
      },
      {
        sub_plo_id: 11,
        subject_id: 105,
      },
      {
        sub_plo_id: 12,
        subject_id: 105,
      },
      {
        sub_plo_id: 22,
        subject_id: 105,
      },
      {
        sub_plo_id: 23,
        subject_id: 105,
      },
      {
        sub_plo_id: 24,
        subject_id: 105,
      },
      {
        sub_plo_id: 25,
        subject_id: 105,
      },
      {
        sub_plo_id: 1,
        subject_id: 106,
      },
      {
        sub_plo_id: 2,
        subject_id: 106,
      },
      {
        sub_plo_id: 3,
        subject_id: 106,
      },
      {
        sub_plo_id: 7,
        subject_id: 106,
      },
      {
        sub_plo_id: 9,
        subject_id: 106,
      },
      {
        sub_plo_id: 10,
        subject_id: 106,
      },
      {
        sub_plo_id: 11,
        subject_id: 106,
      },
      {
        sub_plo_id: 12,
        subject_id: 106,
      },
      {
        sub_plo_id: 22,
        subject_id: 106,
      },
      {
        sub_plo_id: 23,
        subject_id: 106,
      },
      {
        sub_plo_id: 24,
        subject_id: 106,
      },
      {
        sub_plo_id: 25,
        subject_id: 106,
      },
      {
        sub_plo_id: 1,
        subject_id: 107,
      },
      {
        sub_plo_id: 2,
        subject_id: 107,
      },
      {
        sub_plo_id: 3,
        subject_id: 107,
      },
      {
        sub_plo_id: 7,
        subject_id: 107,
      },
      {
        sub_plo_id: 9,
        subject_id: 107,
      },
      {
        sub_plo_id: 10,
        subject_id: 107,
      },
      {
        sub_plo_id: 11,
        subject_id: 107,
      },
      {
        sub_plo_id: 12,
        subject_id: 107,
      },
      {
        sub_plo_id: 22,
        subject_id: 107,
      },
      {
        sub_plo_id: 23,
        subject_id: 107,
      },
      {
        sub_plo_id: 24,
        subject_id: 107,
      },
      {
        sub_plo_id: 25,
        subject_id: 107,
      },
      {
        sub_plo_id: 1,
        subject_id: 108,
      },
      {
        sub_plo_id: 2,
        subject_id: 108,
      },
      {
        sub_plo_id: 3,
        subject_id: 108,
      },
      {
        sub_plo_id: 7,
        subject_id: 108,
      },
      {
        sub_plo_id: 9,
        subject_id: 108,
      },
      {
        sub_plo_id: 10,
        subject_id: 108,
      },
      {
        sub_plo_id: 11,
        subject_id: 108,
      },
      {
        sub_plo_id: 12,
        subject_id: 108,
      },
      {
        sub_plo_id: 22,
        subject_id: 108,
      },
      {
        sub_plo_id: 23,
        subject_id: 108,
      },
      {
        sub_plo_id: 24,
        subject_id: 108,
      },
      {
        sub_plo_id: 25,
        subject_id: 108,
      },
      {
        sub_plo_id: 1,
        subject_id: 109,
      },
      {
        sub_plo_id: 2,
        subject_id: 109,
      },
      {
        sub_plo_id: 3,
        subject_id: 109,
      },
      {
        sub_plo_id: 7,
        subject_id: 109,
      },
      {
        sub_plo_id: 9,
        subject_id: 109,
      },
      {
        sub_plo_id: 10,
        subject_id: 109,
      },
      {
        sub_plo_id: 11,
        subject_id: 109,
      },
      {
        sub_plo_id: 12,
        subject_id: 109,
      },
      {
        sub_plo_id: 22,
        subject_id: 109,
      },
      {
        sub_plo_id: 23,
        subject_id: 109,
      },
      {
        sub_plo_id: 24,
        subject_id: 109,
      },
      {
        sub_plo_id: 25,
        subject_id: 109,
      },
      {
        sub_plo_id: 1,
        subject_id: 110,
      },
      {
        sub_plo_id: 2,
        subject_id: 110,
      },
      {
        sub_plo_id: 3,
        subject_id: 110,
      },
      {
        sub_plo_id: 6,
        subject_id: 110,
      },
      {
        sub_plo_id: 7,
        subject_id: 110,
      },
      {
        sub_plo_id: 9,
        subject_id: 110,
      },
      {
        sub_plo_id: 10,
        subject_id: 110,
      },
      {
        sub_plo_id: 11,
        subject_id: 110,
      },
      {
        sub_plo_id: 12,
        subject_id: 110,
      },
      {
        sub_plo_id: 13,
        subject_id: 110,
      },
      {
        sub_plo_id: 15,
        subject_id: 110,
      },
      {
        sub_plo_id: 16,
        subject_id: 110,
      },
      {
        sub_plo_id: 1,
        subject_id: 111,
      },
      {
        sub_plo_id: 2,
        subject_id: 111,
      },
      {
        sub_plo_id: 3,
        subject_id: 111,
      },
      {
        sub_plo_id: 6,
        subject_id: 111,
      },
      {
        sub_plo_id: 7,
        subject_id: 111,
      },
      {
        sub_plo_id: 9,
        subject_id: 111,
      },
      {
        sub_plo_id: 10,
        subject_id: 111,
      },
      {
        sub_plo_id: 11,
        subject_id: 111,
      },
      {
        sub_plo_id: 12,
        subject_id: 111,
      },
      {
        sub_plo_id: 13,
        subject_id: 111,
      },
      {
        sub_plo_id: 15,
        subject_id: 111,
      },
      {
        sub_plo_id: 16,
        subject_id: 111,
      },
      {
        sub_plo_id: 19,
        subject_id: 111,
      },
      {
        sub_plo_id: 20,
        subject_id: 111,
      },
      {
        sub_plo_id: 21,
        subject_id: 111,
      },
      {
        sub_plo_id: 22,
        subject_id: 111,
      },
      {
        sub_plo_id: 23,
        subject_id: 111,
      },
      {
        sub_plo_id: 24,
        subject_id: 111,
      },
      {
        sub_plo_id: 25,
        subject_id: 111,
      },
      {
        sub_plo_id: 26,
        subject_id: 111,
      },
      {
        sub_plo_id: 1,
        subject_id: 112,
      },
      {
        sub_plo_id: 2,
        subject_id: 112,
      },
      {
        sub_plo_id: 3,
        subject_id: 112,
      },
      {
        sub_plo_id: 6,
        subject_id: 112,
      },
      {
        sub_plo_id: 7,
        subject_id: 112,
      },
      {
        sub_plo_id: 9,
        subject_id: 112,
      },
      {
        sub_plo_id: 10,
        subject_id: 112,
      },
      {
        sub_plo_id: 11,
        subject_id: 112,
      },
      {
        sub_plo_id: 12,
        subject_id: 112,
      },
      {
        sub_plo_id: 13,
        subject_id: 112,
      },
      {
        sub_plo_id: 15,
        subject_id: 112,
      },
      {
        sub_plo_id: 16,
        subject_id: 112,
      },
      {
        sub_plo_id: 19,
        subject_id: 112,
      },
      {
        sub_plo_id: 20,
        subject_id: 112,
      },
      {
        sub_plo_id: 21,
        subject_id: 112,
      },
      {
        sub_plo_id: 22,
        subject_id: 112,
      },
      {
        sub_plo_id: 23,
        subject_id: 112,
      },
      {
        sub_plo_id: 24,
        subject_id: 112,
      },
      {
        sub_plo_id: 25,
        subject_id: 112,
      },
      {
        sub_plo_id: 26,
        subject_id: 112,
      },
      {
        sub_plo_id: 1,
        subject_id: 113,
      },
      {
        sub_plo_id: 2,
        subject_id: 113,
      },
      {
        sub_plo_id: 3,
        subject_id: 113,
      },
      {
        sub_plo_id: 6,
        subject_id: 113,
      },
      {
        sub_plo_id: 7,
        subject_id: 113,
      },
      {
        sub_plo_id: 9,
        subject_id: 113,
      },
      {
        sub_plo_id: 10,
        subject_id: 113,
      },
      {
        sub_plo_id: 11,
        subject_id: 113,
      },
      {
        sub_plo_id: 12,
        subject_id: 113,
      },
      {
        sub_plo_id: 13,
        subject_id: 113,
      },
      {
        sub_plo_id: 15,
        subject_id: 113,
      },
      {
        sub_plo_id: 16,
        subject_id: 113,
      },
      {
        sub_plo_id: 19,
        subject_id: 113,
      },
      {
        sub_plo_id: 20,
        subject_id: 113,
      },
      {
        sub_plo_id: 21,
        subject_id: 113,
      },
      {
        sub_plo_id: 22,
        subject_id: 113,
      },
      {
        sub_plo_id: 23,
        subject_id: 113,
      },
      {
        sub_plo_id: 24,
        subject_id: 113,
      },
      {
        sub_plo_id: 25,
        subject_id: 113,
      },
      {
        sub_plo_id: 26,
        subject_id: 113,
      },
      {
        sub_plo_id: 1,
        subject_id: 114,
      },
      {
        sub_plo_id: 2,
        subject_id: 114,
      },
      {
        sub_plo_id: 3,
        subject_id: 114,
      },
      {
        sub_plo_id: 6,
        subject_id: 114,
      },
      {
        sub_plo_id: 7,
        subject_id: 114,
      },
      {
        sub_plo_id: 9,
        subject_id: 114,
      },
      {
        sub_plo_id: 10,
        subject_id: 114,
      },
      {
        sub_plo_id: 11,
        subject_id: 114,
      },
      {
        sub_plo_id: 12,
        subject_id: 114,
      },
      {
        sub_plo_id: 13,
        subject_id: 114,
      },
      {
        sub_plo_id: 15,
        subject_id: 114,
      },
      {
        sub_plo_id: 16,
        subject_id: 114,
      },
      {
        sub_plo_id: 19,
        subject_id: 114,
      },
      {
        sub_plo_id: 20,
        subject_id: 114,
      },
      {
        sub_plo_id: 21,
        subject_id: 114,
      },
      {
        sub_plo_id: 22,
        subject_id: 114,
      },
      {
        sub_plo_id: 23,
        subject_id: 114,
      },
      {
        sub_plo_id: 24,
        subject_id: 114,
      },
      {
        sub_plo_id: 25,
        subject_id: 114,
      },
      {
        sub_plo_id: 26,
        subject_id: 114,
      },
      {
        sub_plo_id: 1,
        subject_id: 115,
      },
      {
        sub_plo_id: 2,
        subject_id: 115,
      },
      {
        sub_plo_id: 3,
        subject_id: 115,
      },
      {
        sub_plo_id: 6,
        subject_id: 115,
      },
      {
        sub_plo_id: 7,
        subject_id: 115,
      },
      {
        sub_plo_id: 9,
        subject_id: 115,
      },
      {
        sub_plo_id: 10,
        subject_id: 115,
      },
      {
        sub_plo_id: 11,
        subject_id: 115,
      },
      {
        sub_plo_id: 12,
        subject_id: 115,
      },
      {
        sub_plo_id: 13,
        subject_id: 115,
      },
      {
        sub_plo_id: 15,
        subject_id: 115,
      },
      {
        sub_plo_id: 16,
        subject_id: 115,
      },
      {
        sub_plo_id: 19,
        subject_id: 115,
      },
      {
        sub_plo_id: 20,
        subject_id: 115,
      },
      {
        sub_plo_id: 21,
        subject_id: 115,
      },
      {
        sub_plo_id: 22,
        subject_id: 115,
      },
      {
        sub_plo_id: 23,
        subject_id: 115,
      },
      {
        sub_plo_id: 24,
        subject_id: 115,
      },
      {
        sub_plo_id: 25,
        subject_id: 115,
      },
      {
        sub_plo_id: 26,
        subject_id: 115,
      },
    ];

    await SubPloMapping.createMany(subPLOsMappingData);
  }
}
