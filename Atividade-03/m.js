/*
m. Elaborar um programa que efetue a leitura de três valores (A, B e C) e
apresente como resultado final a soma dos quadrados dos três valores lidos.
*/

function somaQuadrados(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let resultado = (a * a) + (b * b) + (c * c);

    document.getElementById("resultado").innerText = `A soma dos quadrados de ${a}, ${b} e ${c} é ${resultado}`
}