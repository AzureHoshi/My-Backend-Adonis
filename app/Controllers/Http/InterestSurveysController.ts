import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import InterestSurvey from "App/Models/InterestSurvey";

const interestSurveySchema = schema.create({
  curriculum_id: schema.number(),
  interest_survey_version: schema.number(),
});
export default class InterestSurveysController {
  public async index({ response }: HttpContextContract) {
    const interestSurveys = await InterestSurvey.query()
      .preload("curriculum")
      .where("interest_surveys.is_deleted", false)
      .orderBy("interest_surveys.updated_at", "desc");
    return response.status(200).json({ data: interestSurveys, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: interestSurveySchema });
      const curriculumId = payload.curriculum_id;

      // ตรวจสอบว่ามี curriculum_id ในฐานข้อมูลหรือไม่
      const existingInterestSurvey = await InterestSurvey.query().where(
        "curriculum_id",
        curriculumId
      );

      // asd
      console.log(existingInterestSurvey);

      if (existingInterestSurvey && existingInterestSurvey.length > 0) {
        // มี curriculum_id ในฐานข้อมูลอยู่แล้ว
        // กำหนด is_deleted เป็น 1 แล้วค่อยเพิ่ม curriculum_id ตัวใหม่
        await InterestSurvey.query()
          .where("curriculum_id", curriculumId)
          .update({ is_deleted: true });

        // สร้าง row ใหม่
        const newInterestSurvey = await InterestSurvey.create(
          payload
          // ข้อมูลอื่น ๆ ที่คุณต้องการเพิ่มใน row ใหม่
        );

        return response.status(201).json({
          data: newInterestSurvey,
          status: 201,
          message: `Interest survey created successfully && updated version`,
        });
      } else {
        // ไม่มี curriculum_id ในฐานข้อมูล
        // สร้าง row ใหม่โดยให้ is_deleted เป็น 0
        const newInterestSurvey = await InterestSurvey.create(
          payload
          // ข้อมูลอื่น ๆ ที่คุณต้องการเพิ่มใน row ใหม่
        );

        return response.status(201).json({
          data: newInterestSurvey,
          status: 201,
          message: `Interest survey created successfully`,
        });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const id = params.id;
      const interestSurvey: any = await InterestSurvey.find(id);
      if (!interestSurvey) {
        return response
          .status(404)
          .json({ message: "InterestSurvey not found", status: 404 });
      } else {
        interestSurvey.merge({ is_deleted: true });
        await interestSurvey.save();
        return response.status(200).json({
          data: interestSurvey,
          status: 200,
          message: `InterestSurvey deleted byId ${id} success`,
        });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Incorrect or incomplete information", status: 400 });
    }
  }
}
