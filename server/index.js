const express = require('express');
const app = express();

app.use(express.json());
app.use('/', (req, res) => {
    res.send("Hello World!")
});

const port = process.env.port || 3200;

app.listen(port, () => {console.log(`Port is running on ${port}`);})
