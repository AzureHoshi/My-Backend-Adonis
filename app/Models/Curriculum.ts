import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  HasMany,
  belongsTo,
  column,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Faculty from "./Faculty";
import CollegianGroup from "./CollegianGroup";
import StudyPlan from "./StudyPlan";
import Subject from "./Subject";
import InterestSurvey from "./InterestSurvey";

export default class Curriculum extends BaseModel {
  public static table = "curriculums";

  @column({ isPrimary: true })
  public curriculum_id: number;

  @column()
  public faculty_id: number;

  @column()
  public curriculum_name_th: string;

  @column()
  public curriculum_name_en: string;

  @column()
  public curriculum_short_name_th: string;

  @column()
  public curriculum_short_name_en: string;

  @column()
  public curriculum_year: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Faculty, {
    foreignKey: "faculty_id", // ระบุคีย์ตรีที่ถูกต้องใน Model Curriculum
  })
  public faculty: BelongsTo<typeof Faculty>;

  @hasMany(() => CollegianGroup, {
    foreignKey: "curriculum_id", // ระบุคีย์ตรีที่ถูกต้องใน Model Curriculum
    localKey: "curriculum_id", // ระบุคีย์ตรีที่ถูกต้องใน Model CollegianGroup
  })
  public collegian_groups: HasMany<typeof CollegianGroup>;

  @hasMany(() => StudyPlan)
  public study_plans: HasMany<typeof StudyPlan>;

  @hasMany(() => Subject)
  public subjects: HasMany<typeof Subject>;

  @hasMany(() => InterestSurvey)
  public interest_surveys: HasMany<typeof InterestSurvey>;
}
