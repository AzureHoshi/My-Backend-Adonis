import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  column,
  hasMany,
  HasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Subject from "./Subject";
import { belongsTo } from "@ioc:Adonis/Lucid/Orm";

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

  @hasMany(() => ContinueSubject, {
    foreignKey: "parent_id",
  })
  public parent: HasMany<typeof ContinueSubject>;
}
