const paragrafoUm = document.getElementById("paragrafoUm");

// Variável para controlar o estado da cor
let textoAlterado = false;

// Função para alternar a cor de fundo
function alterarTexto() {
  if (textoAlterado) {
    paragrafoUm.textContent = "Texto Alterado"; // Texto 1
  } else {
    paragrafoUm.textContent  = "Texto Inicial"; // Texto 2 
  }
  // Alterna o valor do controle
  textoAlterado = !textoAlterado;
  } 