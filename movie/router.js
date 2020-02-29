const { Router } = require("express");
const Movie = require("./model");

const router = new Router();

router.post("/movie", async (req, res, next) => {
  try {
    const addMovie = await Movie.create(req.body);
    res.status(201).json(addMovie);
  } catch (error) {
    next(error);
  }
});

router.get("/movie", async (req, res, next) => {
  try {
    const movies = await Movie.findAll();
    if (movies) {
      res.json(movies);
    } else {
      res.status(404).end();
    }
  } catch (error) {
    next(error);
  }
});

router.get("/movie/:id", async (req, res, next) => {
  try {
    const movieId = req.params.id;
    const singleMovie = await Movie.findByPk(movieId);
    if (singleMovie) {
      res.json(singleMovie);
    } else {
      res.status(404).end();
    }
  } catch (error) {
    next(error);
  }
});

router.put("/movie/:id", async (req, res, next) => {
  try {
    const movieId = req.params.id;
    const updateEvent = await Movie.findByPk(movieId);
    const updated = await updateEvent.update(req.body);
    res.send(updated);
  } catch (err) {
    next(err);
  }
});

router.delete("/movie/:id", async (req, res, next) => {
  try {
    const movieId = req.params.id;
    const destroyMovie = await Movie.destroy({ where: { id: movieId } });
    res.send({ destroyMovie });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
