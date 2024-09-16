/*
n. Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final o
quadrado da soma dos três valores lidos.
*/

let a = parseInt(prompt("Digite o valor do primeiro numero"));
let b = parseInt(prompt("Digite o valor do segundo numero"));
let c = parseInt(prompt("Digite o valor do terceiro numero"));

let resultado = (a + b + c) * (a + b + c);

alert(`O quadrado da soma de ${a}, ${b} e ${c} é ${resultado}`);