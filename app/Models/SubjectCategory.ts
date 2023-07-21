import { DateTime } from "luxon";
import { BaseModel, HasMany, column, hasMany } from "@ioc:Adonis/Lucid/Orm";
import SubjectType from "./SubjectType";

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

  @hasMany(() => SubjectType)
  public subject_types: HasMany<typeof SubjectType>;
}
