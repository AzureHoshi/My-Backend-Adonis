import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import ContinueSubject from "App/Models/ContinueSubject";

const tree = async (data: any, level: number) => {
  const result = await Promise.all(
    data.map(async (item: any) => {
      const children = await ContinueSubject.query()
        .preload("subjects")
        .where("parent_id", item.subject_id)
        .where("is_deleted", false);

      if (children.length > 0) {
        return {
          ...item.$attributes,
          level: level,
          subjects: item.subjects,
          children: await tree(children, level + 1),
        };
      } else {
        return {
          ...item.$attributes,
          level: level,
          subjects: item.subjects,
        };
      }
    })
  );

  return result;
};

interface ResultStructure {
  continue_subject_id: number;
  parent_id: number | null;
  subject_id: number;
  is_deleted: number;
  createdAt: string;
  updatedAt: string;
  level: number;
  subjects: any[];
  children?: ResultStructure[];
}

const getByContinueSubjectId = (
  data: any[],
  id: number
): ResultStructure | null => {
  let result: ResultStructure | null = null;

  data.forEach((item: any) => {
    if (item.continue_subject_id === id) {
      result = {
        continue_subject_id: item.continue_subject_id || 0,
        parent_id: item.parent_id || null,
        subject_id: item.subject_id || 0,
        is_deleted: item.is_deleted || 0,
        createdAt: item.createdAt || "",
        updatedAt: item.updatedAt || "",
        level: item.level || 0,
        subjects: item.subjects || [],
        children: [], // กำหนดให้ children เป็น Array เปล่าเพื่อให้เข้ากับ interface
      };

      if (item.children) {
        result.children = item.children.map((child: any) =>
          getByContinueSubjectId([child], child.continue_subject_id)
        );
      }
    } else if (item.children) {
      const childrenResult = getByContinueSubjectId(item.children, id);
      if (childrenResult) {
        result = {
          ...item,
          children: [childrenResult],
        };
      }
    }
  });

  return result;
};

export default class ContinueSubjectsController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await ContinueSubject.query()
        .preload("subjects")
        .whereNull("parent_id")
        .where("is_deleted", false);

      const result = await tree(data, 1);

      return response.status(200).json({ data: result, status: 200 });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  async show({ params, response }: HttpContextContract) {
    try {
      // Retrieve root elements
      const dataParentNull = await ContinueSubject.query()
        .preload("subjects")
        .whereNull("parent_id")
        .where("is_deleted", false);

      // Construct the tree
      const dataTree = await tree(dataParentNull, 1);

      // Find the specific continue_subject_id
      const result = getByContinueSubjectId(dataTree, parseInt(params.id, 10));

      if (!result) {
        return response
          .status(404)
          .json({ message: "ContinueSubject not found", status: 404 });
      } else {
        return response.status(200).json({ data: result, status: 200 });
      }
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  async showBySubjectId({ params, response }: HttpContextContract) {
    try {
      const data = await ContinueSubject.query()
        .preload("subjects")
        .where("subject_id", params.id)
        .where("is_deleted", false);

      const dataWithChildren = await Promise.all(
        data.map(async (item) => {
          const children = await ContinueSubject.query()
            .preload("subjects")
            .where("parent_id", item.subject_id)
            .where("is_deleted", false);

          if (children.length > 0) {
            return {
              ...item.$attributes,
              subjects: item.subjects,
              children: children,
            };
          } else {
            return {
              ...item.$attributes,
              subjects: item.subjects,
              children: [],
            };
          }
        })
      );

      return response.status(200).json({ data: dataWithChildren, status: 200 });
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }

  async store({ request, response }: HttpContextContract) {
    const storeSchema = schema.create({
      parent_id: schema.number.optional(),
      subject_id: schema.number(),
    });

    try {
      const payload = await request.validate({ schema: storeSchema });

      const continueSubject = await ContinueSubject.create(payload);

      return response.status(201).json({ data: continueSubject, status: 201 });
    } catch (error) {
      if (error.messages) {
        // Handle validation errors
        return response.status(400).json({
          message: "Validation Failed",
          status: 400,
          errors: error.messages,
        });
      } else {
        // Handle other errors
        return response.status(500).json({
          message: "Internal Server Error",
          status: 500,
          error: error.message,
        });
      }
    }
  }

  async destroy({ params, response }: HttpContextContract) {
    console.log(params.id);
    try {
      const continueSubject: any = await ContinueSubject.find(params.id);

      console.log(continueSubject);

      if (!continueSubject) {
        return response
          .status(404)
          .json({ message: "ContinueSubject not found", status: 404 });
      } else if (continueSubject.is_deleted) {
        return response.status(400).json({
          message: "ContinueSubject already deleted",
          status: 400,
        });
      } else {
        await continueSubject.merge({ is_deleted: true }).save();
        return response
          .status(200)
          .json({ message: "ContinueSubject deleted", status: 200 });
      }
    } catch (error) {
      return response.status(500).json({ message: "Internal Server Error" });
    }
  }
}
