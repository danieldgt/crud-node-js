var express = require('express');
var consign = require('consign');
var cors = require('cors');
var app = express();

consign()
    .include('src/routes')
    .then('src/models')
    .then('src/controllers')
    .into(app);

app.use(cors());

app.listen(3001, function () {
    console.log('APP rodando na porta 3001');
});
