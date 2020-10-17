const mongoose = require('mongoose');
const { model } = require('./user.model');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
    timestamp: true,
});

const Excercise = mongoose.model('Excercise', exerciseSchema);

model.exports = Excercise;