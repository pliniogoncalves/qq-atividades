import { 
    formCadastrarCliente, 
    listarClientes, 
    formEditarCliente, 
    formRemoverCliente 
} from './js/controllers/clienteController.js';

import { 
    formCadastrarCategoria, 
    listarCategoria, 
    formEditarCategoria, 
    formRemoverCategoria 
} from './js/controllers/categoriaController.js';

import { 
    formCadastrarVendedor, 
    listarVendedor, 
    formEditarVendedor, 
    formRemoverVendedor 
} from './js/controllers/vendedorController.js';

import { 
    formCadastrarProduto, 
    listarProduto, 
    formEditarProduto, 
    formRemoverProduto 
} from './js/controllers/produtoController.js';


import { 
    formCadastrarPedido, 
    listarPedido, 
    formEditarPedido, 
    formRemoverPedido 
} from './js/controllers/pedidoController.js';


window.cadastrar = function(){
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

window.listar = function(){
    document.getElementById('cadastrarDados').style.display = 'none';
    document.getElementById('listarDados').style.display = 'block';
    document.getElementById('editarDados').style.display = 'none';
    document.getElementById('removerDados').style.display = 'none';

    const opcaoListar = document.getElementById('opcaoListar').value;
    const listarDadosContainer = document.getElementById('listarDadosContainer');
    listarDadosContainer.innerHTML = '';

    switch(true){
        case(opcaoListar === 'Cliente'):
            listarClientes();
            break;
        case(opcaoListar === 'Categoria'):
            listarCategoria();
            break;
        case(opcaoListar === 'Produto'):
            listarProduto();
            break;
        case(opcaoListar === 'Vendedor'):
            listarVendedor();
            break;
        case(opcaoListar === 'Pedido'):
            listarPedido();
            break;
    }
}

window.editar = function(){
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

window.remover = function(){
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