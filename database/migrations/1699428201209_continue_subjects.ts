import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "continue_subjects";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("continue_subject_id").primary().unique().notNullable();
      table
        .integer("parent_id")
        .unsigned()
        .references("subjects.subject_id")
        .onDelete("CASCADE");
      table
        .integer("subject_id")
        .unsigned()
        .references("subjects.subject_id")
        .onDelete("CASCADE");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.boolean("is_deleted").defaultTo(false);
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
