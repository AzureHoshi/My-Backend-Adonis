import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Curriculum from "./Curriculum";
import SubjectGroup from "./SubjectGroup";

export default class CurriculumStructure extends BaseModel {
  @column({ isPrimary: true })
  public curriculum_structure_id: number;

  @column()
  public curriculum_id: number;

  @column()
  public subject_group_id: number;

  @column()
  public credit_total: number;

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

  @belongsTo(() => SubjectGroup, {
    foreignKey: "subject_group_id",
  })
  public subject_group: BelongsTo<typeof SubjectGroup>;
}
