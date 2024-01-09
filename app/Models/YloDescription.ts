import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class YloDescription extends BaseModel {
  @column({ isPrimary: true })
  public ylo_des_id: number;

  @column()
  public ylo_id: number;

  @column()
  public ylo_description: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
