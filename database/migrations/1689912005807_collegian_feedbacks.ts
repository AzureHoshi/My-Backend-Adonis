import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "collegian_feedbacks";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("collegian_feedback_id").primary().unsigned();
      table
        .integer("collegian_id")
        .unsigned()
        .references("collegian_id")
        .inTable("collegians")
        .onDelete("CASCADE");
      table
        .integer("feedback_id")
        .unsigned()
        .references("feedback_id")
        .inTable("feedbacks")
        .onDelete("CASCADE");
      table
        .integer("feedback_answer_id")
        .unsigned()
        .references("feedback_answer_id")
        .inTable("feedback_answers")
        .onDelete("CASCADE");
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
