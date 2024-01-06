import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class SimulationsJobRec extends BaseModel {
  @column({ isPrimary: true })
  public sim_job_rec_id: number;

  @column()
  public collegian_code: string;

  @column()
  public job_position_id: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
