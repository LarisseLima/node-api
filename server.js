const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Olá Larisse");

});
app.listen(3001);
