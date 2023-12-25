import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Subject from "./Subject";
import JobPosition from "./JobPosition";

export default class SubjectJobRelated extends BaseModel {
  @column({ isPrimary: true })
  public subject_job_related_id: number;

  @column()
  public subject_id: number;

  @column()
  public job_position_id: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Subject, {
    foreignKey: "subject_id",
  })
  public subject: BelongsTo<typeof Subject>;

  @belongsTo(() => JobPosition, {
    foreignKey: "job_position_id",
  })
  public job_position: BelongsTo<typeof JobPosition>;
}
