import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists("users")
    .createTable("users", function (table) {
      table.increments("id").primary();
      table.string("email", 255).unique().notNullable();
      table.string("password", 255).unique().notNullable();
      table.timestamps();
      table.datetime("deleted_at").defaultTo(null).nullable();
    })
    .dropTableIfExists("roles")
    .createTable("roles", function (table) {
      table.increments("id").primary();
      table.string("name", 255).unique().notNullable();
      table.timestamps();
      table.datetime("deleted_at").defaultTo(null).nullable();
    })
    .dropTableIfExists("roles_users")
    .createTable("roles_users", function (table) {
      table.integer("user_id").unsigned().notNullable();
      table.integer("role_id").unsigned().notNullable();

      table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      table
        .foreign("role_id")
        .references("id")
        .inTable("roles")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists("roles_users")
    .dropTableIfExists("roles")
    .dropTableIfExists("users");
}
