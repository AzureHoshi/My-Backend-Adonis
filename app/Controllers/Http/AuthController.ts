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
        expiresIn: "1 hour",
      });

      return response.json({ token: token.toJSON() });
    } catch (error) {
      return response.badRequest(error.messages);
    }
  }

  public async logout({ auth, request, response }: HttpContextContract) {
    try {
      // Retrieve the Authorization header from the request
      const authorizationHeader = request.header("Authorization");

      // Check if the Authorization header is present
      if (!authorizationHeader) {
        return response.badRequest("Missing Authorization header");
      }

      // Extract the token from the Authorization header
      const [, token] = authorizationHeader.split(" ");

      console.log("Received token:", token);

      // Revoke the user's token using the extracted token
      await auth.use("api").revoke();

      console.log("Token revoked");

      // Clear the user's authentication state
      await auth.use("api").logout();

      console.log("User logged out");

      // Remove the token cookie from the response

      console.log("Token cookie removed");

      return response.ok({ message: "Logout successful" });
    } catch (error) {
      console.error("Logout error:", error);

      return response.badRequest({
        message: "Logout failed",
        error: error.messages || "Unknown error",
      });
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

  public async getUserData({ auth, response }: HttpContextContract) {
    try {
      const user = await auth.use("api").authenticate();

      // preloaded user from collegians table
      const userData = await User.query()
        .where("user_id", user.user_id)
        .preload("collegian")
        .firstOrFail();

      if (user) {
        return response.ok({ data: userData.collegian });
      } else {
        return response.badRequest({ message: "User not found" });
      }
    } catch (error) {
      return response.badRequest(error.message);
    }
  }
}
