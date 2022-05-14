/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable("critics", (table) => {
    // - `critic_id`: (Primary Key) A unique ID for the critic.
    table.increments("critic_id").primary();
    // - `preferred_name`: (String) The critic's preferred first name.
    table.string("preferred_name");
    // - `surname`: (String) The critic's last name.
    table.string("surname");
    // - `organization_name`: (String) The name of the organization the critic works for.
    table.string("organization_name");
    // - adds created_at and updated_at timestamps
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("critics");
};
