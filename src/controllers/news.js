module.exports.index = function (application, req, res) {
    var newsModel = new application.src.models.news();

    newsModel.getNoticias(function (err, result) {
        res.status(200).json(result);
    });
}
