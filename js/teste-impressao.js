function soma(a, b){
    return a+b;
}

function subt(a, b){
    return a-b;
}

function imprimirResultado(resultado1, resultado2){
    alert("O resultado da Soma é: " + resultado1);
    alert("O resultado da Subtração é: " + resultado2);
}

//Aqui inicia o programa principal
let num1 = parseInt(prompt("Digite um número inteiro"));
let num2 = parseInt(prompt("Digite um número inteiro"));
let resp1 =  soma(num1, num2);
let resp2 =  subt(num1, num2);

imprimirResultado(resp1, resp2);