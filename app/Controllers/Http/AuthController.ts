import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import Hash from "@ioc:Adonis/Core/Hash";
import Env from "@ioc:Adonis/Core/Env";

import User from "App/Models/User";

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const loginSchema = schema.create({
      email: schema.string({}, [rules.email()]),
      password: schema.string({}, [rules.minLength(8)]),
    });

    try {
      const { email, password } = await request.validate({
        schema: loginSchema,
      });

      console.log("email", email);
      console.log("password", password);

      const user = await User.query().where("email", email).firstOrFail();

      if (!(await Hash.verify(user.password, password))) {
        return response.unauthorized("Invalid credentials");
      }

      const token = await auth.use("api").generate(user, {
        expiresIn: "1 days",
      });

      response.cookie("token", token.token, {
        httpOnly: true,
        sameSite: "strict",
        secure: Env.get("NODE_ENV") === "production", // ควรเป็น `true` ใน Production
      });

      return response.json({ token: token.toJSON() });
    } catch (error) {
      return response.badRequest(error.messages);
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    try {
      const user = auth.user; // เพิ่มบรรทัดนี้เพื่อรับข้อมูลผู้ใช้งานที่ทำการ logout
      await auth.use("api").revoke();

      return response.ok({ revoked: true, user: user }); // เพิ่มข้อมูลผู้ใช้งานในการตอบกลับ
    } catch (error) {
      return response.badRequest(error.messages);
    }
  }

  public async checkLogin({ auth, response }: HttpContextContract) {
    try {
      // Assuming your user model is called 'User'
      const user = await auth.use("api").authenticate();

      if (user) {
        return response.ok({ loggedIn: true, user });
      } else {
        return response.ok({ loggedIn: false });
      }
    } catch (error) {
      return response.badRequest(error.message);
    }
  }

  public async show({ auth, response }: HttpContextContract) {
    const user = auth.use("api").user;

    return response.ok({ user });
  }
}
