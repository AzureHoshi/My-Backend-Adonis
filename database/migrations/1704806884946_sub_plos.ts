import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "sub_plos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("sub_plo_id").primary();
      table
        .integer("plo_id")
        .notNullable()
        .unsigned()
        .references("plo_id")
        .inTable("plos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .comment("FK");

      table.string("sub_plo_title").notNullable().comment("ชื่อ Sub PLO");
      table
        .text("sub_plo_description")
        .notNullable()
        .comment("รายละเอียด Sub PLO");

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
