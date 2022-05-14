if (process.env.USER) require("dotenv").config();
const cors = require("cors")
const express = require("express");
const app = express();

// Import app routes
const moviesRouter = require("./routes/movies/movies.router")
const reivewsRouter = require("./routes/reviews/reviews.router")
const theatersRouter = require("./routes/theaters/theaters.router");

// Import error routes
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");


// Main app //
app.use(cors())
app.use(express.json())
app.use("/movies", moviesRouter)
app.use("/reviews", reivewsRouter)
app.use("/theaters", theatersRouter)

// Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
