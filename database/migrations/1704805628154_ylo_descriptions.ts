import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "ylo_descriptions";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("ylo_des_id").primary();
      table
        .integer("ylo_id")
        .notNullable()
        .unsigned()
        .references("ylo_id")
        .inTable("ylos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("ylo_description").notNullable().comment("รายละเอียด YLO");

      table
        .boolean("is_deleted")
        .notNullable()
        .defaultTo(false)
        .comment("ลบแล้วหรือยัง");
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
