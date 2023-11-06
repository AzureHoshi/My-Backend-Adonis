import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  HasMany,
  belongsTo,
  column,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Competency from "./Competency";
import Subject from "./Subject";

export default class CompetencySub extends BaseModel {
  @column({ isPrimary: true })
  public competency_sub_id: number;

  @column()
  public competency_id: number;

  @column()
  public competency_sub_name: string;

  @column()
  public competency_sub_description: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Competency, {
    foreignKey: "competency_id",
  })
  public competency: BelongsTo<typeof Competency>;

  @hasMany(() => Subject)
  public subjects: HasMany<typeof Subject>;
}
