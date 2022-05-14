const router = require("express").Router();
const moviesController = require("./movies.controller");
const theatersController = require("../theaters/theaters.controller");
const reviewsController = require("../reviews/reviews.controller");
const methodNotAllowed = require("../../errors/methodNotAllowed");

router
  .route("/:movieId/theaters")
  .get(theatersController.list)
  .all(methodNotAllowed);
  
  router
  .route("/:movieId/reviews")
  .get(reviewsController.read)
  .all(methodNotAllowed);

router
  .route("/:movieId")
  .get(moviesController.read)
  .all(methodNotAllowed);

router
  .route("/")
  .get(moviesController.list)
  .all(methodNotAllowed);

module.exports = router;