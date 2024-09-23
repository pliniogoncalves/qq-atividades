/*
 Construa uma solução em JavaScript que permita fazer um levantamento do estoque de vinhos de uma adega. Os tipos de vinho são: 'T' para tinto, 'B' para branco e 'R' para rosé. A aplicação deve:

Aceitar entradas dos tipos de vinho.
Armazenar cada entrada em um array. 
Exibir a lista atualizada de tipos de vinho e o total de cada tipo após cada entrada.
Calcular e exibir a porcentagem de cada tipo sobre o total de vinhos inseridos.
Permitir alterar o tipo de vinho armazenado em uma determinada posição do array.
Finalizar a inserção de dados quando o usuário digitar 'F'.
*/

let vinhos=[];

function inserirVinhosMenu(){
    vinhos = [];

    const inserirVinhosContainer = document.getElementById("inserirVinhosContainer");
    inserirVinhosContainer.innerHTML = '';

    inserirVinhosContainer.innerHTML += `
    <label for="vinhos">Digite a opção de Vinho que deseja Armazenar('T' para Tinto, 'B' para Branco e 'R' para Rosé). Se deseja finalizar, Digite "F":</label> 
    <input type="text" id="vinhoInput">
    `;

    document.getElementById("inserirVinhos").style.display = 'block';
}

function armazenarVinhos(){
    const vinhoInput = document.getElementById("vinhoInput").value.toUpperCase();
   

    switch(true){
        case(vinhoInput == 'T'):
            vinhos.push('Tinto');
            listarVinhos();
            alert(`Vinho Tinto adicionado.`)
            document.getElementById('vinhoInput').value = '';
            break;
        case(vinhoInput == 'B'):
            vinhos.push('Branco');
            listarVinhos();
            alert(`Vinho Branco adicionado.`)
            document.getElementById('vinhoInput').value = '';
            break;
        case(vinhoInput == 'R'):
            vinhos.push('Rosé');
            listarVinhos();
            alert(`Vinho Rosé adicionado.`)
            document.getElementById('vinhoInput').value = '';
            break;
        case(vinhoInput == 'F'):
            finalizarInsercao();
            break;
        default:
            alert('Opção Inválida! Use "T" para tinto, "B" para branco e "R" para rosé. Se deseja finalizar, Digite "F".');
    }

}

function listarVinhos(){
    const listarVinhosContainer = document.getElementById("listarVinhosContainer");
    listarVinhosContainer.innerHTML = '';

    for(let i = 0; i< vinhos.length; i++){
        listarVinhosContainer.innerHTML += `
            <ul><li>${vinhos[i]}</li></ul>
        `;
    }

    document.getElementById("listarVinhos").style.display = 'block';
    contarVinhos();
}

function contarVinhos(){
    const contarVinhosContainer = document.getElementById("contarVinhosContainer");
    contarVinhosContainer.innerHTML = '';

    let vinhoTinto = 0;
    let vinhoRose = 0;
    let vinhoBranco = 0;

    for(let i = 0; i< vinhos.length; i++){
        if(vinhos[i] == 'Tinto'){
            vinhoTinto++;
        }else if(vinhos[i] == 'Rosé'){
            vinhoRose++;
        }else{
            vinhoBranco++
        }
    }

    contarVinhosContainer.innerHTML += `
    <p>Tinto: ${vinhoTinto}<br> Branco:${vinhoBranco}<br> Rosé:${vinhoRose}</p>
    `;

    document.getElementById("contarVinhos").style.display = 'block';
}

function finalizarInsercao(){
    alert('Inserção de vinhos finalizada!');
    document.getElementById("inserirVinhos").style.display = 'none';
    console.log(vinhos);
}

