/*
i.Efetuar a leitura de um número inteiro e apresentar o resultado do quadrado
desse número. 
*/

function calcularQuadrado(){
    let numero = parseInt(document.getElementById("numero").value);

    let quadrado = numero * numero ;

    document.getElementById("resultado").innerText = `O quadrado de ${numero} é ${quadrado}`;
}