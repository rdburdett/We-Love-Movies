const knex = require("../../db/connection");

function listAllTheaters() {
  return knex("theaters as t")
    .select("*")
}

function listMoviesByTheater(theaterId) {
  return knex("movies as m")
    .select("*")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .where({ theater_id: theaterId})
}

function listTheatersByMovie(movieId) {
	return knex("theaters as t")
    .select("t.*", "mt.is_showing", "mt.movie_id")
		.join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
		.where({ movie_id: movieId })
}

module.exports = {
  listTheatersByMovie,
  listMoviesByTheater,
  listAllTheaters
};
