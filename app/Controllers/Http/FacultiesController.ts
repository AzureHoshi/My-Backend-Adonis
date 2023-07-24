import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import Faculty from "App/Models/Faculty";

const facultySchema = schema.create({
  faculty_name_th: schema.string([rules.maxLength(255)]),
  faculty_name_en: schema.string([rules.maxLength(255)]),
});

export default class FacultiesController {
  public async index({ response }: HttpContextContract) {
    const faculty = await Faculty.query()
      .where("is_deleted", 0)
      .orderBy("updatedAt", "desc");
    return response.status(200).json({ data: faculty, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate({ schema: facultySchema });
    const faculty: Faculty = await Faculty.create(payload);
    return response.status(201).json({ data: faculty, status: 201 });
  }

  // ? สำหรับ show ใช้ได้เฉพาะ id ที่เป็น integer เท่านั้น
  // public async show({ params, response }: HttpContextContract) {
  //   return response.json({ test: "test" });
  // }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const id = params.id;
      const payload = await request.validate({ schema: facultySchema });
      const faculty: any = await Faculty.find(id);
      if (!faculty) {
        return response
          .status(404)
          .json({ message: "Faculty not found", status: 404 });
      }
      faculty.merge(payload);
      await faculty.save();
      return response.status(200).json({
        data: faculty,
        status: 200,
        message: `Faculty updated byId ${id} success`,
      });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const id = params.id;
    const faculty: any = await Faculty.find(id);
    if (!faculty) {
      return response
        .status(404)
        .json({ message: "Faculty not found", status: 404 });
    } else if (faculty.is_deleted === 1) {
      return response
        .status(404)
        .json({ message: "Faculty already deleted", status: 404 });
    } else {
      faculty.is_deleted = 1;
      await faculty.save();
      return response.status(200).json({
        data: faculty,
        status: 200,
        message: `Faculty deleted byId ${id} success`,
      });
    }
  }
}
