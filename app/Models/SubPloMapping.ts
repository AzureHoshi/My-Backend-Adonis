import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class SubPloMapping extends BaseModel {
  @column({ isPrimary: true })
  public sub_plo_map_id: number;

  @column()
  public sub_plo_id: number;

  @column()
  public subject_id: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
