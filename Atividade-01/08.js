/* 
8. Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua média ponderada (as notas tem pesos respectivos de 1, 2 e 3).
*/

let nota1 = parseFloat(prompt("Digite a primeira nota"));
let nota2 = parseFloat(prompt("Digite a segunda nota"));
let nota3 = parseFloat(prompt("Digite a terceira nota"));

let media = ((nota1*1)+(nota2*2)+(nota3*3))/6;

alert(`A media ponderada é ${media}`);