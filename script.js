function ObterValores()
{
    var parag_sucesso = document.querySelector('.paragrafo-sucesso');
    var parag_alerta  = document.querySelector('.paragrafo-alerta');
    var email         = document.querySelector('.inserindo-email');
    var senha         = document.querySelector('.inserindo-senha');
    var confSenha     = document.querySelector('.confirmando-senha');

    if(email.value != '' && senha.value != '' && confSenha.value != '')
    {
        if(senha.value == confSenha.value && email.value.toLowerCase().search('@gmail.com') >= 0)
        {
            parag_sucesso.textContent = 'Cadastro feito com muito sucesso!!!';
            parag_alerta.textContent  = '';
        }

        else if(senha.value != confSenha.value && email.value.toLowerCase().search('@gmail.com') >= 0)
        {
            parag_alerta.textContent  = 'Verfique a senha digitada';
            parag_sucesso.textContent = '';
        }
        else if((senha.value != confSenha.value || email.value.toLowerCase().search('@gmail.com') == -1)/* || (senha.value == confSenha.value && email.value.toLowerCase().search('@gmail.com') == -1)*/)
        {
            parag_alerta.textContent  = 'email ou senha incorrectos.';
            parag_sucesso.textContent = '';
        }
    }
    else
    {
        parag_alerta.textContent  = 'Preencha todos os campos!!!';
        parag_sucesso.textContent = '';
    }
}

var botaoLogin = document.querySelector(".botao-login");
botaoLogin.onclick = ObterValores;