import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import CollegianGroup from "App/Models/CollegianGroup";

const collegianGroupSchema = schema.create({
  collegian_group_name_th: schema.string([rules.maxLength(255)]),
  collegian_group_name_en: schema.string([rules.maxLength(255)]),
  collegian_group_short_name_th: schema.string.optional({ trim: true }, [
    rules.maxLength(255),
  ]),
  collegian_group_short_name_en: schema.string.optional({ trim: true }, [
    rules.maxLength(255),
  ]),
});
export default class CollegianGroupsController {
  public async index({ response }: HttpContextContract) {
    const collegianGroups = await CollegianGroup.query()
      .where("is_deleted", 0)
      .orderBy("updatedAt", "desc");
    return response.status(200).json({ data: collegianGroups, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: collegianGroupSchema });
      const collegianGroup: CollegianGroup = await CollegianGroup.create(
        payload
      );
      return response.status(201).json({ data: collegianGroup, status: 201 });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  // ? สำหรับ show ใช้ได้เฉพาะ id ที่เป็น integer เท่านั้น
  // public async show({ params, response }: HttpContextContract) {}

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const id = params.id;
      const payload = await request.validate({ schema: collegianGroupSchema });
      const collegianGroup: any = await CollegianGroup.find(id);
      if (!collegianGroup) {
        return response
          .status(404)
          .json({ message: "CollegianGroup not found", status: 404 });
      }
      collegianGroup.merge(payload);
      await collegianGroup.save();
      return response.status(200).json({
        data: collegianGroup,
        status: 200,
        message: `CollegianGroup updated byId ${id} success`,
      });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const id = params.id;
    const collegianGroup: any = await CollegianGroup.find(id);
    if (!collegianGroup) {
      return response
        .status(404)
        .json({ message: "CollegianGroup not found", status: 404 });
    } else if (collegianGroup.is_deleted === 1) {
      return response
        .status(400)
        .json({ message: "CollegianGroup already deleted", status: 400 });
    } else {
      collegianGroup.is_deleted = 1;
      await collegianGroup.save();
      return response.status(200).json({
        message: `CollegianGroup deleted byId ${id} success`,
        status: 200,
      });
    }
  }
}
