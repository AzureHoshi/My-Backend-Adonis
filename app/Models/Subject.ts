import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  HasMany,
  belongsTo,
  column,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import SubjectGroup from "./SubjectGroup";
import Curriculum from "./Curriculum";
import Competency from "./Competency";

export default class Subject extends BaseModel {
  @column({ isPrimary: true })
  public subject_id: number;

  @column()
  public curriculum_id: number;

  @column()
  public subject_group_id: number;

  @column()
  public subject_code: string;

  @column()
  public subject_name_th: string;

  @column()
  public subject_name_en: string;

  @column()
  public subject_credit: number;

  @column()
  public subject_description: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Curriculum, {
    foreignKey: "curriculum_id", // ระบุคีย์ตรีที่ถูกต้องใน Model Curriculum
  })
  public curriculums: BelongsTo<typeof Curriculum>;

  @belongsTo(() => SubjectGroup, {
    foreignKey: "subject_group_id", // ระบุคีย์ตรีที่ถูกต้องใน Model Curriculum
  })
  public subject_groups: BelongsTo<typeof SubjectGroup>;

  @belongsTo(() => Competency, {
    foreignKey: "subject_id",
  })
  public competency: BelongsTo<typeof Competency>;
}
