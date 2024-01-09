import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Ylo from "App/Models/Ylo";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const yearLosData = [
      {
        ylo_year: 1,
      },
      {
        ylo_year: 2,
      },
      {
        ylo_year: 3,
      },
      {
        ylo_year: 4,
      },
    ];

    await Ylo.createMany(yearLosData);
  }
}
