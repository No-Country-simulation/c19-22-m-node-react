import { DataSource } from "typeorm";
import { User } from "../models/user.model.js";
import "dotenv/config";



const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});

// export { AppDataSource };


export default AppDataSource;