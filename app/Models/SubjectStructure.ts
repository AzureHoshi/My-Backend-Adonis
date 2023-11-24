import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import SubjectCategory from "./SubjectCategory";
import SubjectType from "./SubjectType";
import SubjectGroup from "./SubjectGroup";
import Subject from "./Subject";

export default class SubjectStructure extends BaseModel {
  @column({ isPrimary: true })
  public subject_structure_id: number;

  @column()
  public subject_category_id: number;

  @column()
  public subject_type_id: number;

  @column()
  public subject_group_id: number;

  @column()
  public subject_id: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => SubjectCategory, {
    foreignKey: "subject_category_id",
  })
  public subjectCategory: BelongsTo<typeof SubjectCategory>;

  @belongsTo(() => SubjectType, {
    foreignKey: "subject_type_id",
  })
  public subjectType: BelongsTo<typeof SubjectType>;

  @belongsTo(() => SubjectGroup, {
    foreignKey: "subject_group_id",
  })
  public subjectGroup: BelongsTo<typeof SubjectGroup>;

  @belongsTo(() => Subject, {
    foreignKey: "subject_id",
  })
  public subject: BelongsTo<typeof Subject>;
}
