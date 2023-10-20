import { DateTime } from "luxon";
import {
  BaseModel,
  HasManyThrough,
  column,
  hasManyThrough,
} from "@ioc:Adonis/Lucid/Orm";
import Competency from "./Competency";
import Subject from "./Subject";

export default class CompetencySub extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public competencie_id: number;

  @column()
  public sub_competencie_name: string;

  @column()
  public sub_competencie_description: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasManyThrough([() => Competency, () => Subject])
  public competencies: HasManyThrough<typeof Competency>;
  public subjects: HasManyThrough<typeof Subject>;
}
