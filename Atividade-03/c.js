/*
c. Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a
fórmula VOLUME ← 3.14159 * R ↑ 2 * ALTURA
*/

let raio = parseFloat(prompt(`Digite o valor do Raio`));
let altura = parseFloat(prompt(`Digite o valor da Altura`));

let volume = 3.14159 * (raio * raio) * altura;

alert(`O valor do volume é ${volume} cm³`);