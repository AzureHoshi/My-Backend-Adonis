import { DateTime } from "luxon";
import Hash from "@ioc:Adonis/Core/Hash";
import {
  column,
  beforeSave,
  BaseModel,
  hasOne,
  HasOne,
} from "@ioc:Adonis/Lucid/Orm";
import Collegian from "./Collegian";
import Admin from "./Admin";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public user_id: number;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public rememberMeToken: string | null;

  @column()
  public role: number;

  @column()
  public is_deleted: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasOne(() => Collegian, {
    foreignKey: "user_id",
    localKey: "user_id",
  })
  public collegian: HasOne<typeof Collegian>;

  @hasOne(() => Admin, {
    foreignKey: "user_id",
    localKey: "user_id",
  })
  public admin: HasOne<typeof Admin>;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
