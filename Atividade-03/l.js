/*
l. Elaborar um programa que efetue a apresentação do valor da conversão em dólar (US$)de um valor lido em real
(R$). O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário.
*/

function converter(){
    let real = parseFloat(document.getElementById("real").value);
    let cotacao = parseFloat(document.getElementById("cotacao").value);

    let dolar = real / cotacao;

    document.getElementById("resultado").innerText = `Você tem R$${real} reais, e em dolar você tem US$${dolar} dolares`;
}
