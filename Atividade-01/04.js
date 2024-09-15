/*
4. Escreva um algoritmo para ler o nome e a idade de uma pessoa, e exibir quantos dias de vida ela possui. Considere sempre anos completos, e que um ano possui 365 dias. Ex: uma pessoacom 19 anos possui 6935 dias de vida; veja um exemplo de saída: MARIA, VOCÊ JÁ VIVEU 6935 DIAS
*/

let nome = prompt("Digite o seu nome");
let idade = parseInt(prompt("Digite sua idade"));

let dias = idade * 365;

alert(`${nome}, você já viveu ${dias} dias`);