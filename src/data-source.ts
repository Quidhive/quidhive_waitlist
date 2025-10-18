// 

import { DataSource } from "typeorm";
import { envHelper } from "./config/envHelper.config";
import { Waitlist } from "./waitlist/entity";

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: envHelper.db.host,
  port: envHelper.db.port,
  username: envHelper.db.username,
  password: envHelper.db.password,
  database: envHelper.db.database,
  ssl: false,
  synchronize: true,
  logging: false,
  entities: [Waitlist],
  subscribers: [],
  migrations: [],
});
