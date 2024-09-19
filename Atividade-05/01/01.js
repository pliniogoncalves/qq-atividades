/*
  Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal de um número determinado de pessoas (usuário deve definir esse número), utilizando as seguintes fórmulas:

        ● para homens: (72.7 * h) – 58;
        ● para mulheres: (62.1 * h) – 44.7; 

        Ao final, mostre como saída os seguintes dados de cada pessoa:
        Nome;
        Sexo;
        Peso Ideal;
*/

let pessoas = [];

function iniciarCadastro(){
    const numPessoas = parseInt(document.getElementById("numPessoas").value);
    if(isNaN(numPessoas) || numPessoas <= 0){
        alert("Por favor, insira um número válido de pessoas.");
        return;
    }

    pessoas = [];
    const pessoaPesoIdealContainer = document.getElementById("pessoaPesoIdealContainer");
    pessoaPesoIdealContainer.innerHTML = '';

    for(let i = 0; i < numPessoas; i++){
        pessoaPesoIdealContainer.innerHTML += `
            <h3>Pessoa ${i+1}</h3>
            <label for="nomePessoa${i}">Nome: </label>
            <input type="text" id="nomePessoa${i}" required><br>
            <label for="sexoPessoa${i}">sexo: </label>
            <input type="radio" id="masculino${i}" name="sexo${i}" value="Masculino" required>
            <label for="masculino${i}">Masculino</label>
            <input type="radio" id="feminino${i}" name="sexo${i}" value="Feminino">
            <label for="feminino${i}">Feminino</label><br>
            <label for="alturaPessoa${i}">Altura: </label>
            <input type="number" id="alturaPessoa${i}" required><br><br>
        `;
    }

    document.getElementById("cadastroPesoIdeal").style.display = 'block';
}

function calcularPesoIdeal(){
    const numPessoas = pessoas.length || parseInt(document.getElementById("numPessoas").value);
    let resultadoTexto = document.getElementById("resultadoTexto");
    resultadoTexto.innerHTML = '';

    for(let i = 0; i < numPessoas; i++){
        const nome = document.getElementById(`nomePessoa${i}`).value;
        const sexo = document.querySelector(`input[name="sexo${i}"]:checked`)?.value;
        const altura = parseFloat(document.getElementById(`alturaPessoa${i}`).value);

        if (!nome) {
            alert(`Digite um nome válido para a pessoa ${i + 1}`);
            return;
        }

        if(isNaN(altura)){
            alert(`Digite uma altura válida para ${nome}`);
            return;
        }

        if (!sexo) {
            alert(`Selecione o sexo para ${nome}`);
            return;
        }

        let pesoIdeal = 0;

        if(sexo == "Masculino"){
            pesoIdeal = (72.7 * altura) - 58;
        }else{
            pesoIdeal = (62.1 * altura) - 44.7;
        }

        pessoas.push({
            nome,
            sexo,
            pesoIdeal: pesoIdeal.toFixed(1)
        });

        resultadoTexto.innerHTML += `
            Pessoa: ${nome}<br>
            Sexo: ${sexo}<br>
            Peso Ideal: ${pesoIdeal.toFixed(1)}<br><br>
        `;
    }

    document.getElementById("resultado").style.display = 'block';
    
}