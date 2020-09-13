const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const home = require('./routes/home');
const app = express();

app.use(cors());
app.use(logger());

app.use(express.json());
app.use('/', home)


const port = process.env.port || 3200;

app.listen(port, () => {console.log(`Port is running on ${port}`);})
