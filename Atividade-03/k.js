/*
k. Elaborar um programa que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar
(US$). O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário. 
*/

function converter(){
    let dolar = parseFloat(document.getElementById("dolar").value);
    let cotacao = parseFloat(document.getElementById("cotacao").value);

    let real = dolar * cotacao;

    document.getElementById("resultado").innerText = `Você tem US$${dolar} dolares, e em real você tem R$${real}`;
}