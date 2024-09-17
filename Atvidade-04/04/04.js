/*
4) Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se
somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se
atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.
*/

function calcular(){
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);

    if((Number.isInteger(a))&&(Number.isInteger(b))){
        if(a==b){
            let c = a + b;
            document.getElementById("resultado").innerHTML = `A soma de ${a} + ${b} = ${c}`
        }else{
            let c = a * b;
            document.getElementById("resultado").innerHTML = `A multiplicação de ${a} x ${b} = ${c}`
        }
    }else{
        document.getElementById("resultado").innerHTML = `Digite dois valores inteiro`
    }
}