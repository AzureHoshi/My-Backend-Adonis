import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class YloPlo extends BaseModel {
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
