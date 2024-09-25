function cadastrar(){
    document.getElementById('cadastrarDados').style.display = 'block';
    document.getElementById('listarDados').style.display = 'none';
    document.getElementById('editarDados').style.display = 'none';
    document.getElementById('removerDados').style.display = 'none';
    
    const opcaoCadastrar = document.getElementById('opcaoCadastrar').value;
    const cadastrarDadosContainer = document.getElementById('cadastrarDadosContainer');
    cadastrarDadosContainer.innerHTML = '';

    switch(true){
        case(opcaoCadastrar === 'Cliente'):
            formCadastrarCliente();
            break;
        case(opcaoCadastrar === 'Categoria'):
            formCadastrarCategoria();
            break;
        case(opcaoCadastrar === 'Produto'):
            formCadastrarProduto();
            break;
        case(opcaoCadastrar === 'Vendedor'):
            formCadastrarVendedor();
            break;
        case(opcaoCadastrar === 'Pedido'):
            formCadastrarPedido();
            break;
    }
}

function listar(){
    document.getElementById('cadastrarDados').style.display = 'none';
    document.getElementById('listarDados').style.display = 'block';
    document.getElementById('editarDados').style.display = 'none';
    document.getElementById('removerDados').style.display = 'none';

    const opcaoListar = document.getElementById('opcaoListar').value;
    const listarDadosContainer = document.getElementById('listarDadosContainer');
    listarDadosContainer.innerHTML = '';

    switch(true){
        case(opcaoListar === 'Cliente'):
            listarCliente();
            break;
        case(opcaoListar === 'Categoria'):
            listarCategoria();
            break;
        case(opcaoListar === 'Produto'):
            ListarProduto();
            break;
        case(opcaoListar === 'Vendedor'):
            listarVendedor();
            break;
        case(opcaoListar === 'Pedido'):
            listarPedido();
            break;
    }
}

function editar(){
    document.getElementById('cadastrarDados').style.display = 'none';
    document.getElementById('listarDados').style.display = 'none';
    document.getElementById('editarDados').style.display = 'block';
    document.getElementById('removerDados').style.display = 'none';
}

function remover(){
    document.getElementById('cadastrarDados').style.display = 'none';
    document.getElementById('listarDados').style.display = 'none';
    document.getElementById('editarDados').style.display = 'none';
    document.getElementById('removerDados').style.display = 'block';
}