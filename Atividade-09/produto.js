let produtos = [];

function formCadastrarProduto(){
    const cadastrarDadosContainer = document.getElementById('cadastrarDadosContainer');
        cadastrarDadosContainer.innerHTML = '';

        cadastrarDadosContainer.innerHTML += `
            <h3>Cadastrar Produto</h3>
            <h2>teste</h2>
        `;
}

function listar(){
    document.getElementById('adicionarDados').style.display = 'none';
    document.getElementById('listarDados').style.display = 'block';
    document.getElementById('editarDados').style.display = 'none';
    document.getElementById('removerDados').style.display = 'none';
}

function editar(){
    document.getElementById('adicionarDados').style.display = 'none';
    document.getElementById('listarDados').style.display = 'none';
    document.getElementById('editarDados').style.display = 'block';
    document.getElementById('removerDados').style.display = 'none';
}

function remover(){
    document.getElementById('adicionarDados').style.display = 'none';
    document.getElementById('listarDados').style.display = 'none';
    document.getElementById('editarDados').style.display = 'none';
    document.getElementById('removerDados').style.display = 'block';
}