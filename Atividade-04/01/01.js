/*
1) Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor
que C
*/

function comparar(){
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    if((a+b)>c){
        document.getElementById("resultado").innerHTML = `A soma de ${a}+${b} nao é menor que ${c}`;
    }else if((a+b) == c){
        document.getElementById("resultado").innerHTML = `A soma de ${a}+${b} é igual a ${c}`;
    }else{
        document.getElementById("resultado").innerHTML = `A soma de ${a}+${b} é menor que ${c}`;
    }
}