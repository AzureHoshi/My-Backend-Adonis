import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "ylo_plos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .increments("ylo_plo_id")
        .primary()
        .notNullable()
        .comment("รหัสข้อมูลผลการเรียน");
      table
        .integer("ylo_id")
        .notNullable()
        .unsigned()
        .references("ylo_id")
        .inTable("ylos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("plo_id")
        .notNullable()
        .unsigned()
        .references("plo_id")
        .inTable("plos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      table.primary(["ylo_id", "plo_id"]);
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
