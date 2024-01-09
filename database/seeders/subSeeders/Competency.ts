import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Competency from "App/Models/Competency";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const competencyData = [
      {
        subject_id: 26,
        competency_name: "การวิเคราะห์ความแปรผันของข้อมูล",
      },
      {
        subject_id: 27,
        competency_name: "คิดเชิงตรรกะอย่างเป็นระบบ",
      },
      {
        subject_id: 28,
        competency_name: "แก้ปัญหาอย่างมีขั้นตอนและรอบคอบ",
      },
      {
        subject_id: 29,
        competency_name: "คิดเชิงตรรกะและแก้ปัญหาอย่างเป็นระบบ",
      },
      {
        subject_id: 30,
        competency_name: "ทำงานอย่างมีลำดับขั้นตอนและรอบคอบ",
      },
      {
        subject_id: 31,
        competency_name:
          "วิเคราะห์และประเมินกฎหมายและจริยธรรมที่เกี่ยวข้องกับเทคโนโลยีสารสนเทศ",
      },
      {
        subject_id: 32,
        competency_name: "ติดตั้งและใช้งานระบบปฏิบัติการต่างๆ",
      },
      {
        subject_id: 33,
        competency_name: "การเขียนโค้ดที่ถูกต้อง มีประสิทธิภาพ",
      },
      {
        subject_id: 34,
        competency_name: "ออกแบบและสร้างโปรแกรมเชิงวัตถุที่ซับซ้อนได้",
      },
      {
        subject_id: 35,
        competency_name: "หลักการและขั้นตอนของกระบวนการพัฒนาซอฟต์แวร์",
      },
      {
        subject_id: 36,
        competency_name: "บริหารจัดการความต้องการ แนะนำวิธีการเทคนิคต่างๆ",
      },
      {
        subject_id: 37,
        competency_name: "หลักการและแนวคิดของสถาปัตยกรรมซอฟต์แวร์",
      },
      {
        subject_id: 38,
        competency_name:
          "หลักการและขั้นตอนของการวิเคราะห์ระบบได้อย่างมีประสิทธิภาพ",
      },
      {
        subject_id: 39,
        competency_name: "การจัดการแบบซอฟต์แวร์ในการบำรุงรักษา",
      },
      {
        subject_id: 40,
        competency_name: "การจัดการการบูรณาการของโครงการ",
      },
      {
        subject_id: 43,
        competency_name: "การเรียนรู้เกี่ยวกับการประยุกต์ใช้ปัญญาประดิษฐ์",
      },
      {
        subject_id: 44,
        competency_name: "วิธีการป้องกันด้านความปลอดภัยทางไซเบอร์",
      },
      {
        subject_id: 45,
        competency_name: "แนวคิดเกี่ยวกับการเป็นผู้ประกอบการ",
      },
      {
        subject_id: 46,
        competency_name:
          "การประยุกต์ใช้ โครงสร้างข้อมูลชนิดต่างๆ ในการแก้ไขปัญหา",
      },
      {
        subject_id: 47,
        competency_name: "จำแนกประเภทของการสื่อสารข้อมูล",
      },
      {
        subject_id: 48,
        competency_name: "การทำงานของโครงสร้างสถาปัตยกรรมคอมพิวเตอร์",
      },
      {
        subject_id: 49,
        competency_name: "การออกแบบฐานข้อมูลเชิงสัมพันธ์",
      },
    ];

    await Competency.createMany(competencyData);
  }
}
