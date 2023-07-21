import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Collegian from "./Collegian";
import Feedback from "./Feedback";

export default class CollegianFeedback extends BaseModel {
  @column({ isPrimary: true })
  public collegian_feedback_id: number;

  @column()
  public collegian_id: number;

  @column()
  public feedback_id: number;

  @column()
  public feedback_answer_id: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Collegian)
  public collegians: BelongsTo<typeof Collegian>;

  @belongsTo(() => Feedback)
  public feedbacks: BelongsTo<typeof Feedback>;
}
