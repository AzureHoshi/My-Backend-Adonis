import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "interest_results";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("interest_result_id");
      table.string("collegian_code", 13).notNullable();
      table
        .integer("job_position_id")
        .unsigned()
        .references("job_position_id")
        .inTable("job_positions")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.integer("interest_result_percent").notNullable();

      table.boolean("is_deleted").notNullable().defaultTo(false);
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
