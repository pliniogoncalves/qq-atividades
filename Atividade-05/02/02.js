/*
O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )². 

        Elabore um algoritmo que leia o peso e a altura de uma quantidade de pessoas(usuário deve definir esse número) e mostre sua condição de acordo com a tabela abaixo.

        IMC em adultos Condição

        Abaixo de 18,5 Abaixo do peso

        Entre 18,5 e 25 Peso normal

        Entre 25 e 30 Acima do peso

        Acima de 30 obeso

        Ao final, mostre como saída os seguintes dados de cada pessoa:

        Nome;
        Peso;
        Condição 
*/

let pessoas = [];

function cadastroPessoas(){
    const numPessoas = parseInt(document.getElementById("numPessoas").value);
    if(isNaN(numPessoas) || numPessoas <= 0){
        alert("Por favor, insira um número válido de pessoas.");
        return;
    }

    pessoas = [];
    const pessoaImcContainer = document.getElementById("pessoaImcContainer");
    pessoaImcContainer.innerHTML = '';

    for(let i = 0; i < numPessoas; i++){
        pessoaImcContainer.innerHTML += `
            <h3>Pessoa ${i+1}</h3>
            <label for="nomePessoa${i}">Nome:</label>
            <input type="text" id="nomePessoa${i}" required><br>
            <label for="pesoPessoa${i}">Peso:</label>
            <input type="number" id="pesoPessoa${i}" required><br>
            <label for="alturaPessoa${i}">Altura:</label>
            <input type="number" id="alturaPessoa${i}" required><br>
        `;
    }

    document.getElementById("cadastroIMC").style.display = 'block';

}

function calcularIMC(){
    const numPessoas = pessoas.length || parseInt(document.getElementById("numPessoas").value);
    let resultadoTexto = document.getElementById("resultadoTexto");
    resultadoTexto.innerHTML = '';

    for(let i = 0; i < numPessoas; i++){
        const nome = document.getElementById(`nomePessoa${i}`).value;
        const peso = parseFloat(document.getElementById(`pesoPessoa${i}`).value);
        const altura = parseFloat(document.getElementById(`alturaPessoa${i}`).value);

        if (!nome) {
            alert(`Digite um nome válido para a pessoa ${i + 1}`);
            return;
        }

        if(isNaN(peso) || peso <= 0){
            alert(`Digite um peso valido para ${nome}`)
            return;
        }

        if(isNaN(altura) || altura <= 0){
            alert(`Digite uma altura válida para ${nome}`)
            return;
        }

        let imc = peso / (altura * altura);
        let condicao = "";

        switch(true){
            case(imc < 18.5):
                condicao = "Abaixo do peso";
                break;
            case(imc >= 18.5 && imc < 25):
                condicao = "Peso normal";
                break;
            case(imc >= 25 && imc < 30):
                condicao = "Acima do peso";
                break;
            case(imc >= 30):
                condicao = "Obeso";
                break;
            default:
                condicao = "Erro ao calcular IMC";
        }

        pessoas.push({
            nome,
            peso,
            condicao: condicao
        });

    }

    for(let j = 0; j < numPessoas; j++){
        resultadoTexto.innerHTML += `
            Pessoa: ${pessoas[j].nome}<br>
            Peso: ${pessoas[j].peso}<br>
            Condição: ${pessoas[j].condicao}<br><br>
    `;
    }

    document.getElementById("resultado").style.display = 'block';
    
}