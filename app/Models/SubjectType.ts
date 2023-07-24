import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  HasMany,
  column,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import { belongsTo } from "@ioc:Adonis/Lucid/Orm";
import SubjectCategory from "./SubjectCategory";
import SubjectGroup from "./SubjectGroup";

export default class SubjectType extends BaseModel {
  @column({ isPrimary: true })
  public subject_type_id: number;

  @column()
  public subject_category_id: number;

  @column()
  public subject_type_name: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => SubjectCategory, {
    foreignKey: "subject_category_id", // ระบุคีย์ตรีที่ถูกต้องใน Model Curriculum
  })
  public subject_categories: BelongsTo<typeof SubjectCategory>;

  @hasMany(() => SubjectGroup)
  public subject_groups: HasMany<typeof SubjectGroup>;
}
