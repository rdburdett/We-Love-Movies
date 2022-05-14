/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("movies", (table) => {
    // - `movie_id`: (Primary Key) A unique ID for the movie.
    table.increments("movie_id").primary();
    // - `title`: (String) The title of the movie.
    table.string("title");
    // - `runtime_in_minutes`: (Integer) The length of the movie in minutes.
    table.integer("runtime_in_minutes");
    // - `rating`: (String) The rating given to the movie.
    table.string("rating");
    // - `description`: (Text) A shortened description of the movie.
    table.text("description");
    // - `image_url`: (String) A URL to the movie's poster.
    table.string("image_url");
    // - adds created_at and updated_at timestamps
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("movies");
};
