var express = require("express");
var router = express.Router();

var graduacaoController = require("../controllers/graduacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    graduacaoController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    graduacaoController.autenticar(req, res);
});

module.exports = router;