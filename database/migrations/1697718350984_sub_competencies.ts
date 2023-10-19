import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "sub_competencies";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("sub_competencies_id");
      table
        .integer("competencie_id")
        .unsigned()
        .references("competencie_id")
        .inTable("competencies")
        .onDelete("CASCADE");
      table.string("sub_competencies_name", 255).notNullable();
      table.string("sub_competencies_description", 255);

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
