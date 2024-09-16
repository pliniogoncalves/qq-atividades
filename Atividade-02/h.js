/*
h. Elaborar um programa que calcule e apresente o volume de uma caixa retangular por meio da fórmula:
VOLUME ← COMPRIMENTO * LARGURA * ALTURA.
*/

let comprimento = parseFloat(prompt("Digite o valor do comprimento"));
let largura = parseFloat(prompt("Digite o valor da largura"));
let altura = parseFloat(prompt("Digite o tamanho da altura"));

let volume = comprimento * largura * altura;

alert(`O volume da caixa retangular é ${volume}`);

