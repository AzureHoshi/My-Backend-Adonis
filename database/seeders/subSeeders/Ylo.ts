import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Ylo from "App/Models/Ylo";
import Curriculum from "./Curriculum";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const yearLosData = [
      {
        curriculum_id: 2,
        ylo_year: 1,
      },
      {
        curriculum_id: 2,
        ylo_year: 2,
      },
      {
        curriculum_id: 2,
        ylo_year: 3,
      },
      {
        curriculum_id: 2,
        ylo_year: 4,
      },
    ];

    await Ylo.createMany(yearLosData);
  }
}
