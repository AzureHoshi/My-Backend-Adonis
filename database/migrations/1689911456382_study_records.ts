import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "study_records";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("study_record_id").primary().unsigned();
      table
        .integer("collegian_id")
        .notNullable()
        .unsigned()
        .references("collegian_id")
        .inTable("collegians")
        .onDelete("CASCADE");
      table
        .integer("subject_id")
        .notNullable()
        .unsigned()
        .references("subject_id")
        .inTable("subjects")
        .onDelete("CASCADE");
      table.integer("study_record_semester").notNullable();
      table.integer("study_record_year").notNullable();
      table.string("study_record_grade").notNullable();
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
