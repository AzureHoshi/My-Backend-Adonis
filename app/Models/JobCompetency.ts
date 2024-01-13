import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class JobCompetency extends BaseModel {
  @column({ isPrimary: true })
  public job_com_id: number;

  @column()
  public job_position_id: number;

  @column()
  public job_com_description: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
