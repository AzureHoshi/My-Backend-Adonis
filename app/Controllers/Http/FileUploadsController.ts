import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Application from "@ioc:Adonis/Core/Application";
import TestUploadFile from "App/Models/TestUploadFile";

export default class FileUploadsController {
  public async download({ response }: HttpContextContract) {
    return response.download(Application.tmpPath("files-upload/test.pdf"));
  }

  public async upload({ request, response }: HttpContextContract) {
    // ? กำหนดขนาดไฟล์ และ ชนิดไฟล์ที่อนุญาติให้อัพโหลด
    const file = request.file("file", {
      size: "10mb",
      extnames: ["pdf", "word", "docx"],
    });

    // ? แสดงข้อมูลไฟล์ที่อัพโหลด
    // console.log(file);

    // ? เช็คว่ามีไฟล์หรือไม่
    if (!file) {
      console.log("File is not found");
      return response.badRequest({ message: "File is not found" });
    }

    // ? เช็คว่าไฟล์มีขนาดเกินที่กำหนดไว้ และ ตรงกับชนิดที่ต้องการ หรือไม่
    if (!file.isValid) {
      console.log("File is not valid");
      return response.badRequest({ message: "File is not valid" });
    }

    file.clientName = "test.docx";
    await TestUploadFile.create({
      fileName: file.clientName,
      filePath: Application.tmpPath("files-upload"),
      fileType: file.extname,
      fileSize: file.size,
    });

    // ? แสดงข้อมูลไฟล์ที่อัพโหลด
    // console.log(fileUpload);

    await file.move(Application.tmpPath("files-upload"));
    return response.ok({
      message: "Upload success",
      file: file.clientName,
    });
  }
}
