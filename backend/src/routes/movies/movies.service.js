const knex = require("../../db/connection");

function list(is_showing) {
  if (is_showing) {
    return knex("movies")
      .join("movies_theaters", "movies.movie_id", "movies_theaters.movie_id")
      .distinct("movies_theaters.movie_id")
      .select("movies.*")
      .where({ is_showing: true })
  }

  return knex("movies")
    .select("*")
}

function listShowing() {
  return knex("movies")
    .select("*")
}

function read(movieId) {
  return knex("movies as m")
    .select("*")
    .where({ movie_id: movieId }).first()
}

module.exports = {
  list,
  listShowing,
  read,
};
