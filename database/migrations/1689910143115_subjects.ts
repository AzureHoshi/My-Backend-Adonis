import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "subjects";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("subject_id").primary().unsigned();
      table
        .integer("curriculum_id")
        .unsigned()
        .references("curriculums.curriculum_id")
        .onDelete("CASCADE");
      table
        .integer("subject_group_id")
        .unsigned()
        .nullable()
        .references("subject_groups.subject_group_id")
        .onDelete("CASCADE");
      table.string("subject_code").notNullable();
      table.string("subject_name_th").notNullable();
      table.string("subject_name_en").notNullable();
      table.integer("subject_credit").notNullable();
      table.text("subject_description");
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
