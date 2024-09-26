import { Cliente } from './Cliente.js';
import { Categoria } from './Categoria.js';
import { Produto } from './Produto.js';
import { Vendedor } from './Vendedor.js';
import { Pedido } from './Pedido.js';

window.cadastrarCliente = function() {
    const nome = document.getElementById('nomeCliente').value;
    const dataNascimento = document.getElementById('dataNascimentoCliente').value;
    const cpf = document.getElementById('cpfCliente').value;
    const origem = document.getElementById('origemCliente').value;
    const score = document.getElementById('scoreCliente').value;

    const cliente = new Cliente(nome, dataNascimento, cpf, origem, score);
    
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    clientes.push(cliente);

    localStorage.setItem('clientes', JSON.stringify(clientes));


    alert('Cliente cadastrado com sucesso!');
}

window.listarClientes = function() {
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];;
    const container = document.getElementById('output');
    container.innerHTML = '';

    if (clientes.length === 0) {
        container.innerHTML = '<p>Nenhum cliente cadastrado.</p>';
        return;
    }

    clientes.forEach(cliente => {
        container.innerHTML += `
            <p>Nome: ${cliente.nome}</p>
            <p>CPF: ${cliente.cpf}</p>
            <p>Origem: ${cliente.origem}</p>
            <p>Score: ${cliente.score}</p>
            <hr>
        `;
    });
}

