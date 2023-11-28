import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    // ... (ตัวเลือก environment ที่คุณต้องการ)
    await new Seeder.default(this.client).run();
  }

  public async run() {
    await this.runSeeder(await import("./Sub/Faculty"));
  }
}
