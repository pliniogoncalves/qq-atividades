import { Produto } from '../modelos/Produto.js';
import { Categoria } from '../modelos/Categoria.js';

export function formCadastrarProduto(){
  
        const cadastrarDadosContainer = document.getElementById('cadastrarDadosContainer');
        cadastrarDadosContainer.innerHTML = '';

        cadastrarDadosContainer.innerHTML += `
            <h3>Cadastrar Produto</h3>
            
            <form id="produtoFormCadastrar">

                <label for="nomeProduto">Nome: </label>
                <input type="text" id="nomeProduto" required><br><br>

                <label for="valorProduto">Valor: </label>
                <input type="number" id="valorProduto" required><br><br>

                <label for="categoriaProduto">Categoria:</label>
                 <select id="categoriaProduto"></select><br><br>

                <button id="buttonCadastrar" type="button" onclick="cadastrarProduto()">Cadastrar</button>

            </form>
        `;

        const categorias = Categoria.listarCategorias();
        const categoriaProduto = document.getElementById('categoriaProduto');
        categoriaProduto.innerHTML = '';

        categorias.forEach((categoria, index) => {
            const option = document.createElement('option');
            option.value = index + 1; 
            option.textContent = categoria.nome;
            categoriaProduto.appendChild(option);
        });
}

window.cadastrarProduto = function(){
    const nomeProduto = document.getElementById('nomeProduto').value;
    const valorProduto = document.getElementById('valorProduto').value;
    const categoriaProduto = document.getElementById('categoriaProduto').value;
    
    if (!nomeProduto || !valorProduto || !categoriaProduto) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

   const novoProduto = new Produto(nomeProduto, valorProduto,categoriaProduto);
   const mensagem = novoProduto.salvarProduto();
   alert(mensagem);

}

export function listarProduto(){
    const produtos = Produto.listarProduto();
    const listarDadosContainer = document.getElementById('listarDadosContainer');
    listarDadosContainer.innerHTML = '';

    produtos.forEach((produto, index) => {
        listarDadosContainer.innerHTML += `
            <h4>
                Produto ID ${index + 1} <br>
                Nome: ${produto.nome} <br>
                Valor: ${produto.valor} <br>
                Categoria: ${produto.categoria} <br>
            </h4>
            <br><hr><br>
        `;
    })
}

export function formEditarProduto(){

    const editarDadosContainer = document.getElementById('editarDadosContainer');
    editarDadosContainer.innerHTML = '';

    editarDadosContainer.innerHTML += `
        <h3>Editar Produtos</h3>

        <form id="produtoFormEditar">

                <label for="indexProdutoEditar">Digite o ID do Produto: </label>
                <input type="number" id="indexProdutoEditar" oninput="preencherDadosEditarProduto()"><br>

                <label for="nomeProdutoEditar">Nome: </label>
                <input type="text" id="nomeProdutoEditar" required><br><br>

                <label for="valorProdutoEditar">Valor: </label>
                <input type="number" id="valorProdutoEditar" required><br><br>

                <button id="buttonEditar" type="button" onclick="editarProduto()">Editar</button>

        </form>
    `;
}

window.preencherDadosEditarProduto = function() {
    const indexProduto = parseInt(document.getElementById('indexProdutoEditar').value);
    
    if (!isNaN(indexProduto) && indexProduto >= 1 && indexProduto <= produtos.length) {
        const produto = produtos[indexProduto - 1];
        
        document.getElementById('nomeProdutoEditar').value = produto.nomeProduto;
        document.getElementById('valorProdutoEditar').value = produto.valorProduto;
        
    }
}

window.editarProduto = function(){
    const indexProduto = parseInt(document.getElementById('indexProdutoEditar').value);
    const nomeProduto = document.getElementById('nomeProdutoEditar').value;
    const valorProduto = document.getElementById('valorProdutoEditar').value;

    if (isNaN(indexProduto) || indexProduto < 1 || indexProduto > produtos.length) {
        alert("ID inválido! Por favor, insira um ID válido.");
        return;
    }

    if (!nomeProduto || !valorProduto) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const produto = {
        nomeProduto,
        valorProduto
    };

    produtos[indexProduto-1] = produto;
    localStorage.setItem('produtos', JSON.stringify(produtos));

    document.getElementById('produtoFormEditar').reset();
    alert(`Produto ${produto.nomeProduto} Editado com Sucesso!`);
}

export function formRemoverProduto(){

    const removerDadosContainer = document.getElementById('removerDadosContainer');
    removerDadosContainer.innerHTML = '';

    removerDadosContainer.innerHTML += `
         <h3>Remover Produtos</h3>

        <label for="indexProdutoRemover">Digite o ID do Produto: </label>
        <input type="number" id="indexProdutoRemover" oninput="mostrarDadosRemoverProduto()"><br>
        <div id="dadosProdutoRemover"></div>
        <button id="buttonRemover" onclick="removerProduto()">Remover</button

    `;
}

window.mostrarDadosRemoverProduto = function() {
    const indexProduto = parseInt(document.getElementById('indexProdutoRemover').value);
    const dadosProdutoRemover = document.getElementById('dadosProdutoRemover');
    
    if (!isNaN(indexProduto) && indexProduto >= 1 && indexProduto <= produtos.length) {
        const produto = produtos[indexProduto - 1];
        dadosProdutoRemover.innerHTML = `
            <h4>
                Nome: ${produto.nomeProduto} <br>
                Valor: ${produto.valorProduto} <br>
            </h4>
        `;
    } else {
        dadosProdutoRemover.innerHTML = "";
    }
}

window.removerProduto = function() {
    const indexProduto = parseInt(document.getElementById('indexProdutoRemover').value);

    if (isNaN(indexProduto) || indexProduto < 1 || indexProduto > produtos.length) {
        alert("ID inválido! Por favor, insira um ID válido.");
        return;
    }

    const confirmacao = confirm(`Tem certeza que deseja remover o Produto: ${produtos[indexProduto - 1].nomeProduto}?`);
    
    if (confirmacao) {
        produtos.splice(indexProduto - 1, 1);
        localStorage.setItem('produtos', JSON.stringify(produtos));

        alert('Produto removido com sucesso!')

        document.getElementById('dadosProdutoRemover').innerHTML = "";
    }
}