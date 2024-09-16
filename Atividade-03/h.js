/*
h. Elaborar um programa que calcule e apresente o volume de uma caixa retangular por meio da fórmula:
VOLUME ← COMPRIMENTO * LARGURA * ALTURA.
*/

function calculoVolume(){
    let comprimento = parseFloat(document.getElementById("comprimento").value);
    let largura = parseFloat(document.getElementById("largura").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let volume = comprimento * largura * altura;

    document.getElementById("resultado").innerText = `O volume da caixa retangular é ${volume}`;
}


