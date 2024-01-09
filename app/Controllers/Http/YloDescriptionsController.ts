import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import YloDescription from "App/Models/YloDescription";

export default class YloDescriptionsController {
  public async store({ request, response }: HttpContextContract) {
    const storeYloDescriptionSchema = schema.create({
      ylo_id: schema.number(),
      ylo_description: schema.string(),
    });

    try {
      const payload = await request.validate({
        schema: storeYloDescriptionSchema,
      });

      const yloDescription = await YloDescription.create(payload);

      return response.status(201).json({
        message: "YLO description created successfully",
        data: yloDescription,
      });
    } catch (error) {
      return response.status(400).json({
        message: "Something went wrong",
        error: error.messages,
      });
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const yloDescription = await YloDescription.findOrFail(params.id);

      if (!yloDescription) {
        return response.status(400).json({
          message: "YLO description not found",
          id: params.id,
        });
      } else if (yloDescription.is_deleted) {
        return response.status(400).json({
          message: "YLO description already deleted",
          id: params.id,
        });
      } else {
        yloDescription.is_deleted = true;
        await yloDescription.save();

        return response.status(200).json({
          message: "YLO description deleted successfully",
          data: yloDescription,
        });
      }
    } catch (error) {
      return response.status(400).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const updateYloDescriptionSchema = schema.create({
      ylo_id: schema.number(),
      ylo_description: schema.string(),
    });

    try {
      const payload = await request.validate({
        schema: updateYloDescriptionSchema,
      });

      const yloDescription = await YloDescription.findOrFail(params.id);

      if (!yloDescription) {
        return response.status(400).json({
          message: "YLO description not found",
          id: params.id,
        });
      } else if (yloDescription.is_deleted) {
        return response.status(400).json({
          message: "YLO description already deleted",
          id: params.id,
        });
      } else {
        yloDescription.ylo_id = payload.ylo_id;
        yloDescription.ylo_description = payload.ylo_description;
        await yloDescription.save();

        return response.status(200).json({
          message: "YLO description updated successfully",
          data: yloDescription,
        });
      }
    } catch (error) {
      return response.status(400).json({
        message: "Something went wrong",
        error: error.message,
      });
    }
  }
}
