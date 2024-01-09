import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "sub_plo_mappings";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("sub_plo_map_id").primary();
      table
        .integer("sub_plo_id")
        .notNullable()
        .unsigned()
        .references("sub_plo_id")
        .inTable("sub_plos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .comment("FK");
      table
        .integer("student_id")
        .notNullable()
        .unsigned()
        .references("student_id")
        .inTable("students")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .comment("FK");

      table.boolean("is_deleted").defaultTo(false).comment("ลบแล้วหรือยัง");
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
