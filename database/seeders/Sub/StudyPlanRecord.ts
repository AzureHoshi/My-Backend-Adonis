import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import StudyPlanRecord from "App/Models/StudyPlanRecord";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const studyPlanRecordData = [
      {
        // ปี 1 เทอม 1
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปบังคับ 1",
        study_plan_record_year: 1,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 21,
        study_plan_record_year: 1,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 25,
        study_plan_record_year: 1,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 28,
        study_plan_record_year: 1,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 31,
        study_plan_record_year: 1,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 32,
        study_plan_record_year: 1,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 33,
        study_plan_record_year: 1,
        study_plan_record_semester: 1,
      },
      {
        // ปี 1 เทอม 2
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปบังคับ 2",
        study_plan_record_year: 1,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 22,
        study_plan_record_year: 1,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 23,
        study_plan_record_year: 1,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 24,
        study_plan_record_year: 1,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 36,
        study_plan_record_year: 1,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 34,
        study_plan_record_year: 1,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 35,
        study_plan_record_year: 1,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 39,
        study_plan_record_year: 1,
        study_plan_record_semester: 2,
      },
      {
        // ปี 2 เทอม 1
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปบังคับ 3",
        study_plan_record_year: 2,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 26,
        study_plan_record_year: 2,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 29,
        study_plan_record_year: 2,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 30,
        study_plan_record_year: 2,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 37,
        study_plan_record_year: 2,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 46,
        study_plan_record_year: 2,
        study_plan_record_semester: 1,
      },
      {
        // ปี 2 เทอม 2
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปบังคับ 4",
        study_plan_record_year: 2,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปบังคับ 5",
        study_plan_record_year: 2,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 27,
        study_plan_record_year: 2,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 40,
        study_plan_record_year: 2,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 41,
        study_plan_record_year: 2,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 38,
        study_plan_record_year: 2,
        study_plan_record_semester: 2,
      },
      {
        // ปี 3 เทอม 1
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปบังคับ 3",
        study_plan_record_year: 3,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 43,
        study_plan_record_year: 3,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 42,
        study_plan_record_year: 3,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        subject_id: 44,
        study_plan_record_year: 3,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "วิชาชีพเลือก 1",
        study_plan_record_year: 3,
        study_plan_record_semester: 1,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "วิชาชีพเลือก 2",
        study_plan_record_year: 3,
        study_plan_record_semester: 1,
      },
      {
        // ปี 3 เทอม 2
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปบังคับ 7",
        study_plan_record_year: 3,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปบังคับ 8",
        study_plan_record_year: 3,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 45,
        study_plan_record_year: 3,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 47,
        study_plan_record_year: 3,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "วิชาชีพเลือก 3",
        study_plan_record_year: 3,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "วิชาชีพเลือก 4",
        study_plan_record_year: 3,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "วิชาเลือกเสรี 1",
        study_plan_record_year: 3,
        study_plan_record_semester: 2,
      },
      {
        // ปี 4 เทอม 1
        study_plan_id: 1,
        subject_id: 49,
        study_plan_record_year: 4,
        study_plan_record_semester: 1,
      },
      {
        // ปี 4 เทอม 2
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปเลือก 1",
        study_plan_record_year: 4,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "ศึกษาทั่วไปเลือก 2",
        study_plan_record_year: 4,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        subject_id: 48,
        study_plan_record_year: 4,
        study_plan_record_semester: 2,
      },
      {
        study_plan_id: 1,
        study_plan_record_elective_course: "วิชาเลือกเสรี 2",
        study_plan_record_year: 4,
        study_plan_record_semester: 2,
      },
    ];

    await StudyPlanRecord.createMany(studyPlanRecordData);
  }
}
