/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable("reviews", (table) => {
    // - `review_id`: (Primary Key) A unique ID for the review.
    table.increments("review_id").primary();
    // - `content`: (Text) The content of the review, written in markdown.
    table.text("content");
    // - `score`: (Integer) A numerical representation of the score given to the movie by the critic.
    table.integer("score");
    // - `movie_id`: (Foreign Key) A reference ID to a particular movie.
    table.integer("movie_id").unsigned().notNullable();
    table
    .foreign("movie_id")
    .references("movie_id")
    .inTable("movies")
    .onDelete("cascade");
    // - `critic_id`: (Foreign Key) A reference ID to a particular critic.
    table.integer("critic_id").unsigned().notNullable();
    table
    .foreign("critic_id")
    .references("critic_id")
    .inTable("critics")
    .onDelete("cascade");
    // - adds created_at and updated_at timestamps
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("reviews");
};
