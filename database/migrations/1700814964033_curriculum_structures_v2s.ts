import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "curriculum_structures_v2";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .increments("curriculum_structures_v2_id")
        .primary()
        .unique()
        .notNullable();
      table
        .integer("curriculum_id")
        .unsigned()
        .references("curriculum_id")
        .inTable("curriculums")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("subject_category_id")
        .unsigned()
        .nullable()
        .defaultTo(null)
        .references("subject_category_id")
        .inTable("subject_categories")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("subject_type_id")
        .unsigned()
        .nullable()
        .defaultTo(null)
        .references("subject_type_id")
        .inTable("subject_types")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("subject_group_id")
        .unsigned()
        .nullable()
        .defaultTo(null)
        .references("subject_group_id")
        .inTable("subject_groups")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.integer("csv2_credit_total").nullable().defaultTo(null);

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
