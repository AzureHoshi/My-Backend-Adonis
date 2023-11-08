import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ContinueSubject from "App/Models/ContinueSubject";

export default class ContinueSubjectsController {
  public async index({ response }: HttpContextContract) {
    try {
      const parentData = await ContinueSubject.query()
        .where("is_deleted", false)
        .whereNull("parent_id");

      const parentDataWithChild = await Promise.all(
        parentData.map(async (parent) => {
          function getChildData(parentId: number) {
            return ContinueSubject.query()
              .where("is_deleted", false)
              .where("parent_id", parentId);
          }
        })
      );

      return response.status(200).json({
        data: parentDataWithChild,
        status: 200,
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Internal Server Error", status: 500 });
    }
  }
}
