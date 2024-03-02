import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import Curriculum from "App/Models/Curriculum";
import Subject from "App/Models/Subject";

const curriculumSchema = schema.create({
  faculty_id: schema.number(),
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
      .preload(
        "collegian_groups",
        (
          collegianGroupsQuery // แสดงข้อมูลของ collegian_groups ที่เกี่ยวข้อง
        ) => {
          collegianGroupsQuery.where("is_deleted", false);
        }
      ) // แสดงข้อมูลของ collegian_groups ที่เกี่ยวข้อง
      .where("curriculums.is_deleted", false)
      .orderBy("curriculums.updated_at", "desc");
    return response.status(200).json({ data: curriculums, status: 200 });
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const id = params.id;

      const curriculum = await Curriculum.query()
        .preload("faculty") // แสดงข้อมูลของ faculties ที่เกี่ยวข้อง
        .whereHas("faculty", (facultyQuery) => {
          facultyQuery.where("is_deleted", false);
        })
        .preload("collegian_groups") // แสดงข้อมูลของ collegian_groups ที่เกี่ยวข้อง
        .whereHas("collegian_groups", (collegianGroupsQuery) => {
          collegianGroupsQuery.where("is_deleted", false);
        })
        .where("curriculums.is_deleted", false)
        .where("curriculums.curriculum_id", id)
        .first();

      if (!curriculum) {
        return response
          .status(404)
          .json({ message: "Curriculum not found", status: 404 });
      } else {
        return response.status(200).json({ data: curriculum, status: 200 });
      }
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Internal Server Error", status: 500 });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const storeSchema = schema.create({
      faculty_id: schema.number(),
      curriculum_name_th: schema.string([rules.maxLength(255)]),
      curriculum_name_en: schema.string([rules.maxLength(255)]),
      curriculum_short_name_th: schema.string.optional({ trim: true }, [
        rules.maxLength(255),
      ]),
      curriculum_short_name_en: schema.string.optional({ trim: true }, [
        rules.maxLength(255),
      ]),
      curriculum_year: schema.number(),
      ref_curriculum_id: schema.number.optional(),
    });

    try {
      const payload = await request.validate({ schema: storeSchema });

      if (!payload.ref_curriculum_id) {
        const curriculum: Curriculum = await Curriculum.create(payload);
        return response.status(201).json({ data: curriculum, status: 201 });
      } else {
        const ref_curriculum: any = await Curriculum.find(
          payload.ref_curriculum_id
        );

        if (!ref_curriculum) {
          return response.status(404).json({
            message: "Curriculum not found",
            status: 404,
          });
        }

        const subjectsWithCurriculumId = await Subject.query()
          .where("curriculum_id", payload.ref_curriculum_id)
          .where("is_deleted", false);

        if (
          !subjectsWithCurriculumId ||
          subjectsWithCurriculumId.length === 0
        ) {
          return response.status(404).json({
            message: "curriculum have not any subject to duplicate!",
            status: 404,
          });
        } else {
          const curriculum: Curriculum = await Curriculum.create(payload);

          const subjectsWithNewCurriculumId =
            await subjectsWithCurriculumId.map((subject) => {
              const subjectData = subject.toJSON();
              subjectData.curriculum_id = curriculum.curriculum_id; // เปลี่ยน curriculum_id เป็น 4
              delete subjectData.subject_id; // ลบ subject_id เพื่อให้สร้างข้อมูลใหม่

              return subjectData;
            });
          await Subject.createMany(subjectsWithNewCurriculumId);
          return response.status(201).json({
            data: curriculum,
            subjectData: subjectsWithNewCurriculumId,
            status: 201,
          });
        }
      }
    } catch (error) {
      console.log("error: ", error.message);
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
      }

      if (curriculum.is_deleted) {
        return response.status(200).json({
          message: "Curriculum already deleted",
          status: 200,
        });
      }

      curriculum.merge({ is_deleted: true });
      await curriculum.save();
      return response.status(200).json({
        data: curriculum,
        status: 200,
        message: `Curriculum deleted byId ${id} success`,
      });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }
}
