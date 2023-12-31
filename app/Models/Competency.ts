import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  HasMany,
  belongsTo,
  column,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Subject from "./Subject";
import CompetencySub from "./CompetencySub";

export default class Competency extends BaseModel {
  @column({ isPrimary: true })
  public competency_id: number;

  @column()
  public subject_id: number;

  @column()
  public competency_name: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Subject, {
    foreignKey: "subject_id",
  })
  public subject: BelongsTo<typeof Subject>;

  @hasMany(() => CompetencySub, {
    foreignKey: "competency_id",
  })
  public competency_subs: HasMany<typeof CompetencySub>;
}
