import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Collegian from "./Collegian";
import InterestQuestion from "./InterestQuestion";
import InterestAnswer from "./InterestAnswer";

export default class InterestRecord extends BaseModel {
  @column({ isPrimary: true })
  public interest_record_id: number;

  @column()
  public collegian_id: number;

  @column()
  public interest_question_id: number;

  @column()
  public interest_answer_id: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime;

  @belongsTo(() => Collegian, {
    foreignKey: "collegian_id", // ระบุคีย์ตรีที่ถูกต้องใน Model Curriculum
  })
  public collegian: BelongsTo<typeof Collegian>;

  @belongsTo(() => InterestQuestion, {
    foreignKey: "interest_question_id", // ระบุคีย์ตรีที่ถูกต้องใน Model Curriculum
  })
  public interestQuestion: BelongsTo<typeof InterestQuestion>;

  @belongsTo(() => InterestAnswer, {
    foreignKey: "interest_answer_id", // ระบุคีย์ตรีที่ถูกต้องใน Model Curriculum
  })
  public interestAnswer: BelongsTo<typeof InterestAnswer>;
}
