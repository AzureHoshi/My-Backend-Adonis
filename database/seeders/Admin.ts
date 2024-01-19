import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Admin from "App/Models/Admin";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const adminData = [
      {
        user_id: 4,
        admin_first_name: "Historic",
        admin_last_name: "Vids",
        admin_code: "11111111111-1",
      },
    ];

    await Admin.createMany(adminData);
  }
}
