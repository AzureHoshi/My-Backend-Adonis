import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import SubjectGroup from "App/Models/SubjectGroup";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const subjectGroupData = [
      {
        subject_type_id: 1,
        subject_group_name: "กลุ่มวิชาภาษาและการสื่อสาร",
      },
      {
        subject_type_id: 1,
        subject_group_name: "กลุ่มวิชาสุภาพ",
      },
      {
        subject_type_id: 1,
        subject_group_name: "กลุ่มวิชาบูรณาการ",
      },
      {
        subject_type_id: 2,
        subject_group_name: "กลุ่มวิชาบูรณาการ",
      },
      {
        subject_type_id: 2,
        subject_group_name: "กลุ่มวิชาวิทยาศาสตร์และคณิตศาสตร์",
      },
      {
        subject_type_id: 3,
        subject_group_name: "กลุ่มวิชาพื้นฐานทางวิทยาศาสตร์และคณิตศาสตร์",
      },
      {
        subject_type_id: 3,
        subject_group_name: "กลุ่มวิชาพื้นฐานทางวิศวกรรมศาสตร์",
      },
      {
        subject_type_id: 4,
        subject_group_name: "กลุ่มฮาร์ดแวร์และสถาปัตยกรรมคอมพิวเตอร์",
      },
      {
        subject_type_id: 4,
        subject_group_name: "กลุ่มโครงสร้างพื้นฐานของระบบ",
      },
      {
        subject_type_id: 4,
        subject_group_name: "กลุ่มเทคโนโลยีและวิธีการทางซอฟต์แวร์",
      },
      {
        subject_type_id: 4,
        subject_group_name: "กลุ่มเทคโนโลยีเพื่องานประยุกต์",
      },
      {
        subject_type_id: 4,
        subject_group_name: "กลุ่มฝึกวิชาชีพและโครงงาน",
      },
      {
        subject_type_id: 5,
        subject_group_name: "กลุ่มวิชาเครือข่ายคอมพิวเตอร์",
      },
      {
        subject_type_id: 5,
        subject_group_name: "กลุ่มวิชาระบบคอมพิวเตอร์",
      },
      {
        subject_type_id: 5,
        subject_group_name: "กลุ่มวิชาวิศวกรรมซอฟต์แวร์",
      },
      {
        subject_type_id: null,
        subject_group_name: "กลุ่มวิชาพื้นฐานวิชาชีพ",
      },
      {
        subject_type_id: null,
        subject_group_name: "กลุ่มวิชาชีพบังคับ",
      },
      {
        subject_type_id: null,
        subject_group_name: "กลุ่มวิชาชีพเลือก",
      },
      {
        subject_type_id: null,
        subject_group_name: "กลุ่มวิชาฝึกประสบการณ์วิชาชีพ",
      },
    ];

    await SubjectGroup.createMany(subjectGroupData);
  }
}
