const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Tamal');
});

app.listen(3000);