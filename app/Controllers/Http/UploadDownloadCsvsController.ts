import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Papa from "papaparse";
import fs from "fs/promises";
import Subject from "App/Models/Subject";

export default class UploadDownloadCsvsController {
  async upload({ request, response }: HttpContextContract) {
    try {
      const csvFile = request.file("file", {
        size: "10mb",
        extnames: ["csv"],
      });

      if (!csvFile) {
        return response
          .status(400)
          .json({ message: "CSV file is required", status: 400 });
      } else if (!csvFile.isValid) {
        return response
          .status(400)
          .json({ message: "CSV file is not valid", status: 400 });
      }

      if (!csvFile.tmpPath) {
        return response
          .status(400)
          .json({ message: "Temporary path not found", status: 400 });
      }

      // ใช้ tmpPath เพื่ออ่านข้อมูลจากไฟล์ CSV
      const rawData = await fs.readFile(csvFile.tmpPath, "utf-8");

      // แปลงข้อมูล CSV เป็น JSON โดยใช้ papaparse
      const jsonData = Papa.parse(rawData, {
        header: true,
        dynamicTyping: true,
      });

      const filteredData = jsonData.data.filter(
        (item) => item.faculty_name_th !== null
      );

      console.log(filteredData);

      return response
        .status(200)
        .json({ data: filteredData, table: request.body().table });
    } catch (error) {
      return response.status(400).json({ message: error.message, status: 400 });
    }
  }

  public async download({ request, response }: HttpContextContract) {
    try {
      const table = request.input("table");
      let data;

      // ใช้ switch เพื่อตรวจสอบค่า 'table' และดึงข้อมูลตามเงื่อนไข
      switch (table) {
        case "subjects":
          const getData = await Subject.query()
            .preload("curriculums")
            .preload("subject_groups")
            .where("is_deleted", false)
            .orderBy("subject_id", "asc");

          data = getData.map((item) => {
            return {
              subject_id: item.subject_id,
              curriculum_id: item.curriculum_id,
              subject_group_id: item.subject_group_id,
              subject_code: item.subject_code,
              subject_name_th: item.subject_name_th,
              subject_name_en: item.subject_name_en,
              subject_credit: item.subject_credit,
              subject_description: item.subject_description,
              is_deleted: item.is_deleted,
              createdAt: item.createdAt,
              updatedAt: item.updatedAt,
            };
          });

          break;

        // เพิ่ม case ตามตารางที่ต้องการดาวน์โหลด
        // case 'anotherTable':
        //   data = await AnotherTableModel.query();
        //   break;

        default:
          return response
            .status(400)
            .json({ message: "Invalid table name", status: 400 });
      }

      // แปลงข้อมูลเป็น CSV
      const csv = Papa.unparse(data);

      // ส่ง CSV ไปยัง client ใน response
      response.header("Content-Type", "text/csv");
      response.header(
        "Content-Disposition",
        `attachment; filename=${table}.csv`
      );
      response.status(200).send(csv);
    } catch (error) {
      return response.status(400).json({ message: error.message, status: 400 });
    }
  }
}
