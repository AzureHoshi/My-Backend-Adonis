import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "interest_answers";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("interest_answer_id").primary().unsigned();
      table
        .integer("interest_question_id")
        .unsigned()
        .references("interest_question_id")
        .inTable("interest_questions")
        .onDelete("CASCADE");
      table.string("interest_answer_title");
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
