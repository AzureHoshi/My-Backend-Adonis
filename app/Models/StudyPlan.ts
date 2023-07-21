import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Curriculum from "./Curriculum";

export default class StudyPlan extends BaseModel {
  @column({ isPrimary: true })
  public study_plan_id: number;

  @column()
  public curriculum_id: number;

  @column()
  public study_plan_name: string;

  @column()
  public study_plan_version: number;

  @column()
  public study_plan_total_credit: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Curriculum)
  public curriculums: BelongsTo<typeof Curriculum>;
}
