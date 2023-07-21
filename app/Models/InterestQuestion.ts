import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  HasMany,
  belongsTo,
  column,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import InterestSurvey from "./InterestSurvey";
import InterestAnswer from "./InterestAnswer";
import InterestRecord from "./InterestRecord";

export default class InterestQuestion extends BaseModel {
  @column({ isPrimary: true })
  public interest_question_id: number;

  @column()
  public interest_survey_id: number;

  @column()
  public interest_question_title: string;

  @column()
  public interest_question_number: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => InterestSurvey)
  public feedbacks: BelongsTo<typeof InterestSurvey>;

  @hasMany(() => InterestAnswer)
  public feedback_answers: HasMany<typeof InterestAnswer>;

  @hasMany(() => InterestRecord)
  public interest_records: HasMany<typeof InterestRecord>;
}
