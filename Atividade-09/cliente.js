let clientes = [];

function formCadastrarCliente(){
  
        const cadastrarDadosContainer = document.getElementById('cadastrarDadosContainer');
        cadastrarDadosContainer.innerHTML = '';

        cadastrarDadosContainer.innerHTML += `
            <h3>Cadastrar Cliente</h3>
            
            <form id="clienteForm">

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

    document.getElementById('clienteForm').reset();

    console.log(clientes);

    alert(`Cliente ${cliente.nomeCliente} Cadastrado com Sucesso!`);
}

function listarCliente(){
    const listarDadosContainer = document.getElementById('listarDadosContainer');
    listarDadosContainer.innerHTML = '';

    clientes.forEach((cliente, index) => {
        listarDadosContainer.innerHTML += `
            <h3>
                Cliente ${index + 1} <br>
                Nome: ${cliente.nomeCliente} <br>
                Data de Nascimento: ${cliente.dataCliente} <br>
                CPF: ${cliente.cpfCliente} <br>
                Origem: ${cliente.origemCliente} <br>
                Score: ${cliente.scoreCliente} <br>
            </h3>
        `;
    })
}

function editarCliente(){
    document.getElementById('adicionarDados').style.display = 'none';
    document.getElementById('listarDados').style.display = 'none';
    document.getElementById('editarDados').style.display = 'block';
    document.getElementById('removerDados').style.display = 'none';
}

function removerCliente(){
    document.getElementById('adicionarDados').style.display = 'none';
    document.getElementById('listarDados').style.display = 'none';
    document.getElementById('editarDados').style.display = 'none';
    document.getElementById('removerDados').style.display = 'block';
}