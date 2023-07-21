import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  HasMany,
  belongsTo,
  column,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import SubjectType from "./SubjectType";
import Subject from "./Subject";

export default class SubjectGroup extends BaseModel {
  @column({ isPrimary: true })
  public subject_group_id: number;

  @column()
  public subject_type_id: number;

  @column()
  public subject_group_name: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => SubjectType)
  public subject_types: BelongsTo<typeof SubjectType>;

  @hasMany(() => Subject)
  public subjects: HasMany<typeof Subject>;
}
