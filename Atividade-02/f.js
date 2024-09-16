/* 
f. Ler dois valores para as variáveis A e B, e efetuar a troca dos valores de
forma que a variável A passe a possuir o valor da variável B e a variável B
passe a possuir o valor da variável A. Apresentar os valores trocados. 
*/

let a = parseFloat(prompt("Digite o valor da Variável A"));
let b = parseFloat(prompt("Digite o valor da variável B"));

console.log(a,b);
let c = a;
a = b;
b = c;
console.log(a,b);
alert(`O valor de A agora é ${a} e o valor de b agora é ${b}`);