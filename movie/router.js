const { Router } = require("express");
const Movie = require("./model");

const router = new Router();

router.post("/movie/add", async (req, res, next) => {
  try {
    const addMovie = await Movie.create(req.body);
    res.status(201).json(addMovie);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
