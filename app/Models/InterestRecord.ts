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
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Collegian)
  public collegians: BelongsTo<typeof Collegian>;

  @belongsTo(() => InterestQuestion)
  public interest_questions: BelongsTo<typeof InterestQuestion>;

  @belongsTo(() => InterestAnswer)
  public interest_answers: BelongsTo<typeof InterestAnswer>;
}
