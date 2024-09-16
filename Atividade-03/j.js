/*
j. Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo
segundo.
*/

function calcularDiferenca(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);

    let quadrado_diferenca = (a - b)*(a - b);

    document.getElementById("resultado").innerText = `O quadrado da diferença entre ${a} e ${b} é ${quadrado_diferenca}`;
}
