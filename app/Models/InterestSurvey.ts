import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Curriculum from "./Curriculum";

export default class InterestSurvey extends BaseModel {
  @column({ isPrimary: true })
  public interest_survey_id: number;

  @column()
  public curriculum_id: number;

  @column()
  public interest_survey_version: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Curriculum, {
    foreignKey: "curriculum_id", // ระบุคีย์ตรีที่ถูกต้องใน Model Curriculum
  })
  public curriculum: BelongsTo<typeof Curriculum>;
}
