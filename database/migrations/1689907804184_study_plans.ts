import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "study_plans";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("study_plan_id").primary().notNullable().unsigned();
      table
        .integer("curriculum_id")
        .notNullable()
        .unsigned()
        .references("curriculum_id")
        .inTable("curriculums");
      table.string("study_plan_name").notNullable();
      table.integer("study_plan_version").notNullable();
      table.integer("study_plan_total_credit").notNullable();
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
