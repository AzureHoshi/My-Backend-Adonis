import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "interest_answer_jobs";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("interest_answer_job_id");
      table
        .integer("interest_answer_id")
        .unsigned()
        .references("interest_answers.interest_answer_id")
        .onDelete("CASCADE");
      table
        .integer("job_position_id")
        .unsigned()
        .references("job_positions.job_position_id")
        .onDelete("CASCADE");
      table.integer("interest_answer_job_score");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.boolean("is_deleted").notNullable().defaultTo(false);
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
