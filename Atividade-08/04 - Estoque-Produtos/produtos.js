/*
Construa uma solução em HTML e JavaScript que permita fazer o controle do estoque de 
produtos eletrônicos em uma loja. Os tipos de produtos são: 'C' para celulares, 'T' para 
televisores e 'N' para notebooks. A aplicação deve: 
. Aceitar entradas dos tipos de produtos. 
. Armazenar cada entrada em um array. 
. Exibir a lista atualizada de produtos e o total de cada tipo após cada entrada. 
. Calcular e exibir a porcentagem de cada tipo de produto sobre o total de itens inseridos. 
. Permitir alterar o tipo de produto armazenado em uma determinada posição do array. 
. Finalizar a inserção de dados quando o usuário digitar 'F'.
*/

let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

listar();
contar();
calcularPorcentagem();

function cadastrar(){
    const novoProduto = document.getElementById('novoProduto').value.toUpperCase();
    if(novoProduto == 'C' || novoProduto == 'T' || novoProduto == 'N'){
        produtos.push(novoProduto);
        localStorage.setItem('produtos', JSON.stringify(produtos));
        alert(`${novoProduto} adicionado com sucesso!`);
    }else if(novoProduto == 'F'){
        document.getElementById('cadastroProdutos').style.display = 'none';
        document.getElementById('alterarProdutos').style.display = 'none';
    }else{
        alert(`${novoProduto} é uma entrada inválida!`)
    }

    listar();
    contar();
    calcularPorcentagem();

    document.getElementById('novoProduto').value = '';
}

function listar(){
    const listarProdutosContainer = document.getElementById('listarProdutosContainer');
    listarProdutosContainer.innerHTML = '';

    produtos.forEach((produto, index) => {
        listarProdutosContainer.innerHTML += `
            ${index + 1}. ${produto} <br>
        `;
    });
}

function contar() {
    const contarProdutosContainer = document.getElementById('contarProdutosContainer');
    contarProdutosContainer.innerHTML = '';

    const contagem = produtos.reduce((contador, produto) => {
        contador[produto] = (contador[produto] || 0) + 1;
        return contador;
    }, {});

    for (const [produto, quantidade] of Object.entries(contagem)) {
        contarProdutosContainer.innerHTML += `${produto}: ${quantidade} <br>`;
    }

    return contagem;
}

function calcularPorcentagem(){
    const porcentagemProdutosContainer = document.getElementById('porcentagemProdutosContainer');
    porcentagemProdutosContainer.innerHTML = '';

    const contagem = contar();

    for(const [produto, quantidade] of Object.entries(contagem)){
        const porcentagem = (quantidade * 100) / produtos.length;
        porcentagemProdutosContainer.innerHTML += `
            ${produto}: ${porcentagem.toFixed(2)}% <br>
        `;
    }
}

function alterar(){
    const posicaoProduto = document.getElementById("posicaoProduto").value;
    const produtoSubstituto = document.getElementById("produtoSubstituto").value.toUpperCase();

    if(!isNaN(posicaoProduto) && posicaoProduto >= 1 && posicaoProduto <= produtos.length){
        if(produtoSubstituto == 'C' || produtoSubstituto == 'T' || produtoSubstituto == 'N'){
            produtos[posicaoProduto-1] = produtoSubstituto;
            localStorage.setItem('produtos', JSON.stringify(produtos));
            alert(`${produtoSubstituto} adicionado com sucesso!`);
        }else if(produtoSubstituto == 'F'){
            document.getElementById('cadastroProdutos').style.display = 'none';
            document.getElementById('alterarProdutos').style.display = 'none';
        }else{
            alert(`${produtoSubstituto} é uma entrada inválida!`)
        }
    }else{
        alert(`${posicaoProduto} é uma entrada inválida!`)
    }

    listar();
    contar();
    calcularPorcentagem();

    document.getElementById('produtoSubstituto').value = '';
}