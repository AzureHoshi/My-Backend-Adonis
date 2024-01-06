import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class SimulationsSubjectRec extends BaseModel {
  @column({ isPrimary: true })
  public sim_sub_rec_id: number;

  @column()
  public collegian_code: string;

  @column()
  public subject_id: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
