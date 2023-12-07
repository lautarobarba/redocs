import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("roles_users").del();
  await knex("roles").del();
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      id: 1,
      email: "admin@admin.com",
      is_email_verified: true,
      // Password: admin
      password: "$2a$12$czY10S8WCBue3MsHC5KQa.7zcxCOIIuu/xXxTnYdvO79uSdSQz8gC",
      firstname: "Primer",
      lastname: "Administrador",
      created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
      updated_at: new Date().toISOString().slice(0, 19).replace("T", " "),
      deleted_at: null,
    },
  ]);

  await knex("roles").insert([
    {
      id: 1,
      name: "ADMINISTRADOR",
      created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
      updated_at: new Date().toISOString().slice(0, 19).replace("T", " "),
    },
    {
      id: 2,
      name: "USUARIO",
      created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
      updated_at: new Date().toISOString().slice(0, 19).replace("T", " "),
    },
    {
      id: 3,
      name: "EDITOR",
      created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
      updated_at: new Date().toISOString().slice(0, 19).replace("T", " "),
    },
  ]);

  await knex("roles_users").insert([
    {
      user_id: 1,
      role_id: 1,
    },
  ]);
}
