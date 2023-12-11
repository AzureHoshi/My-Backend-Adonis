import { BaseCommand } from "@adonisjs/core/build/standalone";

export default class SeedDatabase extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = "refresh:database";

  /**
   * Command description is displayed in the "help" output
   */
  public static description = "Refresh the database and seed";

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  };

  public async run() {
    this.logger.info("Migration started && Seed full database");
    await this.invoke(["migration:fresh"]);

    // Run db:seed
    await this.invoke(["db:seed", "-f", "database/seeders/TestSeeder"]);

    this.logger.info("Database refreshed and seeded successfully");
  }
}
