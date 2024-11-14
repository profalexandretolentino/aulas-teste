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
    console.log("Temperatura original: " + valorOriginal + "° " + escalaOrigem);
    console.log("Temperatura convertida para " + escalaDestino + ": " + valorConvertido + "° " + escalaDestino);
    
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

// Exemplo de uso:
converterTemperatura(38, 'Celsius', 'Fahrenheit');  // 10°C para Fahrenheit
converterTemperatura(120, 'Fahrenheit', 'Celsius'); // 100°F para Celsius
converterTemperatura(312, 'Kelvin', 'Celsius');    // 300K para Celsius