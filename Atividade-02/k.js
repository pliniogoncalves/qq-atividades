/*
k. Elaborar um programa que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar
(US$). O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário. 
*/

let dolar = parseFloat(prompt("Digite o valor que você possui em dólar(US$)"));
let cotacao = parseFloat(prompt("Digite o valor da cotaçao do dólar em reais(R$)"));

let real = dolar * cotacao;

alert(`voce tem ${dolar} dolares e em real você tem ${real}`);