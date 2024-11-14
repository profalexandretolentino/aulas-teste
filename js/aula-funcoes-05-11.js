function gerarSaudacao(nome, evento) {
    return "Olá, " + nome + "! Bem-vindo ao " + evento + ". Esperamos que você aproveite!";
}

// Função principal que chama outras funções
function mensagemDeBoasVindas() {
    let nome = prompt("Qual é o seu nome?");
    let evento = prompt("Qual é o evento?");
    
    let saudacao = gerarSaudacao(nome, evento);
    alert(saudacao);
}

mensagemDeBoasVindas();
