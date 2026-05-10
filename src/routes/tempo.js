var express = require("express");
var router = express.Router();

var tempoController = require("../controllers/tempoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    tempoController.cadastrar(req, res);
})

// router.post("/autenticar", function (req, res) {
//     graduacaoController.autenticar(req, res);
// });

module.exports = router;