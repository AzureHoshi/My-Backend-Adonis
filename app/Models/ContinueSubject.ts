import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Subject from "./Subject";

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

  @hasMany(() => ContinueSubject, {
    localKey: "subject_id",
    foreignKey: "parent_id",
  })
  public child_subjects: HasMany<typeof ContinueSubject>;

  @belongsTo(() => Subject, {
    localKey: "subject_id",
    foreignKey: "subject_id",
  })
  public subject: BelongsTo<typeof Subject>;

  @belongsTo(() => ContinueSubject, {
    localKey: "parent_id",
    foreignKey: "subject_id",
  })
  public parent: BelongsTo<typeof ContinueSubject>;
}
