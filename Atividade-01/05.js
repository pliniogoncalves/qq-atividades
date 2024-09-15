/*
5. Um motorista deseja colocar no seu tanque X reais de gasolina. Escreva um algoritmo para ler opreço do litro da gasolina e o valor do pagamento, e exibir quantos litros ele conseguiu colocar no tanque.
*/

let preco = parseFloat(prompt("Digite o preço do litro da gasolina"));
let valor = parseFloat(prompt("Digite o valor do pagamento"));

let litros = valor / preco;

alert(`Você consegiu colocar ${litros} litros no tanque`);