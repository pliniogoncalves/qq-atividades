/*
7) Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar,
imprimir o resultado desta operação.
*/

function somar(){
    let numero = parseFloat(document.getElementById("numero").value);

    if(numero % 2 == 0){
        document.getElementById("resultado").innerHTML = `a soma de ${numero} + 5 = ${numero + 5}`;
    }else{
        document.getElementById("resultado").innerHTML = `a soma de ${numero} + 8 = ${numero + 8}`;
    }
}