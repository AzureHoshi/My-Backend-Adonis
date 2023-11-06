import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "curriculum_structures";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .increments("curriculum_structure_id")
        .primary()
        .unique()
        .notNullable();
      table
        .integer("curriculum_id")
        .unsigned()
        .references("curriculums.curriculum_id")
        .onDelete("CASCADE");
      table
        .integer("subject_group_id")
        .unsigned()
        .references("subject_groups.subject_group_id")
        .onDelete("CASCADE");
      table.integer("credit_total").notNullable();

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
