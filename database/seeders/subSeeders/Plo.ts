import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Plo from "App/Models/Plo";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const pLOsData = [
      {
        plo_name: "PLO1",
        plo_description:
          "มีความรู้ ความเข้าใจในหลักการและทฤษฎีที่สำคัญของวิศวกรรมซอฟแวร์",
      },
      {
        plo_name: "PLO2",
        plo_description:
          "มีความรู้พื้นฐานของกระบวนการวิเคราะห์ระบบงาน การออกแบบ พัฒนา และการใช้งานซอฟต์แวร์ โดยคำนึงถึงสถาปัตยกรรมที่เหมาะสม",
      },
      {
        plo_name: "PLO3",
        plo_description: "มีความสามารถพัฒนาซอฟต์แวร์ในงานอุตสาหกรรม",
      },
      {
        plo_name: "PLO4",
        plo_description:
          "มีความรู้เบื้องต้นในการประกอบธุรกิจ และทักษะพื้นฐานของการเป็นผู้ประกอบการซอฟต์แวร์",
      },
      {
        plo_name: "PLO5",
        plo_description:
          "มีความสามารถทำงานเป็นทีมพัฒนาซอฟต์แวร์ในตำแหน่งต่าง ๆ อย่างเป็นระบบเหมือนกับสภาพแวดล้อมจริง และแสวงหาความรู้เพื่อนำไปพัฒนาตนเองและงานตลอดชีวิต",
      },
    ];

    await Plo.createMany(pLOsData);
  }
}
