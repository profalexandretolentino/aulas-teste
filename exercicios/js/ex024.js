function soma(a, b) {
    return  a + b;
}

function subt(a, b) {
    return  a - b;
}

function mult(a, b) {
    return a * b;
}

function divi(a, b) {
    return a / b;
}

function imprimirResultado(resultado1, resultado2, resultado3, resultado4) {
    alert("O resultado da soma é: " + resultado1);
    alert("O resultado da subtração é: " + resultado2);
    alert("O resultado da multiplicação é: " + resultado3);
    alert("O resultado da divisão é: " + resultado4);
}

//inicio do Programa Principal - Declaração das Variáveis
let num1 = parseInt(prompt("Digite um número inteiro: "));
let num2 = parseInt(prompt("Digite outro número inteiro: "));
    if(num2 == 0){
        alert("Não existe divisão por 0. Digite outro número diferente de 0");
        num2 = parseInt(prompt("Digite outro valor para o 2° número inteiro"));
    }
let resultadoSoma = soma(num1,num2);
let resultadoSubt = subt(num1,num2);
let resultadoMult = mult(num1,num2);
let resultadoDivi = divi(num1,num2);

//Chama Função imprimirResultado passando 4 argumentos
imprimirResultado(resultadoSoma, resultadoSubt, resultadoMult, resultadoDivi);