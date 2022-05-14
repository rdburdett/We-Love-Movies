/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable("theaters", (table) => {
    // - `theater_id`: (Primary Key) A unique ID for the theater.
    table.increments("theater_id").primary();
    // - `name`: (String) The name of the theater.
    table.string("name");
    // - `address_line_1`: (String) The first line of the address of the theater.
    table.string("address_line_1");
    // - `address_line_2`: (String) The second line of the address of the theater.
    table.string("address_line_2");
    // - `city`: (String) The city in which the theater is located.
    table.string("city");
    // - `state`: (String) The state in which the theater is located.
    table.string("state");
    // - `zip`: (String) The zip in which the theater is located.
    table.string("zip");
    // - adds created_at and updated_at timestamps
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("theaters");
};
