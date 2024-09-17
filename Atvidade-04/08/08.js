/*
8) Escreva  um  algoritmo  que  leia  três  valores  inteiros  e  diferentes  e  mostre-os  em  ordem
decrescente.
*/

function ordenar(){
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    if((Number.isInteger(a))&&(Number.isInteger(b))&&(Number.isInteger(c))){
        if((a !== b) && (a !== c) && (b !== c)){
            
        }else{
            document.getElementById("resultado").innerHTML = `Digite numeros diferentes`;    
        }
    }else{
        document.getElementById("resultado").innerHTML = `Digite numeros inteiros`;
    }
}