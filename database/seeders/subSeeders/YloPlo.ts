import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import YloPlo from "App/Models/YloPlo";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const yearLOAndPLOsData = [
      {
        ylo_id: 1,
        plo_id: 1,
      },
      {
        ylo_id: 1,
        plo_id: 2,
      },
      {
        ylo_id: 2,
        plo_id: 2,
      },
      {
        ylo_id: 2,
        plo_id: 3,
      },
      {
        ylo_id: 3,
        plo_id: 2,
      },
      {
        ylo_id: 3,
        plo_id: 3,
      },
      {
        ylo_id: 3,
        plo_id: 4,
      },
      {
        ylo_id: 4,
        plo_id: 3,
      },
      {
        ylo_id: 4,
        plo_id: 4,
      },
      {
        ylo_id: 4,
        plo_id: 5,
      },
    ];

    await YloPlo.createMany(yearLOAndPLOsData);
  }
}
