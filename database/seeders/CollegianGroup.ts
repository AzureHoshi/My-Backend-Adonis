import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import CollegianGroup from "App/Models/CollegianGroup";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const collegianGroupData = [
      {
        collegian_group_name_th: "บริหารธุรกิจบัณฑิต",
        collegian_group_name_en: "Bachelor of  Business Administration",
        collegian_group_short_name_th: "บธ.บ.",
        collegian_group_short_name_en: "B.B.A.",
      },
      {
        collegian_group_name_th: "ศิลปศาสตรบัณฑิต",
        collegian_group_name_en: "Bachelor of  Arts",
        collegian_group_short_name_th: "ศศ.บ.",
        collegian_group_short_name_en: "B.A.",
      },
      {
        collegian_group_name_th: "บัญชีบัณฑิต",
        collegian_group_name_en: "Bachelor of  Accountancy",
        collegian_group_short_name_th: "บช.บ.",
        collegian_group_short_name_en: "B.Acc.",
      },
      {
        collegian_group_name_th: "วิทยาศาสตรบัณฑิต",
        collegian_group_name_en: "Bachelor of  Science",
        collegian_group_short_name_th: "วท.บ.",
        collegian_group_short_name_en: "B.Sc.",
      },
      {
        collegian_group_name_th: "คหกรรมศาสตรบัณฑิต",
        collegian_group_name_en: "Bachelor of  Home Economics ",
        collegian_group_short_name_th: "คศ.บ.",
        collegian_group_short_name_en: "B.H.E.",
      },
      {
        collegian_group_name_th: "เทคโนโลยีบัณฑิต",
        collegian_group_name_en: "Bachelor of  Technology",
        collegian_group_short_name_th: "ทล.บ.",
        collegian_group_short_name_en: "B.T.",
      },
      {
        collegian_group_name_th: "วิศวกรรมศาสตรบัณฑิต",
        collegian_group_name_en: "Bachelor of  Engineering",
        collegian_group_short_name_th: "วศ.บ.",
        collegian_group_short_name_en: "B.Eng",
      },
      {
        collegian_group_name_th: "วิศวกรรมศาสตรบัณฑิต ต่อเนื่อง",
        collegian_group_name_en:
          "Bachelor of  Engineering (Continuing Program)",
        collegian_group_short_name_th: "วศ.บ. (ต่อเนื่อง)",
        collegian_group_short_name_en: "B.Eng (Continuing Program)",
      },
      {
        collegian_group_name_th: "อุตสาหกรรมศาสตรบัณฑิต",
        collegian_group_name_en: "Bachelor of  Industrial Technology",
        collegian_group_short_name_th: "อส.บ.",
        collegian_group_short_name_en: "B.Ind.Tech.",
      },
      {
        collegian_group_name_th: "ครุศาสตร์อุตสาหกรรมบัณฑิต",
        collegian_group_name_en: "Bachelor of Science in Technical Education",
        collegian_group_short_name_th: "ค.อ.บ.",
        collegian_group_short_name_en: "B.S.Tech.Ed.",
      },
      {
        collegian_group_name_th: "เทคโนโลยีบัณฑิต",
        collegian_group_name_en: "Bachelor of  Technology",
        collegian_group_short_name_th: "ทล.บ.",
        collegian_group_short_name_en: "B.Tech.",
      },
      {
        collegian_group_name_th: "ศิลปบัณฑิต",
        collegian_group_name_en: "Bachelor of  Fine Arts",
        collegian_group_short_name_th: "ศ.บ.",
        collegian_group_short_name_en: "B.F.A.",
      },
      {
        collegian_group_name_th: "ศิลปกรรมศาสตรบัณฑิต",
        collegian_group_name_en: "Bachelor of  Fine and Applied Arts",
        collegian_group_short_name_th: "ศป.บ.",
        collegian_group_short_name_en: "B.F.A.",
      },
      {
        collegian_group_name_th: "ศิลปบัณฑิต",
        collegian_group_name_en: "Bachelor of  Fine Arts",
        collegian_group_short_name_th: "ศล.บ.",
        collegian_group_short_name_en: "B.F.A.",
      },
      {
        collegian_group_name_th: "สถาปัตยกรรมศาสตรบัณฑิต",
        collegian_group_name_en: "Bachelor of  Architecture",
        collegian_group_short_name_th: "สถ.บ.",
        collegian_group_short_name_en: "B.Arch.",
      },
    ];

    await CollegianGroup.createMany(collegianGroupData);
  }
}
