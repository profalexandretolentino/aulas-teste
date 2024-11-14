function digaOla(){
 console.log("Olá");
}

function soma(a,b){

    alert("Função soma iniciada");
    somaT = a + b;
    
    return somaT;
}

let num1, num2, somaT, numT1, numT2;

num1 = prompt("Digite o 1º Numero");
num2 = prompt("Digite o 2º Numero");

numT1 = parseInt(num1);
numT2 = parseInt(num2);

soma(numT1, numT2);
alert(somaT);
soma(num1, num2);
alert(somaT);
soma(10,30);
alert(somaT);





