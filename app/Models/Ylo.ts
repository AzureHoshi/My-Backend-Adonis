import { DateTime } from "luxon";
import {
  BaseModel,
  HasMany,
  HasManyThrough,
  column,
  hasMany,
  hasManyThrough,
} from "@ioc:Adonis/Lucid/Orm";
import YloDescription from "./YloDescription";
import Plo from "./Plo";
import YloPlo from "./YloPlo";

export default class Ylo extends BaseModel {
  public static table = "ylos";

  @column({ isPrimary: true })
  public ylo_id: number;

  @column()
  public curriculum_id: number;

  @column()
  public ylo_year: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => YloDescription, {
    foreignKey: "ylo_id",
  })
  public ylo_description: HasMany<typeof YloDescription>;

  @hasManyThrough([() => Plo, () => YloPlo], {
    localKey: "ylo_id",
    foreignKey: "ylo_id",
    throughForeignKey: "plo_id",
    throughLocalKey: "plo_id",
  })
  public plos: HasManyThrough<typeof Plo>;
}
