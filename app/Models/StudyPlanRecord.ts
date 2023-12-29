import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import StudyPlan from "./StudyPlan";
import Subject from "./Subject";

export default class StudyPlanRecord extends BaseModel {
  @column({ isPrimary: true })
  public study_plan_record_id: number;

  @column()
  public study_plan_id: number;

  @column()
  public subject_id: number | null;

  @column()
  public study_plan_record_elective_course: string;

  @column()
  public study_plan_record_semester: number;

  @column()
  public study_plan_record_year: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => StudyPlan, {
    foreignKey: "study_plan_id",
  })
  public study_plan: BelongsTo<typeof StudyPlan>;

  @belongsTo(() => Subject, {
    foreignKey: "subject_id",
  })
  public subjects: BelongsTo<typeof Subject>;
}
