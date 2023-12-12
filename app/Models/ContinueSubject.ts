import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  HasMany,
  column,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Subject from "./Subject";
import { belongsTo } from "@ioc:Adonis/Lucid/Orm";
import SubjectStructure from "./SubjectStructure";

export default class ContinueSubject extends BaseModel {
  @column({ isPrimary: true })
  public continue_subject_id: number;

  @column()
  public parent_id: number | null;

  @column()
  public subject_id: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Subject, {
    foreignKey: "subject_id",
  })
  public subjects: BelongsTo<typeof Subject>;

  @belongsTo(() => Subject, {
    foreignKey: "parent_id",
    localKey: "subject_id",
  })
  public parent: BelongsTo<typeof Subject>;

  @hasMany(() => SubjectStructure, {
    foreignKey: "subject_id",
    localKey: "parent_id",
  })
  public subjectStructure: HasMany<typeof SubjectStructure>;
}
