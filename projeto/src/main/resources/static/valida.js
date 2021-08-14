let nome = document.queryCSelector('#nome');
let email = document.queryCSelector('#email');
let email = document.queryCSelector('#senha');

let nomeOk = false;
let emailOk = false;
let senhaOk = false;

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 4){
        txt.innerHTML = 'Nome inválido!'
        txt.style.color = 'red'
        nomeOk = false;
    }
    else{
        txt.innerHTML = 'Nome válido!'
        txt.style.color = 'green'
        nomeOk = true;
    }
}

function validaEmail(){
    return email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1
}

function validaEmailComAtualizacao(){
    let txtemail = document.querySelector('#txtEmail')
    if (validaEmail()){
        txtemail.innerHTML = "E-mail inválido"
        txtemail.style.color = 'red'
        emailOk = false
    } else{
        txtemail.innerHTML = "E-mail válido"
        txtemail.style.color = 'green'
        emailOk = true
    }
}

function validaSenha(){
    return senha.value.length <3
}

function validaSenhaComAtualizacao(){
    let txtSenha = document.querySelector('#txtSenha')
    if (senha.value.length < 3){
        txtSenha.innerHTML = 'Senha inválida'
        txtSenha.style.color = 'red'
        senhaOk = false
    }
    else{
        txtSenha.innerHTML = 'Senha válida'
        txtSenha.style.color = 'green'
        senhaOk = true
    }
}
