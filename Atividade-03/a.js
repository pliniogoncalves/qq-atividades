/*
a. Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é 
F ← (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
*/

function conveterFahrenheit(){
    let celsius = parseFloat(document.getElementById("celsius").value);

    let fahrenheit = ((9 * celsius) + 160) / 5;

    document.getElementById("resultado").innerText = `A temperatura em Celsius ${celsius}°C convertida em Fahrenheit é ${fahrenheit}°F.`;
}


