/*
e. Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTAÇÃO ← VALOR + (VALOR * (TAXA/100) * TEMPO). 
*/

let valor = parseFloat(prompt("Digite o valor"));
let taxa = parseFloat(prompt("Digite o valor da taxa"));
let tempo = parseInt(prompt("Digite o valor do tempo"));

let prestacao = valor + (valor * (taxa/100) * tempo);

alert(`O valor da prestação em atraso é R$${prestacao}`);
