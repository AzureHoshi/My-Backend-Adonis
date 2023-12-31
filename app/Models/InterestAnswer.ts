import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  HasMany,
  belongsTo,
  column,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import InterestQuestion from "./InterestQuestion";
import InterestAnswerJob from "./InterestAnswersJob";

export default class InterestAnswer extends BaseModel {
  @column({ isPrimary: true })
  public interest_answer_id: number;

  @column()
  public interest_question_id: number;

  @column()
  public interest_answer_title: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => InterestQuestion, {
    foreignKey: "interest_question_id", // ระบุคีย์ตรีที่ถูกต้องใน Model Curriculum
  })
  public interestQuestion: BelongsTo<typeof InterestQuestion>;

  @hasMany(() => InterestAnswerJob, {
    foreignKey: "interest_answer_id",
    localKey: "interest_answer_id",
  })
  public interest_answers_job: HasMany<typeof InterestAnswerJob>;
}
