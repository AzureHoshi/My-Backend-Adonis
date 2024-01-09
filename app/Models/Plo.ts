import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Plo extends BaseModel {
  @column({ isPrimary: true })
  public plo_id: number;

  @column()
  public plo_name: string;

  @column()
  public plo_description: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
