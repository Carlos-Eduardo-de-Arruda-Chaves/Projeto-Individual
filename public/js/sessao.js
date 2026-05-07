// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var kruang = sessionStorage.KRUANG_USUARIO;
    var equipe = sessionStorage.EQUIPE_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var b_kruang = document.getElementById("b_kruang");
    var b_equipe = document.getElementById("b_equipe");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
        b_kruang.innerHTML = kruang;
        b_equipe.innerHTML = equipe;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

