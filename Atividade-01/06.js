/*
6. O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo de refeição. Escreva um algoritmoque leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar. Assuma que abalança já desconte o peso do prato.
*/

let peso = parseFloat(prompt("Digite o peso do prato montado em kg"));

let valor = peso * 12 ;

alert(`O valor a pagar é R$ ${valor}`);