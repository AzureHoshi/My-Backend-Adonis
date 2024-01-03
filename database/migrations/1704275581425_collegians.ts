import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "collegians";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .increments("col_id")
        .primary()
        .unique()
        .notNullable()
        .comment("รหัสนักศึกษา");
      table.enum("prefix", ["นาย", "นางสาว", "นาง"]).comment("คำนำหน้า");
      table.string("col_first_name", 100).comment("ชื่อ");
      table.string("col_last_name", 100).comment("นามสกุล");
      table.string("col_code", 13).comment("รหัสนักศึกษา");
      table.string("col_email", 100).comment("อีเมล");
      table.string("col_status", 100).comment("สถานะนักศึกษา");
      table.string("curriculum", 100).comment("หลักสูตร");
      table.string("section", 100).comment("กลุ่ม");
      table.date("col_birthday").comment("วันเกิด");
      table.boolean("is_deleted").defaultTo(0).comment("สถานะการลบ");

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
