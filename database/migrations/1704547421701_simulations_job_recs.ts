import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "simulations_job_recs";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("sim_job_rec_id");
      table.string("collegian_code", 13).comment("รหัสนักศึกษา");
      table
        .integer("job_position_id")
        .unsigned()
        .notNullable()
        .references("job_position_id")
        .inTable("job_positions")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .comment("รหัสตำแหน่งงาน");

      table.boolean("is_deleted").defaultTo(0).comment("สถานะการลบ");
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table
        .timestamp("created_at", { useTz: true })
        .notNullable()
        .defaultTo(this.raw("CURRENT_TIMESTAMP"));
      table
        .timestamp("updated_at", { useTz: true })
        .notNullable()
        .defaultTo(this.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
