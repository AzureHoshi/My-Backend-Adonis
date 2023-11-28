import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import CompetencySub from "App/Models/CompetencySub";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const competencySubData = [
      {
        competency_id: 1,
        competency_sub_name: "การแยกปัญหา",
        competency_sub_description:
          "ความสามารถในการระบุปัญหาและแบ่งเป็นขั้นตอนย่อยที่เป็นเบื้องต้นเพื่อวางแผนการแก้ปัญหา",
      },
      {
        competency_id: 1,
        competency_sub_name: "การวางแผน",
        competency_sub_description:
          "การสามารถวางแผนวิธีแก้ปัญหาโดยระบุขั้นตอนที่จำเป็นและการเรียงลำดับเหตุการณ์ตามลำดับที่เหมาะสม",
      },
      {
        competency_id: 1,
        competency_sub_name: "การออกแบบ",
        competency_sub_description:
          "ความสามารถในการออกแบบโครงสร้างข้อมูลและอัลกอริทึมที่เหมาะสมเพื่อแก้ปัญหา และการคำนึงถึงประสิทธิภาพและประสิทธิภาพในการทำงาน",
      },
      {
        competency_id: 1,
        competency_sub_name: "การคิดแบบเชิงวิศวกรรม",
        competency_sub_description:
          "การสามารถคิดแบบเชิงวิศวกรรมเพื่อสร้างโซลูชันที่เหมาะสมและยั่งยืนสำหรับปัญหา",
      },
      {
        competency_id: 2,
        competency_sub_name: "การเข้าใจแบบตรรกะ",
        competency_sub_description:
          "ความสามารถในการใช้ตรรกะเพื่อแก้ปัญหาและการตรวจสอบความถูกต้องของข้อมูลและอัลกอริทึม",
      },
      {
        competency_id: 2,
        competency_sub_name: "ความเข้าใจในเลขฐานสองและการคำนวณทางคอมพิวเตอร์",
        competency_sub_description:
          "ทราบและเข้าใจเลขฐานสอง (binary) และการการคำนวณเชิงดิจิทัล แบบอย่างง่าย",
      },
      {
        competency_id: 3,
        competency_sub_name: "การเขียนโค้ด",
        competency_sub_description:
          "ทราบและเข้าใจวิธีการเขียนโค้ดในภาษาโปรแกรมต่าง ๆ โดยมีไวยากรณ์ที่ถูกต้องและโครงสร้างของโปรแกรมที่ดี",
      },
      {
        competency_id: 4,
        competency_sub_name: "ความเข้าใจแบบพื้นฐานของโครงสร้างข้อมูล",
        competency_sub_description:
          "ความเข้าใจถึงพื้นฐานของโครงสร้างข้อมูล เช่น อาร์เรย์ (Arrays), รายการ (Linked Lists), แถวคอย (Queues), และสแต็ก (Stacks) รวมถึงความเข้าใจถึงคุณสมบัติและการทำงานของแต่ละโครงสร้าง",
      },
      {
        competency_id: 4,
        competency_sub_name: "การเขียนโค้ดที่ใช้โครงสร้างข้อมูล",
        competency_sub_description:
          "ความสามารถในการเขียนโค้ดที่ใช้โครงสร้างข้อมูลอย่างถูกต้องและประสิทธิภาพ",
      },
      {
        competency_id: 5,
        competency_sub_name: "ความเข้าใจแบบพื้นฐานของอัลกอริทึม",
        competency_sub_description:
          "ความเข้าใจถึงอัลกอริทึมในรูปแบบของขั้นตอนและวิธีการทำงาน",
      },
      {
        competency_id: 6,
        competency_sub_name: "การวิเคราะห์อัลกอริทึม",
        competency_sub_description:
          "ความสามารถในการวิเคราะห์อัลกอริทึมเพื่อเข้าใจการทำงานและประสิทธิภาพ",
      },
      {
        competency_id: 7,
        competency_sub_name: "การประยุกต์ใช้อัลกอริทึม",
        competency_sub_description:
          "สามารถในการระบุวิธีการใช้อัลกอริทึมเพื่อแก้ปัญหาทางคอมพิวเตอร์",
      },
      {
        competency_id: 8,
        competency_sub_name: "ความเข้าใจเกี่ยวกับการประมวลผลข้อมูล",
        competency_sub_description:
          "สามารถในการเลือกใช้โครงสร้างข้อมูลที่เหมาะสมสำหรับประมวลผลข้อมูล และเข้าใจวิธีการทำงานของโครงสร้าง",
      },
      {
        competency_id: 9,
        competency_sub_name: "ความเข้าใจเกี่ยวกับแนวคิดการเรียนรู้เครื่อง",
        competency_sub_description:
          "ความเข้าใจถึงทฤษฎีและหลักการพื้นฐานของการเรียนรู้เครื่องและความสามารถในการจำแนะนำแนวคิดทั่วไปของ ML",
      },
      {
        competency_id: 9,
        competency_sub_name: "การเข้าใจเกี่ยวกับแบบจำลอง (Model Understanding)",
        competency_sub_description:
          "ความเข้าใจถึงวิธีการสร้างและประมวลผลแบบจำลองของ ML รวมถึงการคำนวณค่าความสามารถและค่าสเกลที่ใช้ในการวิเคราะห์และตรวจสอบแบบจำลอง",
      },
      {
        competency_id: 9,
        competency_sub_name: "ความเข้าใจเกี่ยวกับข้อมูล (Data Understanding)",
        competency_sub_description:
          "ความสามารถในการเข้าใจและจัดการข้อมูลที่ใช้ใน ML รวมถึงการทราบเกี่ยวกับข้อมูลเชิงทางการคณิตและการแสดงข้อมูล",
      },
      {
        competency_id: 10,
        competency_sub_name: "การใช้งานเครื่องมือและไลบรารี",
        competency_sub_description:
          "ความสามารถในการใช้เครื่องมือและไลบรารีในการแก้ปัญหาและการพัฒนาซอฟต์แวร์ รวมถึงการเข้าใจวิธีการใช้คำสั่งและฟังก์ชันที่เกี่ยวข้อง",
      },
    ];

    await CompetencySub.createMany(competencySubData);
  }
}
