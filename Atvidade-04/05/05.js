/*
5)Encontrar o dobro de um número caso  ele seja positivo e o seu  triplo caso  seja negativo,
imprimindo o resultado.
*/

function encontrar(){
    let numero = parseFloat(document.getElementById("numero").value);

    if(numero>0){
        document.getElementById("resultado").innerHTML = `o dobro de ${numero} é ${numero*2}`;
    }else{
        document.getElementById("resultado").innerHTML = `o triplo de ${numero} é ${numero*3}`;
    }
}