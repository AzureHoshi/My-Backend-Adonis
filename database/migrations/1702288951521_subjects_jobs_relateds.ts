import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "subjects_jobs_relateds";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("subjects_jobs_related_id");
      table
        .integer("subject_id")
        .unsigned()
        .references("subjects.subject_id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("job_position_id")
        .unsigned()
        .references("job_positions.job_position_id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.boolean("is_deleted").defaultTo(false);

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
