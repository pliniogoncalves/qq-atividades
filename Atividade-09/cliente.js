let clientes = [];

function formCadastrarCliente(){
  
        const cadastrarDadosContainer = document.getElementById('cadastrarDadosContainer');
        cadastrarDadosContainer.innerHTML = '';

        cadastrarDadosContainer.innerHTML += `
            <h3>Cadastrar Cliente</h3>
            
            <form id="clienteFormCadastrar">

                <label for="nomeCliente">Nome: </label>
                <input type="text" id="nomeCliente" required><br><br>

                <label for="dataCliente">Data de Nascimento: </label>
                <input type="date" id="dataCliente" required><br><br>

                <label for="cpfCliente">CPF: </label>
                <input type="text" id="cpfCliente" required><br><br>

                <label>Origem:</label>
                <input type="radio" id="clienteOrigemLoja" name="origem" value="loja" required>
                <label for="clienteOrigemLoja">Loja</label>
                <input type="radio" id="clienteOrigemSite" name="origem" value="site">
                <label for="clienteOrigemSite">Site</label><br><br>

                <label for="scoreCliente">Score: </label>
                <input type="number" id="scoreCliente" required><br><br>

                <button type="button" onclick="cadastrarCliente()">Cadastrar</button>

            </form>
        `;
}

function cadastrarCliente(){
    const nomeCliente = document.getElementById('nomeCliente').value;
    const dataCliente = document.getElementById('dataCliente').value;
    const cpfCliente = document.getElementById('cpfCliente').value;
    const origemCliente = document.querySelector('input[name="origem"]:checked').value;
    const scoreCliente = document.getElementById('scoreCliente').value;

    const cliente = {nomeCliente, dataCliente, cpfCliente, origemCliente, scoreCliente};
    clientes.push(cliente);

    document.getElementById('clienteFormCadastrar').reset();

    console.log(clientes);

    alert(`Cliente ${cliente.nomeCliente} Cadastrado com Sucesso!`);
}

function listarCliente(){
    const listarDadosContainer = document.getElementById('listarDadosContainer');
    listarDadosContainer.innerHTML = '';

    clientes.forEach((cliente, index) => {
        listarDadosContainer.innerHTML += `
            <h3>Listar Clientes</h3>

            <h4>
                Cliente ID ${index + 1} <br>
                Nome: ${cliente.nomeCliente} <br>
                Data de Nascimento: ${cliente.dataCliente} <br>
                CPF: ${cliente.cpfCliente} <br>
                Origem: ${cliente.origemCliente} <br>
                Score: ${cliente.scoreCliente} <br>
            </h4>
        `;
    })
}

function formEditarCliente(){

    const editarDadosContainer = document.getElementById('editarDadosContainer');
    editarDadosContainer.innerHTML = '';

    editarDadosContainer.innerHTML += `
         <h3>Editar Clientes</h3>

        <form id="clienteFormEditar">

                <label for="indexClienteEditar">Digite o ID do cliente: </label>
                <input type="number" id="indexClienteEditar"><br>

                <label for="nomeClienteEditar">Nome: </label>
                <input type="text" id="nomeClienteEditar" required><br><br>

                <label for="dataClienteEditar">Data de Nascimento: </label>
                <input type="date" id="dataClienteEditar" required><br><br>

                <label for="cpfClienteEditar">CPF: </label>
                <input type="text" id="cpfClienteEditar" required><br><br>

                <label>Origem:</label>
                <input type="radio" id="clienteOrigemLojaEditar" name="origem" value="loja" required>
                <label for="clienteOrigemLojaEditar">Loja</label>
                <input type="radio" id="clienteOrigemSiteEditar" name="origem" value="site">
                <label for="clienteOrigemSiteEditar">Site</label><br><br>

                <label for="scoreClienteEditar">Score: </label>
                <input type="number" id="scoreClienteEditar" required><br><br>

                <button type="button" onclick="editarCliente()">Editar</button>

        </form>
    `;
}

function editarCliente(){
    const indexCliente = document.getElementById('indexClienteEditar').value;
    const nomeCliente = document.getElementById('nomeClienteEditar').value;
    const dataCliente = document.getElementById('dataClienteEditar').value;
    const cpfCliente = document.getElementById('cpfClienteEditar').value;
    const origemCliente = document.querySelector('input[name="origem"]:checked').value;
    const scoreCliente = document.getElementById('scoreClienteEditar').value;

    const cliente = {nomeCliente, dataCliente, cpfCliente, origemCliente, scoreCliente};
    console.log(cliente);
    console.log(clientes);

    clientes[indexCliente-1] = cliente;

    console.log(clientes);


    document.getElementById('clienteFormEditar').reset();

    alert(`Cliente ${cliente.nomeCliente} Editado com Sucesso!`);
}

function formRemoverCliente(){
    listarCliente();

    const removerDadosContainer = document.getElementById('removerDadosContainer');
    removerDadosContainer.innerHTML = '';

    removerDadosContainer.innerHTML += `
         <h3>Remover Clientes</h3>

        <label for="indexCliente">Digite o ID do cliente: </label>
        <input type="number" id="indexCliente">
    `;
}

function removerCliente(){

}