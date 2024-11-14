/*let nome = prompt("Digite o seu nome");
alert("Olá " + nome);*/


//declaração das variáveis
let palavra1;
let palavra2;
let somaPalavras;
let num1, num2, soma;

//leitura de dados do usuário usando metódo window.prompt
palavra1 = window.prompt("Digite uma palavra:");
palavra2 = window.prompt("Digite outro palavra: ");

//transforma o tipo das duas variaveis de string para numerico
num1 = parseFloat(palavra1);
num2 = parseFloat(palavra2);

//soma 2 strings
somaPalavras = palavra1 + palavra2;
//soma 2 numeros
soma = num1 + num2;

window.alert("A soma das palavra "+ palavra1 + " + "+ palavra2 + " é: " + somaPalavras);
window.alert("A soma dos numeros é: " + soma);