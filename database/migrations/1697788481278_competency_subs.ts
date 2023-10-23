import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "competency_subs";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("competency_sub_id");
      table
        .integer("competency_id")
        .unsigned()
        .references("competency_id")
        .inTable("competencies")
        .onDelete("CASCADE");
      table.string("competency_sub_name", 255).notNullable();
      table.string("competency_sub_description", 255);
      table.boolean("is_deleted").notNullable().defaultTo(false);

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
