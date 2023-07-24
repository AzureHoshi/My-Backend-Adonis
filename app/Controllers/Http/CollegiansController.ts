import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import Collegian from "App/Models/Collegian";

const collegianSchema = schema.create({
  collegian_group_id: schema.number(),
  collegian_code: schema.string({ trim: true }, [rules.maxLength(255)]),
  collegian_fname_th: schema.string({ trim: true }, [rules.maxLength(255)]),
  collegian_lname_th: schema.string({ trim: true }, [rules.maxLength(255)]),
  collegian_fname_en: schema.string({ trim: true }, [rules.maxLength(255)]),
  collegian_lname_en: schema.string({ trim: true }, [rules.maxLength(255)]),
  collegian_email: schema.string({ trim: true }, [rules.maxLength(255)]),
  collegian_tel: schema.string({ trim: true }, [rules.maxLength(255)]),
});
export default class CollegiansController {
  public async index({ response }: HttpContextContract) {
    const collegian = await Collegian.query()
      .preload("collegian_groups")
      .where("is_deleted", false)
      .orderBy("updated_at", "desc");
    return response.status(200).json({ data: collegian, status: 200 });
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate({ schema: collegianSchema });
      const collegian: Collegian = await Collegian.create(payload);
      return response.status(201).json({ data: collegian, status: 201 });
    } catch (error) {
      return response
        .status(400)
        .json({ error: "Incorrect or incomplete information", status: 400 });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const id = params.id;
      const payload = await request.validate({ schema: collegianSchema });
      const collegian: any = await Collegian.find(id);
      if (!collegian) {
        return response
          .status(404)
          .json({ message: "Collegian not found", status: 404 });
      } else {
        collegian.merge(payload);
        await collegian.save();
        return response.status(200).json({
          data: collegian,
          status: 200,
          message: `Collegian updated byId ${id} success`,
        });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ message: "incorrect or incomplete information", status: 400 });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const id = params.id;
      const collegian: any = await Collegian.find(id);
      if (!collegian) {
        return response
          .status(404)
          .json({ message: "Collegian not found", status: 404 });
      } else if (collegian.is_deleted) {
        return response
          .status(404)
          .json({ message: "Collegian already deleted", status: 404 });
      } else {
        collegian.is_deleted = true;
        await collegian.save();
        return response
          .status(200)
          .json({
            message: `Collegian deleted byId ${id} success`,
            status: 200,
          });
      }
    } catch (error) {
      return response
        .status(400)
        .json({ message: "incorrect or incomplete information", status: 400 });
    }
  }
}
