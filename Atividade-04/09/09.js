/*
9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que
calcule seu peso ideal, utilizando as seguintes fórmulas:
para homens: (72.7 * h) – 58;
para mulheres: (62.1 * h) – 44.7. 
*/

function calcularPeso(){
    let sexo = document.getElementById("sexo").value.toUpperCase();
    let altura = parseFloat(document.getElementById("altura").value);

    if(altura<=0){
        document.getElementById("resultado").innerText = `Digite uma altura válida`;
        return;
    }

    if((sexo != "M") && (sexo != "F")){
        document.getElementById("resultado").innerText = `Digite um sexo válido`;
        return;
    }

    if(sexo == "M"){
        let peso = (72.7 * altura) - 58;
        document.getElementById("resultado").innerText = `Seu peso ideal é ${peso}`;
    }else{
        let peso = (62.1 * altura) - 44.7;
        document.getElementById("resultado").innerText = `Seu peso ideal é ${peso}`;
    }

    
}