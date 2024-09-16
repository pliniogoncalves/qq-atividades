/*
j. Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo
segundo.
*/

let A = parseInt(prompt("Digite o valor do primeiro numero"));
let B = parseInt(prompt("Digite o valor do segundo numero"));

let quadrado_diferenca = (A - B)*(A - B);

alert(`O quadrado da diferença entre ${A} e ${B} é ${quadrado_diferenca}`);