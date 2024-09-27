import { Cliente } from '../modelos/Cliente.js';

export function formCadastrarCliente() {
    const cadastrarDadosContainer = document.getElementById('cadastrarDadosContainer');
    cadastrarDadosContainer.innerHTML = `
        <form id="clienteForm">
            <label for="nomeCliente">Nome:</label>
            <input type="text" id="nomeCliente"><br>

            <label for="dataCliente">Data de Nascimento:</label>
            <input type="date" id="dataCliente"><br>

            <label for="cpfCliente">CPF:</label>
            <input type="text" id="cpfCliente"><br>

            <label for="origemCliente">Origem: </label>
            <select id="origemCliente">
                <option value="Loja">Loja</option>
                <option value="Site">Site</option>
            </select><br>

            <label for="scoreCliente">Score:</label>
            <input type="number" id="scoreCliente"><br><br>

            <button id="buttonCadastrar" type="button" onclick="cadastrarCliente()">Cadastrar</button>
        </form>
    `;
}

window.cadastrarCliente = function() {
    const nomeCliente = document.getElementById('nomeCliente').value;
    const dataCliente = document.getElementById('dataCliente').value;
    const cpfCliente = document.getElementById('cpfCliente').value;
    const origemCliente = document.getElementById('origemCliente').value;
    const scoreCliente = document.getElementById('scoreCliente').value;

    if (!nomeCliente || !dataCliente || !cpfCliente || !origemCliente || !scoreCliente) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const novoCliente = new Cliente(nomeCliente, dataCliente, cpfCliente, origemCliente, scoreCliente);
    novoCliente.salvarClientes();
}

export function listarClientes() {
    const clientes = Cliente.listarClientes();
    const listarDadosContainer = document.getElementById('listarDadosContainer');
    listarDadosContainer.innerHTML = '';

    clientes.forEach((cliente, index) => {
        listarDadosContainer.innerHTML += `
            <h4>
                Cliente ID ${index + 1} <br>
                Nome: ${cliente.nome} <br>
                Data de Nascimento: ${cliente.dataNascimento} <br>
                CPF: ${cliente.cpf} <br>
                Origem: ${cliente.origem} <br>
                Score: ${cliente.score} <br>
            </h4>
            <hr>
        `;
    });
}

export function formEditarCliente() {
    const editarDadosContainer = document.getElementById('editarDadosContainer');
    editarDadosContainer.innerHTML = '';

    editarDadosContainer.innerHTML += `
        <h3>Editar Clientes</h3>

        <form id="clienteFormEditar">
                <label for="indexClienteEditar">Digite o ID do cliente: </label>
                <input type="number" id="indexClienteEditar" oninput="preencherDadosEditarCliente()"><br>

                <label for="nomeClienteEditar">Nome: </label>
                <input type="text" id="nomeClienteEditar" required><br><br>

                <label for="dataClienteEditar">Data de Nascimento: </label>
                <input type="date" id="dataClienteEditar" required><br><br>

                <label for="cpfClienteEditar">CPF: </label>
                <input type="text" id="cpfClienteEditar" required><br><br>

                <label for="origemClienteEditar">Origem: </label>
                <select id="origemClienteEditar">
                    <option value="Loja">Loja</option>
                    <option value="Site">Site</option>
                </select><br>

                <label for="scoreClienteEditar">Score: </label>
                <input type="number" id="scoreClienteEditar" required><br><br>

                <button id="buttonEditar" type="button" onclick="editarCliente()">Editar</button>
        </form>
    `;
}

window.preencherDadosEditarCliente = function() {
    const indexCliente = parseInt(document.getElementById('indexClienteEditar').value);
    
    if (!isNaN(indexCliente) && indexCliente >= 1 && indexCliente <= Cliente.listarClientes().length) {
        const cliente = Cliente.listarClientes()[indexCliente - 1];
        
        document.getElementById('nomeClienteEditar').value = cliente.nome;
        document.getElementById('dataClienteEditar').value = cliente.dataNascimento;
        document.getElementById('cpfClienteEditar').value = cliente.cpf;
        document.getElementById('scoreClienteEditar').value = cliente.score;
        document.getElementById('origemClienteEditar').value = cliente.origem;
    }
}

window.editarCliente = function() {
    const indexCliente = parseInt(document.getElementById('indexClienteEditar').value) - 1;
    const nomeCliente = document.getElementById('nomeClienteEditar').value;
    const dataCliente = document.getElementById('dataClienteEditar').value;
    const cpfCliente = document.getElementById('cpfClienteEditar').value;
    const origemCliente = document.getElementById('origemClienteEditar').value;
    const scoreCliente = document.getElementById('scoreClienteEditar').value;

    if (!nomeCliente || !dataCliente || !cpfCliente || !origemCliente || !scoreCliente) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const clienteAtualizado = new Cliente(nomeCliente, dataCliente, cpfCliente, origemCliente, scoreCliente);
    Cliente.editarCliente(indexCliente, clienteAtualizado);
}

export function formRemoverCliente() {
    const removerDadosContainer = document.getElementById('removerDadosContainer');
    removerDadosContainer.innerHTML = '';

    removerDadosContainer.innerHTML += `
         <h3>Remover Clientes</h3>

        <label for="indexClienteRemover">Digite o ID do Cliente: </label>
        <input type="number" id="indexClienteRemover" oninput="mostrarDadosRemoverCliente()"><br>
        <div id="dadosClienteRemover"></div><br>
        <button id="buttonRemover" type="button" onclick="removerCliente()">Remover</button>
    `;
}

window.mostrarDadosRemoverCliente = function() {
    const indexCliente = parseInt(document.getElementById('indexClienteRemover').value);
    const dadosClienteRemover = document.getElementById('dadosClienteRemover');
    
    if (!isNaN(indexCliente) && indexCliente >= 1 && indexCliente <= Cliente.listarClientes().length) {
        const cliente = Cliente.listarClientes()[indexCliente - 1];
        dadosClienteRemover.innerHTML = `
            <h4>
                Nome: ${cliente.nome} <br>
                Data de Nascimento: ${cliente.dataNascimento} <br>
                CPF: ${cliente.cpf} <br>
                Origem: ${cliente.origem} <br>
                Score: ${cliente.score} <br>
            </h4>
        `;
    } else {
        dadosClienteRemover.innerHTML = "";
    }
}

window.removerCliente = function() {
    const indexCliente = parseInt(document.getElementById('indexClienteRemover').value) - 1;
    Cliente.removerCliente(indexCliente);

    document.getElementById('listarClientesContainer').innerHTML = '';
}
