module.exports.index = function (application, req, res) {
    var produtosModel = new application.src.models.produtos();

    produtosModel.getProdutos(function (result, err) {
        if(err){
            res.status(500).json(err);
        }
        res.status(200).json(result);
    });
}

module.exports.indexDB = function (application, req, res) {
    var produtoDAOs = new application.src.daos.produtoDAOs();

    produtoDAOs.getProdutos(function (result, err) {
        if(err){
            res.status(500).json(err);
        }
        res.status(200).json(result);
    });
}

