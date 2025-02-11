const router = require("express").Router();
const Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndRemove(req.params.id)
    .then((exercise) => res.json(exercise + " : Exercise Deleted"))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/update/:id").post((req, res) => {
  Exercise.findByIdAndUpdate(req.params.id, req.body.exercise)
    .then((exercise) => res.json(exercise + " : Exercise Updated"))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added"))
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
