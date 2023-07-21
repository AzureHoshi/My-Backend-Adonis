import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "studyplan_records";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("studyplan_record_id").primary().unsigned();
      table
        .integer("study_plan_id")
        .unsigned()
        .references("study_plan_id")
        .inTable("study_plans")
        .onDelete("CASCADE");
      table
        .integer("subject_id")
        .unsigned()
        .references("subject_id")
        .inTable("subjects")
        .onDelete("CASCADE");
      table.integer("studyplan_record_semester").notNullable();
      table.integer("studyplan_record_year").notNullable();
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
