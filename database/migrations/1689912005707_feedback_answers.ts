import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "feedback_answers";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("feedback_answer_id").primary().unsigned();
      table
        .integer("feedback_id")
        .unsigned()
        .references("feedback_id")
        .inTable("feedbacks")
        .onDelete("CASCADE");
      table.string("feedback_answer_choice").notNullable();
      table.integer("feedback_answer_number").notNullable();
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
