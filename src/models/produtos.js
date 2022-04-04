const Sequelize = require('sequelize');
const database = require('../connectionDB/db');

function produtos() { }

const Produto = database.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE
    },
    descricao: Sequelize.STRING
})

produtos.prototype.getProdutos = function (callback) {
        const produtos = getProdutosDataBase();
        produtos.then(function(value) {
            callback(value,null);
          })
          .catch(err => {
            callback(null,"Error ao carregar Produtos");
          });
};

async function getProdutosDataBase() {
    return await Produto.findAll();
}
 
module.exports = function () {
    return produtos;
}
