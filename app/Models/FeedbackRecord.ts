import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Feedback from "./Feedback";
import Collegian from "./Collegian";

export default class FeedbackRecord extends BaseModel {
  @column({ isPrimary: true })
  public feedback_record_id: number;

  @column()
  public feedback_id: number;

  @column()
  public collegian_id: number;

  @column()
  public feedback_answer: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Feedback)
  public feedback: BelongsTo<typeof Feedback>;

  @belongsTo(() => Collegian)
  public collegian: BelongsTo<typeof Collegian>;
}
