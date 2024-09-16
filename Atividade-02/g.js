/*
g. Ler quatro números e apresentar o resultado da adição e multiplicação, baseando-se na utilização da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D.
*/

let a = parseFloat(prompt("Digite o numero A:"));
let b = parseFloat(prompt("Digite o numero B:"));
let c = parseFloat(prompt("Digite o numero C:"));
let d = parseFloat(prompt("Digite o numero D:"));

let soma_ab = a + b;
let soma_ac = a + c;
let soma_ad = a + d;
let soma_bc = b + c;
let soma_bd = b + d;
let soma_cd = c + d;

let multi_ab = a * b;
let multi_ac = a * c;
let multi_ad = a * d;
let multi_bc = b * c;
let multi_bd = b * d;
let multi_cd = c * d;

console.log(`A + B = ${soma_ab}`);
console.log(`A + C = ${soma_ac}`);
console.log(`A + D = ${soma_ad}`);
console.log(`B + C = ${soma_bc}`);
console.log(`B + D = ${soma_bd}`);
console.log(`C + D = ${soma_cd}`);

console.log(`A * B = ${multi_ab}`);
console.log(`A * C = ${multi_ac}`);
console.log(`A * D = ${multi_ad}`);
console.log(`B * C = ${multi_bc}`);
console.log(`B * D = ${multi_bd}`);
console.log(`C * D = ${multi_cd}`);