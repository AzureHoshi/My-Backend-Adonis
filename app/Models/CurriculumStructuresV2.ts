import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Curriculum from "./Curriculum";
import SubjectCategory from "./SubjectCategory";
import SubjectType from "./SubjectType";
import SubjectGroup from "./SubjectGroup";
import Subject from "./Subject";

export default class CurriculumStructuresV2 extends BaseModel {
  @column({ isPrimary: true })
  public curriculum_structures_v2_id: number;

  @column()
  public curriculum_id: number;

  @column()
  public subject_category_id: number | null;

  @column()
  public subject_type_id: number | null;

  @column()
  public subject_group_id: number | null;

  @column()
  public csv2_credit_total: number;

  @column()
  public is_deleted: boolean; // 0 = false, 1 = true

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Curriculum, {
    foreignKey: "curriculum_id",
  })
  public curriculum: BelongsTo<typeof Curriculum>;

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
