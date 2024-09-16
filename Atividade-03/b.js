/*
b. Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de
conversão é C ← (F -32)* (5/9), sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
*/
function convertCelsius(){
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    let celsius = (fahrenheit - 32) * (5/9) ;

    document.getElementById("resultado").innerText = `A temperatura em Fahrenheit ${fahrenheit}°F convertida em Celsius é ${celsius}°C`;
}
