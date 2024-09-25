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

    const opcaoEditar = document.getElementById('opcaoEditar').value;
    const editarDadosContainer = document.getElementById('editarDadosContainer');
    editarDadosContainer.innerHTML = '';

    switch(true){
        case(opcaoEditar === 'Cliente'):
            formEditarCliente();
            break;
        case(opcaoEditar === 'Categoria'):
            formEditarCategoria();
            break;
        case(opcaoEditar === 'Produto'):
            formEditarProduto();
            break;
        case(opcaoEditar === 'Vendedor'):
            formEditarVendedor();
            break;
        case(opcaoEditar === 'Pedido'):
            formEditarPedido();
            break;
    }
}

function remover(){
    document.getElementById('cadastrarDados').style.display = 'none';
    document.getElementById('listarDados').style.display = 'none';
    document.getElementById('editarDados').style.display = 'none';
    document.getElementById('removerDados').style.display = 'block';

    const opcaoRemover = document.getElementById('opcaoRemover').value;
    const removerDadosContainer = document.getElementById('removerDadosContainer');
    removerDadosContainer.innerHTML = '';

    switch(true){
        case(opcaoRemover === 'Cliente'):
            formRemoverCliente();
            break;
        case(opcaoRemover === 'Categoria'):
            formRemoverCategoria();
            break;
        case(opcaoRemover === 'Produto'):
            formRemoverProduto();
            break;
        case(opcaoRemover === 'Vendedor'):
            formRemoverVendedor();
            break;
        case(opcaoRemover === 'Pedido'):
            formRemoverPedido();
            break;
    }
}