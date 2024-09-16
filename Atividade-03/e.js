/*
e. Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTAÇÃO ← VALOR + (VALOR * (TAXA/100) * TEMPO). 
*/

function calculoPrestacao(){
    let valor = parseFloat(document.getElementById("valor").value);
    let taxa = parseFloat(document.getElementById("taxa").value);
    let tempo = parseInt(document.getElementById("tempo").value);

    let prestacao = valor + (valor * (taxa/100) * tempo);

    document.getElementById("resultado").innerText = `O valor da prestação em atraso é R$${prestacao}`;
}

