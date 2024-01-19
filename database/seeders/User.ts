import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: "user@example.com",
        password: "password",
        role: 0,
      },
      { email: "user2@example.com", password: "password", role: 0 },
      { email: "user3@example.com", password: "password", role: 0 },
      { email: "admin@example.com", password: "password", role: 1 },
    ]);
  }
}
