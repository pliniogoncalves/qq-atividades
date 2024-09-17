/*
2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e
estado civil seja “CASADA”, solicitar o tempo de casada (anos).
*/

function verificar(){
    let nome = document.getElementById("nome").value;
    let sexo = document.getElementById("sexo").value.toUpperCase();
    let estadoCivil = document.getElementById("estadoCivil").value.toUpperCase();

    if((sexo == "F")&&(estadoCivil == "CASADA")){
        document.getElementById("resultado").innerHTML = `
        <label for="anos">${nome}, Digite o seu tempo de casada(anos): </label><br>
        <input type="number" id="anos"><br>
        <button onclick="imprimir()">Enviar</button>
        `;
    }else{
        document.getElementById("resultado").innerHTML = `Seção finalizada`;
    }   
}
