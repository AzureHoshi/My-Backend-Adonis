import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import Curriculum from "App/Models/Curriculum";
import Subject from "App/Models/Subject";

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
    const curriculums = await Curriculum.query()
      .preload("faculty") // แสดงข้อมูลของ faculties ที่เกี่ยวข้อง
      .preload("collegian_groups") // แสดงข้อมูลของ collegian_groups ที่เกี่ยวข้อง
      .where("curriculums.is_deleted", false)
      .orderBy("curriculums.updated_at", "desc");
    return response.status(200).json({ data: curriculums, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const { ref_curriculum_id } = request.all();
      const payload = await request.validate({ schema: curriculumSchema });
      console.log(ref_curriculum_id);

      if (!ref_curriculum_id) {
        const curriculum: Curriculum = await Curriculum.create(payload);
        return response.status(201).json({ data: curriculum, status: 201 });
      } else {
        // const ref_curriculum: any = await Curriculum.find(
        //   payload.ref_curriculum_id
        // );

        const subjectsWithCurriculumId = await Subject.query().where(
          "curriculum_id",
          ref_curriculum_id
        );
        console.log(subjectsWithCurriculumId);

        if (
          !subjectsWithCurriculumId ||
          subjectsWithCurriculumId.length === 0
        ) {
          console.log("test1: ", subjectsWithCurriculumId);

          return response
            .status(404)
            .json({ message: "Ref curriculum not found", status: 404 });
        } else {
          console.log("test2: ", subjectsWithCurriculumId);

          const curriculum: Curriculum = await Curriculum.create(payload);
          const subjectsWithNewCurriculumId = subjectsWithCurriculumId.map(
            (subject) => {
              const subjectData = subject.toJSON();
              subjectData.curriculum_id = ref_curriculum_id; // เปลี่ยน curriculum_id เป็น 4
              delete subjectData.subject_id; // ลบ subject_id เพื่อให้สร้างข้อมูลใหม่
              return subjectData;
            }
          );
          await Subject.createMany(subjectsWithNewCurriculumId);
          return response.status(201).json({
            data: curriculum,
            subjectData: subjectsWithNewCurriculumId,
            status: 201,
          });
        }
      }
    } catch (error) {
      console.log(error.message);
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
    try {
      const id = params.id;
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
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }
}
