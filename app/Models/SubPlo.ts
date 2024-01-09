import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class SubPlo extends BaseModel {
  @column({ isPrimary: true })
  public sub_plo_id: number;

  @column()
  public plo_id: number;

  @column()
  public sub_plo_title: string;

  @column()
  public sub_plo_description: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
