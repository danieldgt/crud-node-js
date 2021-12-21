var fs = require('fs');
var path = require("path");

function news() { }

news.prototype.getNoticias = function (callback) {
    fs.readFile(path.resolve(__dirname, "../util/data/noticias.json"), 'utf8', function (err, result) {
        var data = [];
        if (!err) {
            var obj = JSON.parse(result);
            data = obj.noticias;
        }
        callback(err, data);
    });
};

module.exports = function () {
    return news;
}
