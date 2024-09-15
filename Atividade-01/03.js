/*
3. A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de broas acada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,50. Ao final do dia, o dono quer saberquanto arrecadou com a venda dos pães e broas (juntos), e quanto deve guardar numa conta depoupança (10% do total arrecadado). Você foi contratado para fazer os cálculos para o dono. Combase nestes fatos, faça um algoritmo para ler as quantidades de pães e de broas, e depois calcularos dados solicitados.
*/

let pao = parseInt(prompt("Quantos Pães foram vendidos?"));
let broa = parseInt(prompt("Quantas Broas foram vendidas?"));

let arrecadacao = (pao * 0.12) + (broa * 1.50);
let poupanca = (arrecadacao * 10) / 100;

alert(`Foi arrecadado R$ ${arrecadacao} e ele deve guardar R$${poupanca} na poupança`);