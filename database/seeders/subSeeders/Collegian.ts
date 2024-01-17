import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Collegian from "App/Models/Collegian";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const collegianData = [
      {
        user_id: 1,
        prefix: "นาย",
        col_first_name: "ปรัชญา",
        col_last_name: "มาลาพุ่ม",
        col_code: "63543206021-1",
        col_email: "Prachaya_ma63@live.rmutl.ac.th",
        col_status: "ปกติ",
        curriculum: "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์",
        section: "วศ.บ.วิศวกรรมคอมพิวเตอร์ เทียบโอน",
        col_birthday: new Date("1998-10-13"),
      },
      {
        prefix: "นาย",
        col_first_name: "ทศพร",
        col_last_name: "ทวีคุณ",
        col_code: "63543206013-8",
        col_email: "Thodsaporn_th63@live.rmutl.ac.th",
        col_status: "ปกติ",
        curriculum: "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์",
        section: "วศ.บ.วิศวกรรมคอมพิวเตอร์ เทียบโอน",
        col_birthday: new Date("1998-11-17"),
      },
      {
        prefix: "นาย",
        col_first_name: "อาณัติ",
        col_last_name: "คำสุวรรณ์",
        col_code: "63543206046-8",
        col_email: "anat_ka63@live.rmutl.ac.th ",
        col_status: "ปกติ",
        curriculum: "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์",
        section: "วศ.บ.วิศวกรรมคอมพิวเตอร์ เทียบโอน",
        col_birthday: new Date("1998-09-08"),
      },
    ];

    await Collegian.createMany(collegianData);
  }
}
