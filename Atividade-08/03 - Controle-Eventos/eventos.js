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

let frutas = JSON.parse(localStorage.getItem('frutas')) || [];

listar();
contar();
calcularPorcentagem();

function cadastrar(){
    const novaFruta = document.getElementById('novaFruta').value.toUpperCase();
    if(novaFruta == 'M' || novaFruta == 'B' || novaFruta == 'L'){
        frutas.push(novaFruta);
        localStorage.setItem('frutas', JSON.stringify(frutas));
        alert(`${novaFruta} adicionado com sucesso!`);
    }else if(novaFruta == 'F'){
        document.getElementById('cadastroFrutas').style.display = 'none';
        document.getElementById('alterarFrutas').style.display = 'none';
    }else{
        alert(`${novaFruta} é uma entrada inválida!`)
    }

    listar();
    contar();
    calcularPorcentagem();

    document.getElementById('novaFruta').value = '';
}

function listar(){
    const listarFrutasContainer = document.getElementById('listarFrutasContainer');
    listarFrutasContainer.innerHTML = '';

    frutas.forEach((fruta, index) => {
        listarFrutasContainer.innerHTML += `
            ${index + 1}. ${fruta} <br>
        `;
    });
}

function contar() {
    const contarFrutasContainer = document.getElementById('contarFrutasContainer');
    contarFrutasContainer.innerHTML = '';

    const contagem = frutas.reduce((contador, fruta) => {
        contador[fruta] = (contador[fruta] || 0) + 1;
        return contador;
    }, {});

    for (const [fruta, quantidade] of Object.entries(contagem)) {
        contarFrutasContainer.innerHTML += `${fruta}: ${quantidade} <br>`;
    }

    return contagem;
}

function calcularPorcentagem(){
    const porcentagemFrutasContainer = document.getElementById('porcentagemFrutasContainer');
    porcentagemFrutasContainer.innerHTML = '';

    const contagem = contar();

    for(const [fruta, quantidade] of Object.entries(contagem)){
        const porcentagem = (quantidade * 100) / frutas.length;
        porcentagemFrutasContainer.innerHTML += `
            ${fruta}: ${porcentagem.toFixed(2)}% <br>
        `;
    }
}

function alterar(){
    const posicaoFruta = document.getElementById("posicaoFruta").value;
    const frutaSubstituta = document.getElementById("frutaSubstituta").value.toUpperCase();

    if(!isNaN(posicaoFruta) && posicaoFruta >= 1 && posicaoFruta <= frutas.length){
        if(frutaSubstituta == 'M' || frutaSubstituta == 'B' || frutaSubstituta == 'L'){
            frutas[posicaoFruta-1] = frutaSubstituta;
            localStorage.setItem('frutas', JSON.stringify(frutas));
            alert(`${frutaSubstituta} adicionado com sucesso!`);
        }else if(frutaSubstituta == 'F'){
            document.getElementById('cadastroFrutas').style.display = 'none';
            document.getElementById('alterarFrutas').style.display = 'none';
        }else{
            alert(`${frutaSubstituta} é uma entrada inválida!`)
        }
    }else{
        alert(`${posicaoFruta} é uma entrada inválida!`)
    }

    listar();
    contar();
    calcularPorcentagem();

    document.getElementById('frutaSubstituta').value = '';
}