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
let vinhoTinto = 0;
let vinhoRose = 0;
let vinhoBranco = 0;

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
            contarVinhos();
            alert(`Vinho Tinto adicionado.`)
            document.getElementById('vinhoInput').value = '';
            break;
        case(vinhoInput == 'B'):
            vinhos.push('Branco');
            listarVinhos();
            contarVinhos();
            alert(`Vinho Branco adicionado.`)
            document.getElementById('vinhoInput').value = '';
            break;
        case(vinhoInput == 'R'):
            vinhos.push('Rosé');
            listarVinhos();
            contarVinhos();
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
            ${i+1}. ${vinhos[i]}<br>
        `;
    }

    document.getElementById("listarVinhos").style.display = 'block';
}

function contarVinhos(){
    const contarVinhosContainer = document.getElementById("contarVinhosContainer");
    contarVinhosContainer.innerHTML = '';

    vinhoTinto = 0;
    vinhoRose = 0;
    vinhoBranco = 0;

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
    <p>
        Tinto: ${vinhoTinto} <br>
        Branco:${vinhoBranco} <br>
        Rosé:${vinhoRose}
    </p>
    `;

    document.getElementById("contarVinhos").style.display = 'block';
}

function finalizarInsercao(){
    alert('Inserção de vinhos finalizada!');
    document.getElementById("inserirVinhos").style.display = 'none';
    console.log(vinhos);
}

function calcularPorcentagemMenu(){
    const porcentagemVinhosContainer = document.getElementById("porcentagemVinhosContainer");
    porcentagemVinhosContainer.innerHTML = '';

    let porcentagemTinto = (vinhoTinto * 100) / vinhos.length;
    let porcentagemBranco = (vinhoBranco *100) / vinhos.length;
    let porncentagemRose = (vinhoRose *100) / vinhos.length;

    porcentagemVinhosContainer.innerHTML += `
    <p>
        Tinto: ${porcentagemTinto}% <br>
        Branco: ${porcentagemBranco}% <br>
        Rosé: ${porncentagemRose}%
    </p>
    `;

    document.getElementById("porcentagemVinhos").style.display = 'block';

}

function alterarVinhoMenu(){
    const alterarPosicaoVinhosContainer = document.getElementById("alterarPosicaoVinhosContainer");
    alterarPosicaoVinhosContainer.innerHTML = '';

    listarVinhos();

    alterarPosicaoVinhosContainer.innerHTML += `
        <label for="posicaoVinho">Digite o número do Vinho que deseja alterar: </label>
        <input type="number" id="posicaoVinho" required> <br>
        <label for"novoVinho">Digite por qual Vinho deseja substituir('T' para Tinto, 'B' para Branco e 'R' para Rosé). Se deseja finalizar, Digite "F": </label>
        <input type="text" id="novoVinho" required> <br>
        <button type="button" onclick="alterarVinho()">Alterar</button>
    `;
    
    document.getElementById("alterarPosicaoVinhos").style.display = 'block';
}

function alterarVinho(){
    const posicaoVinho = document.getElementById("posicaoVinho").value;
    const novoVinho = document.getElementById("novoVinho").value.toUpperCase();

    if(!isNaN(posicaoVinho) && posicaoVinho >= 1 && posicaoVinho <= vinhos.length){
        switch(true){
            case(novoVinho == 'T'):
            vinhos[posicaoVinho-1] = 'Tinto';
            listarVinhos();
            contarVinhos();
            alert(`Vinho Tinto adicionado na posição ${posicaoVinho}.`)
            document.getElementById('novoVinho').value = '';
            break;
        case(novoVinho == 'B'):
            vinhos[posicaoVinho-1] = 'Branco';
            listarVinhos();
            contarVinhos();
            alert(`Vinho Branco adicionado na posição ${posicaoVinho}.`)
            document.getElementById('novoVinho').value = '';
            break;
        case(novoVinho == 'R'):
            vinhos[posicaoVinho-1] = 'Rosé';
            listarVinhos();
            contarVinhos();
            alert(`Vinho Rosé adicionado na posição ${posicaoVinho}.`)
            document.getElementById('novoVinho').value = '';
            break;
        case(vinhoInput == 'F'):
            finalizarInsercao();
            break;
        default:
            alert('Opção Inválida! Use "T" para tinto, "B" para branco e "R" para rosé. Se deseja finalizar, Digite "F".');
        }
    }else{
        alert('Opção Inválida! Insira uma posição existente.');
        console.log(vinhos.length);
    }
}

