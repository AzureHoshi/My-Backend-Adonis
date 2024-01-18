import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Curriculum from "./Curriculum";

export default class Collegian extends BaseModel {
  @column({ isPrimary: true })
  public col_id: number;

  @column()
  public user_id: number;

  @column()
  public prefix: string;

  @column()
  public col_first_name: string;

  @column()
  public col_last_name: string;

  @column()
  public col_code: string;

  @column()
  public col_email: string;

  @column()
  public col_status: string;

  @column()
  public curriculum: string;

  @column()
  public curriculum_id: number;

  @column()
  public section: string;

  @column.date() // Assuming you want a DATE type without time
  public col_birthday: DateTime;

  @column()
  public password: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Curriculum, {
    foreignKey: "curriculum_id",
    localKey: "curriculum_id",
  })
  public curriculumData: BelongsTo<typeof Curriculum>;
}
