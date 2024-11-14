// Função para converter Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Função para converter Celsius para Kelvin
function celsiusParaKelvin(celsius) {
    return celsius + 273.15;
}

// Função para converter Fahrenheit para Celsius
function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Função para converter Fahrenheit para Kelvin
function fahrenheitParaKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

// Função para converter Kelvin para Celsius
function kelvinParaCelsius(kelvin) {
    return kelvin - 273.15;
}

// Função para converter Kelvin para Fahrenheit
function kelvinParaFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

// Função para exibir o resultado de conversão
function exibirResultado(valorOriginal, escalaOrigem, escalaDestino, valorConvertido) {
    // Concatenando as strings usando o operador "+"
    alert("Temperatura original: " + valorOriginal + "° " + escalaOrigem);
    alert("Temperatura convertida para " + escalaDestino + ": " + valorConvertido + "° " + escalaDestino);
    
    // Ou, se preferir usar o alert:
    // alert("Temperatura original: " + valorOriginal + "° " + escalaOrigem);
    // alert("Temperatura convertida para " + escalaDestino + ": " + valorConvertido + "° " + escalaDestino);
}

// Função para fazer a conversão dependendo das escalas de origem e destino
function converterTemperatura(valor, escalaOrigem, escalaDestino) {
    let valorConvertido;

    if (escalaOrigem === 'Celsius') {
        if (escalaDestino === 'Fahrenheit') {
            valorConvertido = celsiusParaFahrenheit(valor);
        } else if (escalaDestino === 'Kelvin') {
            valorConvertido = celsiusParaKelvin(valor);
        }
    } else if (escalaOrigem === 'Fahrenheit') {
        if (escalaDestino === 'Celsius') {
            valorConvertido = fahrenheitParaCelsius(valor);
        } else if (escalaDestino === 'Kelvin') {
            valorConvertido = fahrenheitParaKelvin(valor);
        }
    } else if (escalaOrigem === 'Kelvin') {
        if (escalaDestino === 'Celsius') {
            valorConvertido = kelvinParaCelsius(valor);
        } else if (escalaDestino === 'Fahrenheit') {
            valorConvertido = kelvinParaFahrenheit(valor);
        }
    }

    exibirResultado(valor, escalaOrigem, escalaDestino, valorConvertido);
}

// funcao inicip{
// Declarando e inicializando as váriáveis
let val = 0, escOrig = "", escDest = "", valorEscDest = "", valorEscOrig = "";

for(let i=1; i<=3; i++){ //N° executará a conversão 3 vezes consecutivas
    val = parseInt(prompt("Digite a temperatura desejada"));

    valorEscOrig = prompt("Digite C = Celsius, F = Fahrenheit, K = Kelvin");
    switch(valorEscOrig){
        case "C":
        case "c":
            escOrig = "Celsius";
            alert(escOrig);
        break;
        case "F":
        case "f":
            escOrig = "Fahrenheit";
            alert(escOrig);
        break;
        case "K":
        case "k":
            escOrig = "Kelvin";
            alert(escOrig);
        break;
        default:
            alert("Escala invalida! Digite um valor entre C = Celsius, F= Fahrenheit, K = Kelvin");
    }

    valorEscDest = prompt("Digite a escala para converter C = Celsius, F= Fahrenheit, K = Kelvin");
    switch(valorEscDest){
        case "C":
        case "c":
            escDest = "Celsius";
            alert(escDest);
        break;
        case "F":
        case "f":
            escDest = "Fahrenheit";
            alert(escDest);
        break;
        case "K":
        case "k":
            escDest = "Kelvin";
            alert(escDest);
        break;
        default:
            alert("Escala invalida! Digite um valor entre C = Celsius, F= Fahrenheit, K = Kelvin");
    }
    
    converterTemperatura(val, escOrig, escDest);
    //}
}