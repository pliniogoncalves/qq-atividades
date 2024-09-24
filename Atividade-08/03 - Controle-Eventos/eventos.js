/*
Construa uma solução em HTML e JavaScript que permita registrar as participações em eventos 
de uma empresa. Os tipos de eventos são: 'S' para seminários, 'W' para workshops e 'C' para 
conferências. A aplicação deve: 
. Aceitar entradas dos tipos de eventos. 
. Armazenar cada entrada em um array. 
. Exibir a lista atualizada de eventos e o total de cada tipo após cada entrada. 
. Calcular e exibir a porcentagem de cada tipo de evento sobre o total de eventos inseridos. 
. Permitir alterar o tipo de evento armazenado em uma determinada posição do array. 
. Finalizar a inserção de dados quando o usuário digitar 'F'.
*/

let eventos = JSON.parse(localStorage.getItem('eventos')) || [];

listar();
contar();
calcularPorcentagem();

function cadastrar(){
    const novoEvento = document.getElementById('novoEvento').value.toUpperCase();
    if(novoEvento == 'S' || novoEvento == 'W' || novoEvento == 'C'){
        eventos.push(novoEvento);
        localStorage.setItem('eventos', JSON.stringify(eventos));
        alert(`${novoEvento} adicionado com sucesso!`);
    }else if(novoEvento == 'F'){
        document.getElementById('cadastroEventos').style.display = 'none';
        document.getElementById('alterarEventos').style.display = 'none';
    }else{
        alert(`${novoEvento} é uma entrada inválida!`)
    }

    listar();
    contar();
    calcularPorcentagem();

    document.getElementById('novoEvento').value = '';
}

function listar(){
    const listarEventosContainer = document.getElementById('listarEventosContainer');
    listarEventosContainer.innerHTML = '';

    eventos.forEach((evento, index) => {
        listarEventosContainer.innerHTML += `
            ${index + 1}. ${evento} <br>
        `;
    });
}

function contar() {
    const contarEventosContainer = document.getElementById('contarEventosContainer');
    contarEventosContainer.innerHTML = '';

    const contagem = eventos.reduce((contador, evento) => {
        contador[evento] = (contador[evento] || 0) + 1;
        return contador;
    }, {});

    for (const [evento, quantidade] of Object.entries(contagem)) {
        contarEventosContainer.innerHTML += `${evento}: ${quantidade} <br>`;
    }

    return contagem;
}

function calcularPorcentagem(){
    const porcentagemEventosContainer = document.getElementById('porcentagemEventosContainer');
    porcentagemEventosContainer.innerHTML = '';

    const contagem = contar();

    for(const [evento, quantidade] of Object.entries(contagem)){
        const porcentagem = (quantidade * 100) / eventos.length;
        porcentagemEventosContainer.innerHTML += `
            ${evento}: ${porcentagem.toFixed(2)}% <br>
        `;
    }
}

function alterar(){
    const posicaoEvento = document.getElementById("posicaoEvento").value;
    const eventoSubstituto = document.getElementById("eventoSubstituto").value.toUpperCase();

    if(!isNaN(posicaoEvento) && posicaoEvento >= 1 && posicaoEvento <= eventos.length){
        if(eventoSubstituto == 'S' || eventoSubstituto == 'W' || eventoSubstituto == 'C'){
            eventos[posicaoEvento-1] = eventoSubstituto;
            localStorage.setItem('eventos', JSON.stringify(eventos));
            alert(`${eventoSubstituto} adicionado com sucesso!`);
        }else if(eventoSubstituto == 'F'){
            document.getElementById('cadastroEventos').style.display = 'none';
            document.getElementById('alterarEventos').style.display = 'none';
        }else{
            alert(`${eventoSubstituto} é uma entrada inválida!`)
        }
    }else{
        alert(`${posicaoEvento} é uma entrada inválida!`)
    }

    listar();
    contar();
    calcularPorcentagem();

    document.getElementById('eventoSubstituto').value = '';
}