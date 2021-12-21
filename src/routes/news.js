var cors = require('cors');

module.exports = function (application) {
    application.get('/', cors(), function (req, res) {
        console.log('Acessou API NodeJS!');
        application.src.controllers.news.index(application, req, res);
    });
}
