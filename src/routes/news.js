var cors = require('cors');

module.exports = function (application) {
    application.get('/', cors(), function (req, res) {
        console.log('Acessou API NodeJS!');
        application.src.controllers.news.index(application, req, res);
    });

    application.get('/produtos', cors(), function (req, res) {
        console.log('Acessou API NodeJS! PRodutos');
        application.src.controllers.produtos.index(application, req, res);
    });

    application.get('/produtosDAO', cors(), function (req, res) {
        console.log('Acessou API NodeJS! PRodutos');
        application.src.controllers.produtos.indexDB(application, req, res);
    });
}
