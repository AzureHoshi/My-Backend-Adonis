import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Collegian from "./Collegian";
import Feedback from "./Feedback";
import FeedbackAnswer from "./FeedbackAnswer";

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

  @belongsTo(() => Collegian, {
    foreignKey: "collegian_id", // ระบุคีย์ตรีที่ถูกต้องใน Model Curriculum
  })
  public collegian: BelongsTo<typeof Collegian>;

  @belongsTo(() => Feedback, {
    foreignKey: "feedback_id", // ระบุคีย์ตรีที่ถูกต้องใน Model Curriculum
  })
  public feedback: BelongsTo<typeof Feedback>;

  @belongsTo(() => FeedbackAnswer, {
    foreignKey: "feedback_answer_id", // ระบุคีย์ตรีที่ถูกต้องใน Model Curriculum
  })
  public feedbackAnswer: BelongsTo<typeof FeedbackAnswer>;
}
