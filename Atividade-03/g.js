/*
g. Ler quatro números e apresentar o resultado da adição e multiplicação, baseando-se na utilização da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D.
*/

function distributiva(){
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let d = parseFloat(document.getElementById("d").value);

    let soma_ab = a + b;
    let soma_ac = a + c;
    let soma_ad = a + d;
    let soma_bc = b + c;
    let soma_bd = b + d;
    let soma_cd = c + d;

    let multi_ab = a * b;
    let multi_ac = a * c;
    let multi_ad = a * d;
    let multi_bc = b * c;
    let multi_bd = b * d;
    let multi_cd = c * d;

    let resultado = 
    `A + B = ${soma_ab}<br>
    A + C = ${soma_ac}<br>
    A + D = ${soma_ad}<br>
    B + C = ${soma_bc}<br>
    B + D = ${soma_bd}<br>
    C + D = ${soma_cd}<br><br>
    A * B = ${multi_ab}<br>
    A * C = ${multi_ac}<br>
    A * D = ${multi_ad}<br>
    B * C = ${multi_bc}<br>
    B * D = ${multi_bd}<br>
    C * D = ${multi_cd}`;

document.getElementById("resultado").innerHTML = resultado;

}
