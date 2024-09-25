let clientes = [];

function adicionarCliente(){
  
        const adicionarDadosContainer = document.getElementById('adicionarDadosContainer');
        adicionarDadosContainer.innerHTML = '';

        adicionarDadosContainer.innerHTML += `
            <h3>Adicionar Cliente</h3>
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