import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "feedback_records";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("feedback_record_id");
      table
        .integer("feedback_id")
        .unsigned()
        .references("feedbacks.feedback_id");
      table
        .integer("collegian_id")
        .unsigned()
        .references("collegians.collegian_id");
      table.string("feedback_record_answer", 255).notNullable();

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
