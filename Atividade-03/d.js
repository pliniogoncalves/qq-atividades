/*
d. Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto e a velocidade média durante a viagem. Desta forma, será possível obter a distância percorrida com a fórmula DISTÂNCIA ← TEMPO * VELOCIDADE. Tendo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula LITROS_USADOS ← DISTÂNCIA / 12. O programa deve apresentar os valores da velocidade média, tempo gasto na viagem, a distância percorrida e a quantidade de litros utilizada na viagem.
*/

function calcularDistanciaLitros(){
    let tempo = parseFloat(document.getElementById("tempo").value);
    let velocidade = parseFloat(document.getElementById("velocidade").value);

    let distancia = tempo * velocidade;
    let litros_usados = distancia / 12;

    document.getElementById("resultado").innerText = `velocidade média: ${velocidade}km/h, Tempo gasto: ${tempo}h, distância percorrida: ${distancia}km, litros_usados: ${litros_usados}L`;
}