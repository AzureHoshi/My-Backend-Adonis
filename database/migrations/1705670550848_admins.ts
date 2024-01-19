import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "admins";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("admin_id").primary();
      table
        .integer("user_id")
        .unsigned()
        .references("users.user_id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .comment("user_id from users table");
      table.string("admin_first_name", 255).comment("ชื่อ");
      table.string("admin_last_name", 255).comment("นามสกุล");
      table.string("admin_code", 13).comment("รหัส");
      table.boolean("is_deleted").defaultTo(false);

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
