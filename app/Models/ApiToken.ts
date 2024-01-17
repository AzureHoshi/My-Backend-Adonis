import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";

import User from "./User";

export default class ApiToken extends BaseModel {
  @column({ isPrimary: true })
  public api_token_id: number;

  @column()
  public user_id: number;

  @column()
  public name: string;

  @column()
  public type: string;

  @column()
  public token: string;

  @column.dateTime({ autoCreate: true })
  public expires_at: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public created_at: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  public static table = "api_tokens";
  public static primaryKey = "api_token_id";

  public static columns = {
    api_token_id: "number",
    user_id: "number",
    name: "string",
    type: "string",
    token: "string",
    expires_at: "datetime",
    created_at: "datetime",
    updated_at: "datetime",
  };
}
