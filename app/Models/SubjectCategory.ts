import { DateTime } from "luxon";
import {
  BaseModel,
  HasMany,
  HasManyThrough,
  column,
  hasMany,
  hasManyThrough,
} from "@ioc:Adonis/Lucid/Orm";
import SubjectType from "./SubjectType";
import SubjectGroup from "./SubjectGroup";

export default class SubjectCategory extends BaseModel {
  @column({ isPrimary: true })
  public subject_category_id: number;

  @column()
  public subject_category_name: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasManyThrough([() => SubjectType, () => SubjectGroup])
  public subject_types: HasManyThrough<typeof SubjectType>;
  public subject_groups: HasManyThrough<typeof SubjectGroup>;
}
