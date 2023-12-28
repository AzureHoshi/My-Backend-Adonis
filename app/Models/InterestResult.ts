import { DateTime } from "luxon";
import { BaseModel, BelongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import { belongsTo } from "@ioc:Adonis/Lucid/Orm";
import JobPosition from "./JobPosition";

export default class InterestResult extends BaseModel {
  @column({ isPrimary: true })
  public interest_result_id: number;

  @column()
  public collegian_code: string;

  @column()
  public job_position_id: number;

  @column()
  public interest_result_percent: number;

  @column()
  public interest_result_count: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => JobPosition, {
    foreignKey: "job_position_id",
  })
  public jobPosition: BelongsTo<typeof JobPosition>;
}
