/*
10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar
umaindicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2
Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo
com a tabela abaixo.
IMC em adultos Condição 
Abaixo de 18,5 Abaixo do peso 
Entre 18,5 e 25 Peso normal 
Entre 25 e 30 Acima do peso 
Acima de 30 obeso 
*/

function calcularIMC(){
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if(isNaN(peso) && isNaN(altura)){
        document.getElementById("resultado").innerText = `Digite valores válidos`;
        return;
    }

    let imc = peso / (altura * altura);

    if(imc < 18.8){
        document.getElementById("resultado").innerText = `Abaixo do peso`;
    }else if((imc >= 18.5) && (imc < 25)){
        document.getElementById("resultado").innerText = `Peso normal`;
    }else if((imc >= 25) && (imc < 30)){
        document.getElementById("resultado").innerText = `Acima do Peso`;
    }else{
        document.getElementById("resultado").innerText = `Obeso`;
    }
}