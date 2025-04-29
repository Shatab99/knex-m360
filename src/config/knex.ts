import "dotenv/config";

import Knex from "knex";

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const knex = Knex({
    client: "pg",
    connection: {
        host: DB_HOST,
        port: Number(DB_PORT),
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
    },
    pool: { min: 2, max: 10 },
})

export const onDbConnect = async () => knex.raw("SELECT 1")

export default knex