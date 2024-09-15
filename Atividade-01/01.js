/* 
1. A imobiliária Imóbilis vende apenas terrenos retangulares. Faça um algoritmo para ler as dimensões de um terreno e depois exibir a área do terreno.
*/

let base = parseFloat(prompt("Digite a largura do terreno:"));
let altura = parseFloat(prompt("Digite o comprimento do terreno:"));;

let area = base * altura;

console.log(`A área do terreno é ${area}`);