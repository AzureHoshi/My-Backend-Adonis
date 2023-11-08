import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Subject from "./Subject";

export default class ContinueSubject extends BaseModel {
  @column({ isPrimary: true })
  public continue_subject_id: number;

  @column()
  public parent_id: number | null;

  @column()
  public child_id: number | null;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Subject, {
    foreignKey: "parent_id",
  })
  public parent_subject: BelongsTo<typeof Subject>;

  @belongsTo(() => Subject, {
    foreignKey: "child_id",
  })
  public child_subject: BelongsTo<typeof Subject>;
}
