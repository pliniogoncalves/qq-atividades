import { Categoria } from '../modelos/Categoria.js';

export function formCadastrarCategoria(){
  
        const cadastrarDadosContainer = document.getElementById('cadastrarDadosContainer');
        cadastrarDadosContainer.innerHTML = '';

        cadastrarDadosContainer.innerHTML += `
            <h3>Cadastrar Categoria</h3>
            
            <form id="categoriaFormCadastrar">

                <label for="nomeCategoria">Nome: </label>
                <input type="text" id="nomeCategoria" required><br><br>

                <button id="buttonCadastrar" type="button" onclick="cadastrarCategoria()">Cadastrar</button>

            </form>
        `;
}

window.cadastrarCategoria = function(){
    const nomeCategoria = document.getElementById('nomeCategoria').value;

    if (!nomeCategoria) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const novaCategoria = new Categoria(nomeCategoria);
    const mensagem = novaCategoria.salvarCategoria();

    alert(mensagem);

    document.querySelector('form').reset();

}

export function listarCategoria(){
    const listarDadosContainer = document.getElementById('listarDadosContainer');
    listarDadosContainer.innerHTML = '';

    categorias.forEach((categoria, index) => {
        listarDadosContainer.innerHTML += `
            <h4>
                Categoria ID ${index + 1} <br>
                Nome: ${categoria.nomeCategoria} <br>
            </h4>
        `;
    })
}

export function formEditarCategoria(){

    const editarDadosContainer = document.getElementById('editarDadosContainer');
    editarDadosContainer.innerHTML = '';

    editarDadosContainer.innerHTML += `
        <h3>Editar Categorias</h3>

        <form id="categoriaFormEditar">

                <label for="indexCategoriaEditar">Digite o ID da Categoria: </label>
                <input type="number" id="indexCategoriaEditar" oninput="preencherDadosEditarCategoria()"><br>

                <label for="nomeCategoriaEditar">Nome: </label>
                <input type="text" id="nomeCategoriaEditar" required><br><br>

                <button id="buttonEditar" type="button" onclick="editarCategoria()">Editar</button>

        </form>
    `;
}

window.preencherDadosEditarCategoria = function() {
    const indexCategoria = parseInt(document.getElementById('indexCategoriaEditar').value);
    
    if (!isNaN(indexCategoria) && indexCategoria >= 1 && indexCategoria <= categorias.length) {
        const categoria = categorias[indexCategoria - 1];

        document.getElementById('nomeCategoriaEditar').value = categoria.nomeCategoria;
    }          
        
}

window.editarCategoria = function(){
    const indexCategoria = parseInt(document.getElementById('indexCategoriaEditar').value);
    const nomeCategoria = document.getElementById('nomeCategoriaEditar').value;

    if (isNaN(indexCategoria) || indexCategoria < 1 || indexCategoria > categorias.length) {
        alert("ID inválido! Por favor, insira um ID válido.");
        return;
    }

    if (!nomeCategoria) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const categoria = {
        nomeCategoria
    };

    categorias[indexCategoria-1] = categoria;
    localStorage.setItem('categorias', JSON.stringify(categorias));

    document.getElementById('categoriaFormEditar').reset();
    alert(`Categoria ${categoria.nomeCategoria} Editado com Sucesso!`);
}

export function formRemoverCategoria(){

    const removerDadosContainer = document.getElementById('removerDadosContainer');
    removerDadosContainer.innerHTML = '';

    removerDadosContainer.innerHTML += `
         <h3>Remover Categorias</h3>

        <label for="indexCategoriaRemover">Digite o ID da Categoria: </label>
        <input type="number" id="indexCategoriaRemover" oninput="mostrarDadosRemoverCategoria()"><br>
        <div id="dadosCategoriaRemover"></div>
        <button id="buttonRemover" onclick="removerCategoria()">Remover</button

    `;
}

window.mostrarDadosRemoverCategoria = function() {
    const indexCategoria = parseInt(document.getElementById('indexCategoriaRemover').value);
    const dadosCategoriaRemover = document.getElementById('dadosCategoriaRemover');
    
    if (!isNaN(indexCategoria) && indexCategoria >= 1 && indexCategoria <= categorias.length) {
        const categoria = categorias[indexCategoria - 1];
        dadosCategoriaRemover.innerHTML = `
            <h4>
                Nome: ${categoria.nomeCategoria} <br>
            </h4>
        `;
    } else {
        dadosCategoriaRemover.innerHTML = "";
    }
}

window.removerCategoria = function() {
    const indexCategoria = parseInt(document.getElementById('indexCategoriaRemover').value);

    if (isNaN(indexCategoria) || indexCategoria < 1 || indexCategoria > categorias.length) {
        alert("ID inválido! Por favor, insira um ID válido.");
        return;
    }

    const confirmacao = confirm(`Tem certeza que deseja remover a categoria: ${categorias[indexCategoria - 1].nomeCategoria}?`);
    
    if (confirmacao) {
        categorias.splice(indexCategoria - 1, 1);
        localStorage.setItem('categorias', JSON.stringify(categorias));

        alert('Categoria removida com sucesso!')

        document.getElementById('dadosCategoriaRemover').innerHTML = "";
    }
}