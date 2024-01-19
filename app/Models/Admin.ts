import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Admin extends BaseModel {
  @column({ isPrimary: true })
  public admin_id: number;

  @column()
  public user_id: number;

  @column()
  public admin_first_name: string;

  @column()
  public admin_last_name: string;

  @column()
  public admin_code: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
