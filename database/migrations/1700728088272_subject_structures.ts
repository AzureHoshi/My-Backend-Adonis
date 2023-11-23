import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "subject_structures";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("subject_structure_id").primary().unique().notNullable();
      table
        .integer("subject_category_id")
        .unsigned()
        .references("subject_category_id")
        .inTable("subject_categories")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("subject_type_id")
        .unsigned()
        .references("subject_type_id")
        .inTable("subject_types")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("subject_group_id")
        .unsigned()
        .references("subject_group_id")
        .inTable("subject_groups")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("subject_id")
        .unsigned()
        .references("subject_id")
        .inTable("subjects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

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
