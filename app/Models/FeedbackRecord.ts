import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";

export default class FeedbackRecord extends BaseModel {
  @column({ isPrimary: true })
  public feedback_record_id: number;

  @column()
  public collegian_code: string;

  @column()
  public feedback_record_answer: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
