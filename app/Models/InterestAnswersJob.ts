import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import InterestAnswer from "./InterestAnswer";
import JobPosition from "./JobPosition";

export default class InterestAnswerJob extends BaseModel {
  @column({ isPrimary: true })
  public interest_answers_job_id: number;

  @column()
  public interest_answer_id: number;

  @column()
  public job_position_id: number;

  @column()
  public interest_answers_job_score: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => InterestAnswer, {
    foreignKey: "interest_answer_id", // ระบุคีย์ตรีที่ถูกต้องใน Model Curriculum
  })
  public interestAnswer: BelongsTo<typeof InterestAnswer>;

  @belongsTo(() => JobPosition, {
    foreignKey: "job_position_id", // ระบุคีย์ตรีที่ถูกต้องใน Model Curriculum
  })
  public jobPosition: BelongsTo<typeof JobPosition>;
}
