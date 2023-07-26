import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "test_upload_files";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("file_name", 255).notNullable();
      table.string("file_path", 255).notNullable();
      table.string("file_type", 255).notNullable();
      table.integer("file_size").notNullable();

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
