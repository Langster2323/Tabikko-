const express = require('express');
const router = express.Router();
let Excercise = require('../models/excercise.model');

router.get('/', (req, res) => {
    Excercise.find()
    .then(excercise => res.json(excercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExcercise = new Excercise({
        username,
        description,
        duration,
        date,
    });

    newExcercise.save()
    .then(() => res.json('Excercise added!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.get('/:id', (req, res) => {
    Excercise.findById(req.params.id)
    .then(excercise => res.json(excercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
    Excercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Excercise deleted'))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.post('/update/:id', (req, res) => {
    Excercise.findById(req.params.id).then(exercises => {
        exercises.username = req.body.username;
        exercises.description = req.body.description;
        exercises.duration = Number(req.body.duration);
        exercises.date = Date.parse(req.body.date);

        exercises.save()
        .then(() => res.json('Excercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;