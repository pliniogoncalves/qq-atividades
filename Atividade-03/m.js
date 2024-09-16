/*
m. Elaborar um programa que efetue a leitura de três valores (A, B e C) e
apresente como resultado final a soma dos quadrados dos três valores lidos.
*/

let a = parseInt(prompt("Digite o valor do primeiro numero"));
let b = parseInt(prompt("Digite o valor do segundo numero"));
let c = parseInt(prompt("Digite o valor do terceiro numero"));

let resultado = (a * a) + (b * b) + (c * c);

alert(`A soma dos quadrados de ${a}, ${b} e ${c} é ${resultado}`);