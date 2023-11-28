import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import Competency from "App/Models/Competency";
import CompetencySub from "App/Models/CompetencySub";
import Subject from "App/Models/Subject";

export default class SubjectsController {
  public async index({ response }: HttpContextContract) {
    try {
      // ดึงข้อมูล subjects
      const subjects = await Subject.query()
        .preload("curriculums")
        .preload("subject_groups")
        .where("is_deleted", false)
        .orderBy("updatedAt", "desc");

      // ดึงข้อมูล competencies โดยเช็ค subject_id ของแต่ละ subject
      const subjectWithCompetency = await Promise.all(
        subjects.map(async (subject) => {
          const competencies = await Competency.query()
            .where("subject_id", subject.subject_id)
            .where("is_deleted", false);

          // เพิ่มการดึงข้อมูล competency_sub จาก CompetencySub
          const competenciesWithSub = await Promise.all(
            competencies.map(async (competency) => {
              const competencySub = await CompetencySub.query()
                .where("competency_id", competency.competency_id)
                .where("is_deleted", false);
              return {
                ...competency.toJSON(),
                competency_sub: competencySub,
              };
            })
          );

          return {
            ...subject.toJSON(),
            competencies: competenciesWithSub,
          };
        })
      );

      return response.status(200).json({ data: subjectWithCompetency });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const subject = await Subject.query()
        .where("subject_id", params.id)
        .preload("curriculums")
        .preload("subject_groups")
        .firstOrFail();

      // ถ้าไม่พบข้อมูล subjects
      if (!subject) {
        return response
          .status(404)
          .json({ message: "Subject not found", status: 404 });
      }

      // ดึงข้อมูล competencies โดยเช็ค subject_id ของแต่ละ subject
      const competencies = await Competency.query()
        .where("subject_id", subject.subject_id)
        .where("is_deleted", false);

      const competenciesWithSub = await Promise.all(
        competencies.map(async (competency) => {
          const competencySub = await CompetencySub.query()
            .where("competency_id", competency.competency_id)
            .where("is_deleted", false);
          return {
            ...competency.toJSON(),
            competency_sub: competencySub,
          };
        })
      );

      // สร้างข้อมูลที่รวมทั้ง subjects และ competencies
      const subjectWithCompetency = {
        ...subject.toJSON(),
        competencies: competenciesWithSub,
      };

      return response.status(200).json({ data: subjectWithCompetency });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public async showByCurriculum({ params, response }: HttpContextContract) {
    try {
      // ดึงข้อมูล subjects
      const id: any = params.id;
      const subjects = await Subject.query()
        .preload("curriculums")
        .preload("subject_groups")
        .where("is_deleted", false)
        .where("curriculum_id", id)
        .orderBy("updatedAt", "desc");

      // ดึงข้อมูล competencies โดยเช็ค subject_id ของแต่ละ subject
      const subjectWithCompetency = await Promise.all(
        subjects.map(async (subject) => {
          const competencies = await Competency.query()
            .where("subject_id", subject.subject_id)
            .where("is_deleted", false);

          // เพิ่มการดึงข้อมูล competency_sub จาก CompetencySub
          const competenciesWithSub = await Promise.all(
            competencies.map(async (competency) => {
              const competencySub = await CompetencySub.query()
                .where("competency_id", competency.competency_id)
                .where("is_deleted", false);
              return {
                ...competency.toJSON(),
                competency_sub: competencySub,
              };
            })
          );

          return {
            ...subject.toJSON(),
            competencies: competenciesWithSub,
          };
        })
      );

      return response.status(200).json({ data: subjectWithCompetency });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const storeSchema = schema.create({
        curriculum_id: schema.number(),
        subject_group_id: schema.number.optional(),
        subject_code: schema.string({ trim: true }, [rules.maxLength(255)]),
        subject_name_th: schema.string({ trim: true }, [rules.maxLength(255)]),
        subject_name_en: schema.string({ trim: true }, [rules.maxLength(255)]),
        subject_credit: schema.number.optional(),
        subject_description: schema.string({ trim: true }, [
          rules.maxLength(255),
        ]),
      });

      const payload = await request.validate({ schema: storeSchema });
      const subject: Subject = await Subject.create(payload);
      return response.status(201).json({ data: subject, status: 201 });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const updateSchema = schema.create({
        curriculum_id: schema.number.optional(),
        subject_group_id: schema.number.nullable(),
        subject_code: schema.string({ trim: true }, [rules.maxLength(255)]),
        subject_name_th: schema.string({ trim: true }, [rules.maxLength(255)]),
        subject_name_en: schema.string({ trim: true }, [rules.maxLength(255)]),
        subject_credit: schema.number.optional(),
        subject_description: schema.string({ trim: true }, [
          rules.maxLength(255),
        ]),
      });

      const payload = await request.validate({ schema: updateSchema });

      if (payload.subject_group_id === null) {
        payload.subject_group_id = null;
      }

      const subject: any = await Subject.find(params.id);
      if (!subject) {
        return response
          .status(404)
          .json({ message: "Subject not found", status: 404 });
      } else {
        subject.merge(payload);
        await subject.save();
        return response.status(200).json({
          data: subject,
          status: 200,
          message: `Subject updated byId ${params.id} success`,
        });
      }
    } catch (error) {
      return response.status(400).json({
        message: "Incorrect or incomplete information",
        error: error,
        status: 400,
      });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const id: any = params.id;
      const subject: any = await Subject.find(id);
      if (!subject) {
        return response
          .status(404)
          .json({ message: "Subject not found", status: 404 });
      }

      if (subject.is_deleted) {
        return response.status(200).json({
          message: "Subject already deleted",
          status: 200,
        });
      }

      subject.merge({ is_deleted: true });
      await subject.save();
      return response.status(200).json({
        data: subject,
        status: 200,
        message: `Subject deleted byId ${id} success`,
      });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }
}
