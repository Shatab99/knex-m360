import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("authors", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("email").notNullable().unique();
        table.string("password").notNullable();
        table.string("bio").nullable();
        table.date("birthdate").notNullable();
        table.timestamps(true, true);
    })
    .createTable("books", (table)=>{
        table.increments("id").primary();
        table.string("title").notNullable();
        table.string("description").nullable();
        table.date("publication_date").notNullable();
        table.integer("author_id").unsigned().references("id").inTable("authors").notNullable();
        table.date("published_date").notNullable();
        table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema
        .dropTableIfExists("books")
        .dropTableIfExists("authors");
}

