import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "job_competencies";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("job_com_id").primary().notNullable();
      table
        .integer("job_position_id")
        .unsigned()
        .references("job_positions.job_position_id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable()
        .comment("FK");
      table.text("job_com_description").notNullable();

      table
        .boolean("is_deleted")
        .defaultTo(false)
        .notNullable()
        .comment("สถานะการลบข้อมูล");
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
