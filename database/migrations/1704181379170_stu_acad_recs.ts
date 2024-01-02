import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "stu_acad_recs";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .increments("stu_acad_rec_id")
        .primary()
        .unique()
        .notNullable()
        .comment("รหัสข้อมูลแผนการศึกษานักศึกษา");
      table.string("collegian_code", 13).comment("รหัสนักศึกษา");
      table
        .integer("subject_id")
        .unsigned()
        .references("subjects.subject_id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .comment("รหัสวิชา");
      table.integer("stu_acad_rec_year").comment("ปีการศึกษา");
      table.integer("stu_acad_rec_semester").comment("ภาคการศึกษา");
      table.string("stu_acad_rec_grade", 2).comment("เกรด");
      table.boolean("stu_acad_rec_elective").comment("เลือกเอง");

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
