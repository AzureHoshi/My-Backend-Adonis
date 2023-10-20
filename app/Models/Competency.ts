import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Subject from "./Subject";

export default class Competency extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public subject_id: number;

  @column()
  public competencie_name: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Subject, {
    foreignKey: "subject_id",
  })
  public subject: BelongsTo<typeof Subject>;
}
