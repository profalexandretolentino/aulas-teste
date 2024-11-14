const corpo = document.getElementById("corpo");

// Variável para controlar o estado da cor
let corAlternada = false;

// Função para alternar a cor de fundo
function alternarCorDeFundo() {
  if (corAlternada) {
    corpo.style.backgroundColor = "lightblue"; // Cor 1
  } else {
    corpo.style.backgroundColor = "lightgreen"; // Cor 2
  }
  // Alterna o valor do controle
  corAlternada = !corAlternada;
}

