const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const logger = require('morgan');
const home = require('./routes/home');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

app.use(logger('dev'));

//Middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//routes
const excerciseRouter = require('./routes/excercise');
const userRouter = require('./routes/user');

app.use('/excercises', excerciseRouter);
app.use('/users', userRouter);

app.listen(port, () => {console.log(`Port is running on ${port}`);})
