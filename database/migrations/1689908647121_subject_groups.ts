import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "subject_groups";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("subject_group_id").primary().unsigned();
      table
        .integer("subject_type_id")
        .unsigned()
        .nullable()
        .references("subject_types.subject_type_id")
        .onDelete("CASCADE");
      table.string("subject_group_name").notNullable();
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
