import { DateTime } from "luxon";
import {
  BaseModel,
  HasMany,
  HasOne,
  column,
  hasMany,
  hasOne,
} from "@ioc:Adonis/Lucid/Orm";
import Curriculum from "./Curriculum";
import Collegian from "./Collegian";

export default class CollegianGroup extends BaseModel {
  @column({ isPrimary: true })
  public collegian_group_id: number;

  @column()
  public curriculum_id: number;

  @column()
  public collegian_group_name_th: string;

  @column()
  public collegian_group_name_en: string;

  @column()
  public collegian_group_short_name_th: string;

  @column()
  public collegian_group_short_name_en: string;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasOne(() => Curriculum, {
    foreignKey: "curriculum_id",
  })
  public curriculum: HasOne<typeof Curriculum>;

  @hasMany(() => Collegian)
  public collegians: HasMany<typeof Collegian>;
}
