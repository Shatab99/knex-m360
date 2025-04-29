// knexfile.ts
import type { Knex } from "knex";
import "dotenv/config";

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
} = process.env;

const config: Knex.Config = {
  client: "pg", // use 'pg' instead of 'postgresql'
  connection: {
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  },
  pool: { min: 2, max: 10 },
  migrations: {
    directory: "./migrations",
    tableName: "knex_migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};

export default config;
module.exports = config; // <-- add this line for Knex CLI compatibility
