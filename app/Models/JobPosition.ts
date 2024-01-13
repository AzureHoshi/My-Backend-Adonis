import { DateTime } from "luxon";
import {
  BaseModel,
  HasMany,
  HasManyThrough,
  column,
  hasMany,
  hasManyThrough,
} from "@ioc:Adonis/Lucid/Orm";
import SubjectJobRelated from "./SubjectJobRelated";
import Subject from "./Subject";
import JobCompetency from "./JobCompetency";

export default class JobPosition extends BaseModel {
  @column({ isPrimary: true })
  public job_position_id: number;

  @column()
  public job_position_name: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasManyThrough([() => Subject, () => SubjectJobRelated])
  public subjectJobRelated: HasManyThrough<
    typeof Subject,
    typeof SubjectJobRelated
  >;
  public subjects: HasMany<typeof Subject>;

  @hasMany(() => JobCompetency, {
    foreignKey: "job_position_id",
  })
  public job_competencies: HasMany<typeof JobCompetency>;
}
