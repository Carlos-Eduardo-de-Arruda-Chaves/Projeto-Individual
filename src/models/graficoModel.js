var database = require("../database/config")

function autenticar(email) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email)
    var instrucaoSql = `
         SELECT r.id, r.data, r.tempo_treino FROM usuario u LEFT JOIN
        graduacao g ON u.fk_graduacao=g.id LEFT JOIN equipe e ON e.id=u.fk_equipe LEFT JOIN registro_treino r ON r.fk_usuario = u.id 
         WHERE email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar
};