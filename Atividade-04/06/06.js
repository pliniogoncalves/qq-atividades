/*
6) Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são
VERDADEIROS ou FALSOS. 
*/
function verificar(){
    
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);

    if(((a == 0)||(a == 1))&&((b == 0)||(b == 1))){
        if(a == b){
            document.getElementById("resultado").innerHTML = `Valores Verdadeiros`;    
        }else{
            document.getElementById("resultado").innerHTML = `Valores Falsos`;
        }

    }else{
        document.getElementById("resultado").innerHTML = `Valores inválidos`;
    }
}
