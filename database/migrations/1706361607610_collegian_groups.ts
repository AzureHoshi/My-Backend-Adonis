import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "collegian_groups";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("collegian_group_id").primary().unsigned();
      table
        .integer("curriculum_id")
        .unsigned()
        .nullable()
        .references("curriculum_id")
        .inTable("curriculums")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .comment("รหัสหลักสูตร");
      table.string("collegian_group_name_th").notNullable();
      table.string("collegian_group_name_en").notNullable();
      table.string("collegian_group_short_name_th");
      table.string("collegian_group_short_name_en");
      table.boolean("is_deleted").notNullable().defaultTo(false);

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
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
