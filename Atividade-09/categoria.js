let categorias = JSON.parse(localStorage.getItem('categorias')) || [];

function formCadastrarCategoria(){
  
        const cadastrarDadosContainer = document.getElementById('cadastrarDadosContainer');
        cadastrarDadosContainer.innerHTML = '';

        cadastrarDadosContainer.innerHTML += `
            <h3>Cadastrar Categoria</h3>
            
            <form id="categoriaFormCadastrar">

                <label for="nomeCategoria">Nome: </label>
                <input type="text" id="nomeCategoria" required><br><br>

                <button type="button" onclick="cadastrarCategoria()">Cadastrar</button>

            </form>
        `;
}

function cadastrarCategoria(){
    const nomeCategoria = document.getElementById('nomeCategoria').value;

    if (!nomeCategoria) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const categoria = {
        nomeCategoria
    };

    categorias.push(categoria);
    localStorage.setItem('categorias', JSON.stringify(categorias));

    document.getElementById('categoriaFormCadastrar').reset();
    alert(`Categoria ${categoria.nomeCategoria} Cadastrado com Sucesso!`);
}

function listarCategoria(){
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

function formEditarCategoria(){

    const editarDadosContainer = document.getElementById('editarDadosContainer');
    editarDadosContainer.innerHTML = '';

    editarDadosContainer.innerHTML += `
        <h3>Editar Categorias</h3>

        <form id="categoriaFormEditar">

                <label for="indexCategoriaEditar">Digite o ID da Categoria: </label>
                <input type="number" id="indexCategoriaEditar" oninput="preencherDadosEditarCategoria()"><br>

                <label for="nomeCategoriaEditar">Nome: </label>
                <input type="text" id="nomeCategoriaEditar" required><br><br>

                <button type="button" onclick="editarCategoria()">Editar</button>

        </form>
    `;
}

function preencherDadosEditarCategoria() {
    const indexCategoria = parseInt(document.getElementById('indexCategoriaEditar').value);
    
    if (!isNaN(indexCategoria) && indexCategoria >= 1 && indexCategoria <= categorias.length) {
        const categoria = categorias[indexCategoria - 1];

        document.getElementById('nomeCategoriaEditar').value = categoria.nomeCategoria;
    }          
        
}

function editarCategoria(){
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

function formRemoverCategoria(){

    const removerDadosContainer = document.getElementById('removerDadosContainer');
    removerDadosContainer.innerHTML = '';

    removerDadosContainer.innerHTML += `
         <h3>Remover Categorias</h3>

        <label for="indexCategoriaRemover">Digite o ID da Categoria: </label>
        <input type="number" id="indexCategoriaRemover" oninput="mostrarDadosRemoverCategoria()"><br>
        <div id="dadosCategoriaRemover"></div>
        <button onclick="removerCategoria()">Remover</button

    `;
}

function mostrarDadosRemoverCategoria() {
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

function removerCategoria() {
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