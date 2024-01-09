import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import YloDescription from "App/Models/YloDescription";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const yearLODescriptionsData = [
      {
        ylo_id: 1,
        ylo_description: "- นักศึกษารู้หลักการพัฒนาซอฟต์แวร์เบื้องต้น",
      },
      {
        ylo_id: 1,
        ylo_description:
          "- นักศึกษามีทักษะในการเขียนโปรแกรมคอมพิวเตอร์เบื้องต้นและประสบการณ์ในการสร้างซอฟต์แวร์ขนาดเล็ก เพื่อสร้างแรงบันดาลใจในการเรียน",
      },
      {
        ylo_id: 2,
        ylo_description:
          "- นักศึกษาสามารถจัดการโครงสร้างข้อมูลและการจัดเก็บข้อมูลได้อย่างเป็นระบบ",
      },
      {
        ylo_id: 2,
        ylo_description: "- นักศึกษาสามารถวิเคราะห์ออกแบบระบบซอฟต์แวร์",
      },
      {
        ylo_id: 2,
        ylo_description:
          "- นักศึกษาเรียนรู้การสร้างซอฟต์แวร์และแอพพลิเคชั่นเพื่อให้มีทักษะในการพัฒนาโปรแกรมคอมพิวเตอร์ชั้นสูง",
      },
      {
        ylo_id: 3,
        ylo_description:
          "- นักศึกษาสามารถพิจารณา ประเมินความเป็นไปได้และนำเสนอโครงการระบบซอฟต์แวร์",
      },
      {
        ylo_id: 3,
        ylo_description:
          "- นักศึกษาเข้าใจหลักการพัฒนาซอฟต์แวร์และนำไปใช้ในโครงการอย่างเป็นระบบ",
      },
      {
        ylo_id: 4,
        ylo_description:
          "- นักศึกษามีประสบการณ์ในการออกแบบและพัฒนาซอฟต์แวร์ จากการทำงานในสถานประกอบการ",
      },
      {
        ylo_id: 4,
        ylo_description:
          "- นักศึกษาสามารถทำงานเป็นทีมโดยการรับโจทย์จริงจากสถานประกอบการ และใช้กระบวนการพัฒนาซอฟต์แวร์เต็มรูปแบบ",
      },
    ];

    await YloDescription.createMany(yearLODescriptionsData);
  }
}
