function validarLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmaSenha = "ale1234@";

    while(senha !== confirmaSenha ){
    // Validação do email usando expressão regular
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Validação da senha: pelo menos 8 caracteres, 1 letra maiúscula, 1 letra minúscula e 1 número
    const senhaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!senhaPattern.test(senha)) {
        alert("Senha Incorreta. A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.");
        return;
    }else if(senha === confirmaSenha){
                // Se ambas as validações forem bem-sucedidas
                alert("Login realizado com sucesso!");
            }
    }
}