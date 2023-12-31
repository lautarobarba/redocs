import type { Knex } from "knex";

const config: Knex.Config = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST ?? "localhost",
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER ?? "username",
    password: process.env.DB_PASSWORD ?? "password",
    database: process.env.DB_NAME ?? "database",
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./migrations",
    tableName: "migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};

export default config;
