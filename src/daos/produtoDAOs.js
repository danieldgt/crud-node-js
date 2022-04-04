const Sequelize = require('sequelize');
const database = require('../connectionDB/db');
const produtos = require('../models/produtos');

function produtoDAOs() { }

produtoDAOs.prototype.getProdutos = function (callback) {
        const produtos = getProdutosDataBase();
        produtos.then(function(value) {
            callback(value,null);
          })
          .catch(err => {
            callback(null,"Error ao carregar Produtos");
          });
};

async function getProdutosDataBase() {
    return await produtos.findAll();
}
 
module.exports = function () {
    return produtoDAOs;
}
