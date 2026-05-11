var graficoModel = require("../models/graficoModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    let email = req.body.email
    if(email == undefined){
        res.status(400).send(`deu errado`)
    }
    graficoModel.autenticar(email)
        .then(
            function (resultado) {
                res.json(resultado);

            }
        )
        .catch(
            function (erro) {

                console.log(erro);

                console.log(
                    "\nHouve um erro ao buscar resultado! Erro: ",
                    erro.sqlMessage
                );

                res.status(500).json(erro.sqlMessage);
            }
        );

}

module.exports = {
    autenticar
}