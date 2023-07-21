import { DateTime } from "luxon";
import { BaseModel, HasMany, column, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Curriculum from "./Curriculum";

export default class Faculty extends BaseModel {
  @column({ isPrimary: true })
  public faculty_id: number;

  @column()
  public faculty_name_th: string;

  @column()
  public faculty_name_en: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true, autoUpdate: false })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Curriculum)
  public curriculums: HasMany<typeof Curriculum>;
}
