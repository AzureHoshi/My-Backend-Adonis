import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Collegian extends BaseModel {
  @column({ isPrimary: true })
  public col_id: number;

  @column()
  public prefix: string;

  @column()
  public col_first_name: string;

  @column()
  public col_last_name: string;

  @column()
  public col_code: string;

  @column()
  public col_email: string;

  @column()
  public col_status: string;

  @column()
  public curriculum: string;

  @column()
  public section: string;

  @column()
  public col_birthday: Date;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
