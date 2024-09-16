/**
9. Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo vendida respectivamente por 10, 12 e 15 reais. Construa um algoritmo em que o usuário forneça a quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina informe quanto será o valor arrecadado
*/

let pequeno = parseInt(prompt("Informe a quantidade de camisetas pequenas"));
let medio = parseInt(prompt("Informe a quantidade de camisetas medias"));
let grande = parseInt(prompt("Informe a quantidade de camisetas grandes"));

let valor = ((pequeno * 10)+(medio*12)+(grande*15));

alert(`O valor arrecado é de R$${valor}`);