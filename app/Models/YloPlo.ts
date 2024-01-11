import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class YloPlo extends BaseModel {
  public static table = "ylo_plos";

  @column({ isPrimary: true })
  public ylo_plo_id: number;

  @column()
  public ylo_id: number;

  @column()
  public plo_id: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
