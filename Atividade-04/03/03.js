/*
3) Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar
*/

function verificar(){

    let numero = parseFloat(document.getElementById("numero").value);

    if((Number.isInteger(numero))&&(numero%2 == 0)){
        document.getElementById("resultado").innerHTML = `O numero ${numero} é par`;
    }else if(!Number.isInteger(numero)){
        document.getElementById("resultado").innerHTML = `Numero inválido`;
    }
    else{
        document.getElementById("resultado").innerHTML = `O numero ${numero} é ímpar`;
    }

}