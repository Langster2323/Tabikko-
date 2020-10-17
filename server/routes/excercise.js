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

module.exports = router;