/*
Construa uma solução em HTML e JavaScript que permita controlar o estoque de uma livraria.
Os gêneros de livros são: 'F' para ficção, 'NF' para não-ficção e 'T' para técnico. A aplicação deve:
. Aceitar entradas dos gêneros de livros.
. Armazenar cada entrada em um array.
. Exibir a lista atualizada de gêneros e o total de cada tipo de livro após cada entrada.
. Calcular e exibir a porcentagem de cada gênero sobre o total de livros inseridos.
. Permitir alterar o gênero de um livro em uma determinada posição do array.
. Finalizar a inserção de dados quando o usuário digitar 'F'.
*/

let livros = JSON.parse(localStorage.getItem('livros')) || [];

listar();
contar();
calcularPorcentagem();

function cadastrar(){
    const novoLivro = document.getElementById('novoLivro').value.toUpperCase();
    if(novoLivro == 'F' || novoLivro == 'NF' || novoLivro == 'T'){
        livros.push(novoLivro);
        localStorage.setItem('livros', JSON.stringify(livros));
        alert(`${novoLivro} adicionado com sucesso!`);
    }else if(novoLivro == 'X'){
        document.getElementById('cadastroLivros').style.display = 'none';
        document.getElementById('alterarLivros').style.display = 'none';
    }else{
        alert(`${novoLivro} é uma entrada inválida!`)
    }

    listar();
    contar();
    calcularPorcentagem();

    document.getElementById('novoLivro').value = '';
}

function listar(){
    const listarLivrosContainer = document.getElementById('listarLivrosContainer');
    listarLivrosContainer.innerHTML = '';

    livros.forEach((livro, index) => {
        listarLivrosContainer.innerHTML += `
            ${index + 1}. ${livro} <br>
        `;
    });
}

function contar() {
    const contarLivrosContainer = document.getElementById('contarLivrosContainer');
    contarLivrosContainer.innerHTML = '';

    const contagem = livros.reduce((contador, livro) => {
        contador[livro] = (contador[livro] || 0) + 1;
        return contador;
    }, {});

    for (const [livro, quantidade] of Object.entries(contagem)) {
        contarLivrosContainer.innerHTML += `${livro}: ${quantidade} <br>`;
    }

    return contagem;
}

function calcularPorcentagem(){
    const porcentagemLivrosContainer = document.getElementById('porcentagemLivrosContainer');
    porcentagemLivrosContainer.innerHTML = '';

    const contagem = contar();

    for(const [livro, quantidade] of Object.entries(contagem)){
        const porcentagem = (quantidade * 100) / livros.length;
        porcentagemLivrosContainer.innerHTML += `
            ${livro}: ${porcentagem.toFixed(2)}% <br>
        `;
    }
}

function alterar(){
    const posicaoLivro = document.getElementById("posicaoLivro").value;
    const livroSubstituto = document.getElementById("livroSubstituto").value.toUpperCase();

    if(!isNaN(posicaoLivro) && posicaoLivro >= 1 && posicaoLivro <= livros.length){
        if(livroSubstituto == 'F' || livroSubstituto == 'NF' || livroSubstituto == 'T'){
            livros[posicaoLivro-1] = livroSubstituto;
            localStorage.setItem('livros', JSON.stringify(livros));
            alert(`${livroSubstituto} adicionado com sucesso!`);
        }else if(livroSubstituto == 'X'){
            document.getElementById('cadastroLivros').style.display = 'none';
            document.getElementById('alterarLivros').style.display = 'none';
        }else{
            alert(`${livroSubstituto} é uma entrada inválida!`)
        }
    }else{
        alert(`${posicaoLivro} é uma entrada inválida!`)
    }

    listar();
    contar();
    calcularPorcentagem();

    document.getElementById('livroSubstituto').value = '';

}