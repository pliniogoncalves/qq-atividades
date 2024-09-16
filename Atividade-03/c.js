/*
c. Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a
fórmula VOLUME ← 3.14159 * R ↑ 2 * ALTURA
*/

function calcularVolume(){
    let raio = parseFloat(document.getElementById("raio").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let volume = 3.14159 * (raio * raio) * altura;

    document.getElementById("resultado").innerText = `O valor do volume é ${volume} cm³`;
}
