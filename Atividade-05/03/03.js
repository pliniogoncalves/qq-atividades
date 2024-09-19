/*
Escreva um algoritmo que leia o número de identificação de cada aluno de uma turma, as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de aproveitamento de cada aluno, usando a fórmula:

MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7

A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno de cada aluno, suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E. 

Média de aproveitamento Conceito

>= 90 A

>= 75 e < 90 B

>= 60 e < 75 C

>= 40 e < 60 D

< 40 E
*/

let alunos = [];

function cadastroAlunos(){
    const numAlunos = parseInt(document.getElementById("numAlunos").value);
    if(isNaN(numAlunos) || numAlunos <= 0){
        alert("Por favor, insira um número válido de alunos.");
        return;
    }

    alunos = [];
    const alunoNotaContainer = document.getElementById("alunoNotaContainer");
    alunoNotaContainer.innerHTML = '';

    for(let i = 0; i < numAlunos; i++){
        alunoNotaContainer.innerHTML += `
            <h3>Aluno ${i+1}</h3>
            <label for="idAluno${i}">Identificação:</label>
            <input type="number" id="idAluno${i}" required><br>
            <label for="nota1Aluno${i}">Nota 1:</label>
            <input type="number" id="nota1Aluno${i}" required><br>
            <label for="nota2Aluno${i}">Nota 2:</label>
            <input type="number" id="nota2Aluno${i}" required><br>
            <label for="nota3Aluno${i}">Nota 3:</label>
            <input type="number" id="nota3Aluno${i}" required><br>
            <label for="meAluno${i}">Media dos Exercicios:</label>
            <input type="number" id="meAluno${i}" required><br>
        `;
    }

    document.getElementById("cadastroNotas").style.display = 'block';

}

function calcularNota(){
    const numAlunos = alunos.length || parseInt(document.getElementById("numAlunos").value);
    let resultadoTexto = document.getElementById("resultadoTexto");
    resultadoTexto.innerHTML = '';

    for(let i = 0; i < numAlunos; i++){
        const id = parseInt(document.getElementById(`idAluno${i}`).value);
        const nota1 = parseFloat(document.getElementById(`nota1Aluno${i}`).value);
        const nota2 = parseFloat(document.getElementById(`nota2Aluno${i}`).value);
        const nota3 = parseFloat(document.getElementById(`nota3Aluno${i}`).value);
        const mediaExercicios = parseFloat(document.getElementById(`meAluno${i}`).value);


        if (isNaN(id)) {
            alert(`Digite um numero de identificação válido para o aluno ${i + 1}`);
            return;
        }

        if(isNaN(nota1) || nota1 < 0){
            alert(`Digite uma nota 1 valida para ${id}`)
            return;
        }

        if(isNaN(nota2) || nota2 < 0){
            alert(`Digite uma nota 2 valida para ${id}`)
            return;
        }

        if(isNaN(nota3) || nota3 < 0){
            alert(`Digite uma nota 3 valida para ${id}`)
            return;
        }

        if(isNaN(mediaExercicios) || mediaExercicios < 0){
            alert(`Digite uma Media de Exercicios valida para ${id}`)
            return;
        }

        let media = ((nota1 + nota2 * 2 + nota3 * 3) + mediaExercicios)/7
        let conceito = "";
        let status = "";

        switch(true){
            case(media >=  90):
                conceito = "A";
                status = "Aprovado";
                break;
            case(media >= 75 && media < 90):
                conceito = "B";
                status = "Aprovado";
                break;
            case(media >= 60 && media < 75):
                conceito = "C";
                status = "Aprovado";
                break;
            case(media >= 40 && media < 60):
                conceito = "D";
                status = "Reprovado";
                break;
            case(media < 40):
                conceito = "E";
                status = "Reprovado";
                break;
            default:
                conceito = "Erro ao calcular o Conceito";
        }

        alunos.push({
            id,
            nota1,
            nota2,
            nota3,
            mediaExercicios,
            media: media,
            conceito: conceito,
            status: status
        });
    }

    for(let j = 0; j < numAlunos; j++){
        resultadoTexto.innerHTML += `
            Aluno: ${alunos[j].id}<br>
            Nota 1: ${alunos[j].nota1}<br>
            Nota 2: ${alunos[j].nota2}<br>
            Nota 3: ${alunos[j].nota3}<br>
            Media dos Exercicios: ${alunos[j].mediaExercicios}<br>
            Media Aproveitamento: ${alunos[j].media.toFixed(2)}<br>
            Conceito: ${alunos[j].conceito}<br>
            <h3>Status: ${alunos[j].status}</h3><br>
        `;
    }

    document.getElementById("resultado").style.display = 'block';
    
}