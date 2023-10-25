import { DateTime } from "luxon";
import { BaseModel, HasMany, column, hasMany } from "@ioc:Adonis/Lucid/Orm";

export default class Feedback extends BaseModel {
  @column({ isPrimary: true })
  public feedback_id: number;

  @column()
  public feedback_question: string;

  @column()
  public feedback_type: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
