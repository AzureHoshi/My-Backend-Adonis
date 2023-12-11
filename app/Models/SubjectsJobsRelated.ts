import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class SubjectsJobsRelated extends BaseModel {
  @column({ isPrimary: true })
  public subjects_jobs_related_id: number;

  @column()
  public subject_id: number;

  @column()
  public job_position_id: number;

  @column()
  public is_deleted: boolean; // 0 = false, 1 = true

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
