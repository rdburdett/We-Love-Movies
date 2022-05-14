const service = require("./theaters.service");
const asyncErrorBoundary = require("../../errors/asyncErrorBoundary");

// Helper function for list
async function listMoviesByTheater() {
  // // List all theaters
  const theaterList = await service.listAllTheaters()

  // Add matching movies to each theater
  for(let theater of theaterList) {
    moviesList = await service.listMoviesByTheater(theater.theater_id)
    theater["movies"] = moviesList
  }
  return theaterList
}

// Helper function for list
async function listTheatersByMovie(movieId) {
  const theaterList = await service.listTheatersByMovie(movieId)
  return theaterList
}

// Lists all theaters with movies
async function list(req, res, next) {
  const { movieId } = req.params

  const theaterList = movieId ? 
    await listTheatersByMovie(movieId) : 
    await listMoviesByTheater()

  res.json({ data: theaterList });
}

module.exports = {
  list: asyncErrorBoundary(list)
};
