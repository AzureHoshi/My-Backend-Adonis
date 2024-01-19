import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import Hash from "@ioc:Adonis/Core/Hash";

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

      const user = await User.query()
        .where("email", email)
        .where("is_deleted", false)
        .firstOrFail();

      if (!user) {
        return response.badRequest("User not found");
      } else if (user.is_deleted) {
        return response.badRequest("User is deleted");
      }

      if (!(await Hash.verify(user.password, password))) {
        return response.unauthorized("Invalid credentials");
      }

      const token = await auth.use("api").generate(user, {
        expiresIn: "1 hour",
      });

      if (user.is_deleted) {
        return response.badRequest("User is deleted");
      } else if (user.role === 0) {
        const userWithCollegian = await User.query()
          .where("user_id", user.user_id)
          .preload("collegian", (query) => {
            query.select(["col_first_name", "col_last_name", "col_code"]);
          })
          .firstOrFail();

        return response.ok({
          token,
          user: userWithCollegian.collegian,
          role: user.role,
        });
      } else if (user.role === 1) {
        const userWithAdmin = await User.query()
          .where("user_id", user.user_id)
          .preload("admin", (query) => {
            query.select(["admin_first_name", "admin_last_name", "admin_code"]);
          })
          .firstOrFail();

        return response.ok({
          token,
          user: userWithAdmin.admin,
          role: user.role,
        });
      }
    } catch (error) {
      console.log("error", error);

      return response.badRequest(error);
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
        error: error,
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

  public async getUserData({ auth, response }: HttpContextContract) {
    try {
      const user = await auth.use("api").authenticate();

      if (user.role === 0) {
        const userData = await User.query()
          .where("user_id", user.user_id)
          .preload("collegian", (query) => {
            query.preload("curriculumData");
          })
          .firstOrFail();

        return response.ok({ data: userData.collegian });
      } else if (user.role === 1) {
        const userData = await User.query()
          .where("user_id", user.user_id)
          .preload("admin")
          .firstOrFail();

        return response.ok({ data: userData.admin });
      } else {
        return response.badRequest({ message: "User not found" });
      }
    } catch (error) {
      return response.badRequest(error);
    }
  }
}
