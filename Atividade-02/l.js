/*
l. Elaborar um programa que efetue a apresentação do valor da conversão em dólar (US$)de um valor lido em real
(R$). O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário.
*/

let real = parseFloat(prompt("Digite o valor que você possui em real(R$)"));
let cotacao = parseFloat(prompt("Digite o valor da cotaçao do real em dolar(US$)"));

let dolar = real / cotacao;

alert(`voce tem ${real} reais e em dolar você tem ${dolar}`);