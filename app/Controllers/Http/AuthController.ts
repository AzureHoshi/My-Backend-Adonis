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

      console.log("user", user);

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
    await auth.use("api").revoke();

    return response.noContent();
  }

  public async register({ request, response }: HttpContextContract) {
    const registerSchema = schema.create({
      email: schema.string({}, [
        rules.email(),
        rules.unique({ table: "users", column: "email" }),
      ]),
      password: schema.string({}, [rules.minLength(8)]),
    });

    try {
      const { email, password } = await request.validate({
        schema: registerSchema,
      });

      const user = await User.create({ email, password });

      return response.json({ user });
    } catch (error) {
      return response.badRequest(error.messages);
    }
  }
}
