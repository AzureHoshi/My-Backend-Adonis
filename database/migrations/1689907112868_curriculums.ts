import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "curriculums";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("curriculum_id").primary().notNullable().unsigned();
      table
        .integer("faculty_id")
        .notNullable()
        .unsigned()
        .references("faculty_id")
        .inTable("faculties");
      table
        .integer("collegian_group_id")
        .notNullable()
        .unsigned()
        .references("collegian_group_id")
        .inTable("collegian_groups");
      table.string("curriculum_name_th").notNullable();
      table.string("curriculum_name_en").notNullable();
      table.string("curriculum_short_name_th");
      table.string("curriculum_short_name_en");
      table.integer("curriculum_year").notNullable();
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
