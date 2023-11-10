import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ContinueSubject from "App/Models/ContinueSubject";

export default class ContinueSubjectsController {
  public async index({ response }: HttpContextContract) {
    try {
      const getTreeStructure = async (parentData) => {
        const childData = await ContinueSubject.query()
          .where("is_deleted", false)
          .where("parent_id", parentData.subject_id)
          .preload("child_subjects"); // ควร preload "child_subjects" ไม่ใช่ "child_subject"

        parentData.child_subjects = childData.map((child) => {
          return getTreeStructure(child);
        });

        return parentData.child_subjects;
      };

      const parentData = await ContinueSubject.query()
        .where("is_deleted", false)
        .whereNull("parent_id")
        .preload("child_subjects"); // ควร preload "child_subjects" ไม่ใช่ "child_subject"

      const treeData = parentData.map((root) => {
        return getTreeStructure(root);
      });

      return response.status(200).json({
        data: treeData,
        status: 200,
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Internal Server Error", status: 500 });
    }
  }
}
