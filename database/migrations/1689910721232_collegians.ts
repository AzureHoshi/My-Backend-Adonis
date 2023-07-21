import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "collegians";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("collegian_id").primary().unsigned();
      table
        .integer("collegian_group_id")
        .unsigned()
        .references("collegian_group_id")
        .inTable("collegian_groups")
        .onDelete("CASCADE");
      table.string("collegian_code").notNullable();
      table.string("collegian_fname_th").notNullable();
      table.string("collegian_lname_th").notNullable();
      table.string("collegian_fname_en").notNullable();
      table.string("collegian_lname_en").notNullable();
      table.string("collegian_email").notNullable();
      table.string("collegian_tel").notNullable();
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
