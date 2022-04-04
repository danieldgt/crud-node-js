const express = require('express');
const consign = require('consign');
var cors = require('cors');
var app = express();

consign()
.include('src/routes')
.then('src/controllers')
.then('src/models')
.then('src/daos')
.into(app);

app.use(cors());

//criar tabelas caso nao existe
async function getConnection() {
    const database = require('./src/connectionDB/db');
    const Produto = require('./src/models/produtos');

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
  }
  
getConnection();

app.listen(3001, function () {
    console.log('APP rodando na porta 3001');
});
