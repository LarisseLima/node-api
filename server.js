// Importar
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express(); //Executar a função
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi",
    { useUnifiedTopology: true, useNewUrlParser: true }
);
requireDir("./src/models");



// Rotas
app.use('/api', require('./src/models/routes'));

app.listen(3001);
