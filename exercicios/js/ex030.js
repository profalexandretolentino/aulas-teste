function alterarTexto() {
  // Seleciona todos os elementos 'p' da página
  const paragrafos = document.getElementsByTagName("p");

  // Verifica se existe ao menos um parágrafo e altera o texto do primeiro
  for (let i = 0; i < paragrafos.length; i++) {
    if (paragrafos[i].id === "paragUm") {
      paragrafos[i].textContent = "O conteúdo foi alterado!";
      break;
    }
  }
}