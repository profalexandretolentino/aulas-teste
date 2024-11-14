// Solicita ao usuário que insira um número de 1 a 7
let numero = prompt("Digite um número de 1 a 7:");

// Converte a entrada para número
numero = parseInt(numero);

// Declara a variável para armazenar o nome do dia
let nomeDia;

// Utiliza a estrutura switch para determinar o nome do dia
switch (numero) {
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda-feira";
        break;
    case 3:
        nomeDia = "Terça-feira";
        break;
    case 4:
        nomeDia = "Quarta-feira";
        break;
    case 5:
        nomeDia = "Quinta-feira";
        break;
    case 6:
        nomeDia = "Sexta-feira";
        break;
    case 7:
        nomeDia = "Sábado";
        break;
    default:
        nomeDia = "Número inválido! Por favor, insira um número de 1 a 7.";
}

// Exibe o nome do dia correspondente no console
alert(nomeDia);