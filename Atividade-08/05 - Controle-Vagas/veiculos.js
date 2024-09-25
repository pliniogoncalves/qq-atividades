/*
Sistema de Controle de Vagas de Estacionamento  
Construa uma solução em HTML e JavaScript que permita gerenciar o uso das vagas de um 
estacionamento. As vagas podem ser: 'C' para carros, 'M' para motos e 'B' para bicicletas. A 
aplicação deve: 
. Aceitar entradas dos tipos de veículos que ocupam as vagas. 
. Armazenar cada entrada em um array. 
. Exibir a lista atualizada de tipos de veículos e o total de cada tipo após cada entrada. 
. Calcular e exibir a porcentagem de cada tipo de veículo sobre o total de vagas ocupadas. 
. Permitir alterar o tipo de veículo armazenado em uma determinada posição do array. 
. Finalizar a inserção de dados quando o usuário digitar 'F'.
*/

let veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];

listar();
contar();
calcularPorcentagem();

function cadastrar(){
    const novoVeiculo = document.getElementById('novoVeiculo').value.toUpperCase();
    if(novoVeiculo == 'C' || novoVeiculo == 'M' || novoVeiculo == 'B'){
        veiculos.push(novoVeiculo);
        localStorage.setItem('produtos', JSON.stringify(veiculos));
        alert(`${novoVeiculo} adicionado com sucesso!`);
    }else if(novoVeiculo == 'F'){
        document.getElementById('cadastroVeiculos').style.display = 'none';
        document.getElementById('alterarVeiculos').style.display = 'none';
    }else{
        alert(`${novoVeiculo} é uma entrada inválida!`)
    }

    listar();
    contar();
    calcularPorcentagem();

    document.getElementById('novoVeiculo').value = '';
}

function listar(){
    const listarVeiculosContainer = document.getElementById('listarVeiculosContainer');
    listarVeiculosContainer.innerHTML = '';

    veiculos.forEach((veiculo, index) => {
        listarVeiculosContainer.innerHTML += `
            ${index + 1}. ${veiculo} <br>
        `;
    });
}

function contar() {
    const contarVeiculosContainer = document.getElementById('contarVeiculosContainer');
    contarVeiculosContainer.innerHTML = '';

    const contagem = veiculos.reduce((contador, veiculo) => {
        contador[veiculo] = (contador[veiculo] || 0) + 1;
        return contador;
    }, {});

    for (const [veiculo, quantidade] of Object.entries(contagem)) {
        contarVeiculosContainer.innerHTML += `${veiculo}: ${quantidade} <br>`;
    }

    return contagem;
}

function calcularPorcentagem(){
    const porcentagemVeiculosContainer = document.getElementById('porcentagemVeiculosContainer');
    porcentagemVeiculosContainer.innerHTML = '';

    const contagem = contar();

    for(const [veiculo, quantidade] of Object.entries(contagem)){
        const porcentagem = (quantidade * 100) / veiculos.length;
        porcentagemVeiculosContainer.innerHTML += `
            ${veiculo}: ${porcentagem.toFixed(2)}% <br>
        `;
    }
}

function alterar(){
    const posicaoVeiculo = document.getElementById("posicaoVeiculo").value;
    const veiculoSubstituto = document.getElementById("veiculoSubstituto").value.toUpperCase();

    if(!isNaN(posicaoVeiculo) && posicaoVeiculo >= 1 && posicaoVeiculo <= veiculos.length){
        if(veiculoSubstituto == 'C' || veiculoSubstituto == 'M' || veiculoSubstituto == 'B'){
            veiculos[posicaoVeiculo-1] = veiculoSubstituto;
            localStorage.setItem('veiculos', JSON.stringify(veiculos));
            alert(`${veiculoSubstituto} adicionado com sucesso!`);
        }else if(veiculoSubstituto == 'F'){
            document.getElementById('cadastroVeiculos').style.display = 'none';
            document.getElementById('alterarVeiculos').style.display = 'none';
        }else{
            alert(`${veiculoSubstituto} é uma entrada inválida!`)
        }
    }else{
        alert(`${posicaoVeiculo} é uma entrada inválida!`)
    }

    listar();
    contar();
    calcularPorcentagem();

    document.getElementById('veiculoSubstituto').value = '';
}