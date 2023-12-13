import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import SubjectJobRelated from "App/Models/SubjectJobRelated";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const subjectsJobsRelatedSE66Data = [
      {
        subject_id: 30,
        job_position_id: 1,
      },
      {
        subject_id: 33,
        job_position_id: 1,
      },
      {
        subject_id: 41,
        job_position_id: 1,
      },
      {
        subject_id: 54,
        job_position_id: 1,
      },
      {
        subject_id: 56,
        job_position_id: 1,
      },
      {
        subject_id: 34,
        job_position_id: 2,
      },
      {
        subject_id: 46,
        job_position_id: 2,
      },
      {
        subject_id: 47,
        job_position_id: 2,
      },
      {
        subject_id: 49,
        job_position_id: 2,
      },
      {
        subject_id: 95,
        job_position_id: 2,
      },
      {
        subject_id: 38,
        job_position_id: 3,
      },
      {
        subject_id: 39,
        job_position_id: 3,
      },
      {
        subject_id: 52,
        job_position_id: 3,
      },
      {
        subject_id: 57,
        job_position_id: 3,
      },
      {
        subject_id: 36,
        job_position_id: 4,
      },
      {
        subject_id: 38,
        job_position_id: 4,
      },
      {
        subject_id: 54,
        job_position_id: 4,
      },
      {
        subject_id: 56,
        job_position_id: 4,
      },
      {
        subject_id: 74,
        job_position_id: 4,
      },
      {
        subject_id: 85,
        job_position_id: 4,
      },
      {
        subject_id: 31,
        job_position_id: 5,
      },
      {
        subject_id: 35,
        job_position_id: 5,
      },
      {
        subject_id: 83,
        job_position_id: 5,
      },
      {
        subject_id: 96,
        job_position_id: 5,
      },
      {
        subject_id: 32,
        job_position_id: 6,
      },
      {
        subject_id: 37,
        job_position_id: 6,
      },
      {
        subject_id: 48,
        job_position_id: 6,
      },
      {
        subject_id: 67,
        job_position_id: 6,
      },
      {
        subject_id: 45,
        job_position_id: 7,
      },
      {
        subject_id: 82,
        job_position_id: 7,
      },
      {
        subject_id: 89,
        job_position_id: 7,
      },
      {
        subject_id: 91,
        job_position_id: 7,
      },
      {
        subject_id: 92,
        job_position_id: 7,
      },
    ];

    await SubjectJobRelated.createMany(subjectsJobsRelatedSE66Data);
  }
}
