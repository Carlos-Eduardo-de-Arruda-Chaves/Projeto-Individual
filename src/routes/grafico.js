var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.post("/autenticar", function (req, res) {
    graficoController.autenticar(req, res);
});

module.exports = router;