/*
n. Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final o
quadrado da soma dos três valores lidos.
*/

function somaQuadrados(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let resultado = (a + b + c) * (a + b + c);

    document.getElementById("resultado").innerText = `O quadrado da soma de ${a}, ${b} e ${c} é ${resultado}`;
}