/* 
f. Ler dois valores para as variáveis A e B, e efetuar a troca dos valores de
forma que a variável A passe a possuir o valor da variável B e a variável B
passe a possuir o valor da variável A. Apresentar os valores trocados. 
*/

function trocarValores(){
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);

    console.log(a,b);
    let c = a;
    a = b;
    b = c;
    console.log(a,b);

    document.getElementById("resultado").innerText = `O valor de A agora é ${a} e o valor de B agora é ${b}`;
}
