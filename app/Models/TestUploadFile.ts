import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class TestUploadFile extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public fileName: string;

  @column()
  public filePath: string;

  @column()
  public fileType: string;

  @column()
  public fileSize: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
