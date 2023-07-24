import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Feedback from "./Feedback";

export default class FeedbackAnswer extends BaseModel {
  @column({ isPrimary: true })
  public feedback_answer_id: number;

  @column()
  public feedback_id: number;

  @column()
  public feedback_answer_choice: string;

  @column()
  public feedback_answer_number: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Feedback, {
    foreignKey: "feedback_id", // ระบุคีย์ตรีที่ถูกต้องใน Model Curriculum
  })
  public feedback: BelongsTo<typeof Feedback>;
}
