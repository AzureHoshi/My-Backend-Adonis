import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  HasMany,
  belongsTo,
  column,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import CollegianGroup from "./CollegianGroup";
import StudyRecord from "./StudyRecord";
import CollegianFeedback from "./CollegianFeedback";
import InterestRecord from "./InterestRecord";

export default class Collegian extends BaseModel {
  @column({ isPrimary: true })
  public collegian_id: number;

  @column()
  public collegian_group_id: number;

  @column()
  public collegian_code: string;

  @column()
  public collegian_fname_th: string;

  @column()
  public collegian_lname_th: string;

  @column()
  public collegian_fname_en: string;

  @column()
  public collegian_lname_en: string;

  @column()
  public collegian_email: string;

  @column()
  public collegian_tel: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => CollegianGroup)
  public collegian_groups: BelongsTo<typeof CollegianGroup>;

  @hasMany(() => StudyRecord)
  public curriculums: HasMany<typeof StudyRecord>;

  @hasMany(() => CollegianFeedback)
  public collegian_feedbacks: HasMany<typeof CollegianFeedback>;

  @hasMany(() => InterestRecord)
  public interest_records: HasMany<typeof InterestRecord>;
}
