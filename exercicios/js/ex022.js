// Define a senha correta
const senhaCorreta = "ale123";
let senhaInserida;
let numeroDeTentativas = 2;

// Utiliza o laço while para solicitar a senha até que a senha correta seja inserida
while (senhaInserida !== senhaCorreta) {
    senhaInserida = prompt("Digite a senha:");
    
    if (senhaInserida === senhaCorreta) {
        alert("Senha correta! Acesso concedido.");
    } else {
        alert("Senha incorreta. Tente novamente.");
        alert("Número de Tentativas: " + numeroDeTentativas);
        numeroDeTentativas --;

        if(numeroDeTentativas == 0){
            alert("Senha Bloqueada! Contate um administrador do sistema!");
            break;
        }
       
    }
}
