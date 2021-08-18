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

//integração com o back-end

function enviar(){

    event.preventDefault()

    if (nomeOk == false || emailOk == false || senhaOk == false){
        alert("Preencha os dados corretamente, por favor")
        return
}

    let body = {
        name: nome.value,
        email: email.value,
        password: senha.value,
        date = Date(), //2021-08-14T
    }

    fetch("/form",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(body) 
    }).then(response => {
        if(response.ok){
            alert("Você foi cadastrado com sucesso")
            window.location.href = "http://localhost8080/"
        }
        else{
            alert("Tivemos um problema com o cadastro")
        }
        console.log(response)
        response.json().then(user =>{console.log(user)})
    })

}

function logar(event) {
    event.previneDefault()

    if(emailOk ==false || senhaOk == false){
        alert("Preencha os dados corretamente, por favor")
    }
    let body = {
        email:email.value,
        password: senha.value,
    }
    fetch("/login", {
        method:'POST',
        headers
    })
}

