import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Collegian from "./Collegian";
import Subject from "./Subject";

export default class StudyRecord extends BaseModel {
  @column({ isPrimary: true })
  public study_record_id: number;

  @column()
  public collegian_id: number;

  @column()
  public subject_id: number;

  @column()
  public study_record_semester: number;

  @column()
  public study_record_year: number;

  @column()
  public study_record_grade: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Collegian)
  public collegians: BelongsTo<typeof Collegian>;

  @belongsTo(() => Subject)
  public subjects: BelongsTo<typeof Subject>;
}
