import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  HasMany,
  HasManyThrough,
  belongsTo,
  column,
  hasMany,
  hasManyThrough,
} from "@ioc:Adonis/Lucid/Orm";
import SubPlo from "./SubPlo";
import YloPlo from "./YloPlo";
import Ylo from "./Ylo";

export default class Plo extends BaseModel {
  public static table = "plos";

  @column({ isPrimary: true })
  public plo_id: number;

  @column()
  public plo_name: string;

  @column()
  public plo_description: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => SubPlo, {
    foreignKey: "plo_id",
  })
  public sub_plos: HasMany<typeof SubPlo>;

  @hasManyThrough([() => Ylo, () => YloPlo], {
    localKey: "plo_id",
    foreignKey: "plo_id",
    throughForeignKey: "ylo_id",
    throughLocalKey: "ylo_id",
  })
  public ylos: HasManyThrough<typeof Ylo>;
}
