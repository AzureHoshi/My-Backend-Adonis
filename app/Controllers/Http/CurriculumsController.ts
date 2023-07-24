import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import Curriculum from "App/Models/Curriculum";

const curriculumSchema = schema.create({
  faculty_id: schema.number(),
  collegian_group_id: schema.number(),
  curriculum_name_th: schema.string([rules.maxLength(255)]),
  curriculum_name_en: schema.string([rules.maxLength(255)]),
  curriculum_short_name_th: schema.string.optional({ trim: true }, [
    rules.maxLength(255),
  ]),
  curriculum_short_name_en: schema.string.optional({ trim: true }, [
    rules.maxLength(255),
  ]),
  curriculum_year: schema.number(),
});

export default class CurriculumsController {
  public async index({ response }: HttpContextContract) {
    try {
      const curriculums = await Curriculum.query();
      return response.status(200).json({ data: curriculums, status: 200 });
    } catch (error) {
      return response.status(400).json({ error: error, status: 400 });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: curriculumSchema });
      const curriculum: Curriculum = await Curriculum.create(payload);
      return response.status(201).json({ data: curriculum, status: 201 });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const id = params.id;
    try {
      const payload = await request.validate({ schema: curriculumSchema });
      const curriculum: any = await Curriculum.find(id);
      if (!curriculum) {
        return response
          .status(404)
          .json({ message: "Curriculum not found", status: 404 });
      }
      curriculum.merge(payload);
      await curriculum.save();
      return response.status(200).json({
        data: curriculum,
        status: 200,
        message: `Curriculum updated byId ${id} success`,
      });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const id = params.id;
    try {
      const curriculum: any = await Curriculum.find(id);
      if (!curriculum) {
        return response
          .status(404)
          .json({ message: "Curriculum not found", status: 404 });
      } else if (curriculum.is_deleted === 1) {
        return response
          .status(400)
          .json({ message: "Curriculum already deleted", status: 400 });
      } else {
        curriculum.is_deleted = 1;
        await curriculum.save();
        return response.status(200).json({
          data: curriculum,
          status: 200,
          message: `Curriculum deleted byId ${id} success`,
        });
      }
    } catch (error) {
      return response.status(400).json({ error: error, status: 400 });
    }
  }
}
