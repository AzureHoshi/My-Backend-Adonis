import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  HasMany,
  belongsTo,
  column,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Subject from "./Subject";
import ContinueSubject from "./ContinueSubject";
import SubjectStructure from "./SubjectStructure";

export default class StuAcadRec extends BaseModel {
  @column({ isPrimary: true })
  public stu_acad_rec_id: number;

  @column()
  public collegian_code: string;

  @column()
  public subject_id: number;

  @column()
  public stu_acad_rec_year: number;

  @column()
  public stu_acad_rec_semester: number;

  @column()
  public stu_acad_rec_grade: string;

  @column()
  public stu_acad_rec_elective: boolean;

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

  @hasMany(() => ContinueSubject, {
    foreignKey: "subject_id",
  })
  public continue_subjects: HasMany<typeof ContinueSubject>;

  @belongsTo(() => SubjectStructure, {
    foreignKey: "subject_id",
  })
  public subject_structure: BelongsTo<typeof SubjectStructure>;
}
