import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Faculty from "App/Models/Faculty";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Faculty.createMany([
      {
        email: "virk@adonisjs.com",
        password: "secret",
      },
      {
        email: "romain@adonisjs.com",
        password: "supersecret",
      },
    ]);
  }
}
