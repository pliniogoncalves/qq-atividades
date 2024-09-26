let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

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
                <input type="radio" id="clienteOrigemLoja" name="origem" value="Loja" required>
                <label for="clienteOrigemLoja">Loja</label>
                <input type="radio" id="clienteOrigemSite" name="origem" value="Site">
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
    const origemCliente = document.querySelector('input[name="origem"]').value;
    const scoreCliente = document.getElementById('scoreCliente').value;

    if (!nomeCliente || !dataCliente || !cpfCliente || !origemCliente || !scoreCliente) {
        alert("Por favor, preencha todos os campos e selecione a origem (Loja ou Site).");
        return;
    }

    const cliente = {
        nomeCliente,
        dataCliente,
        cpfCliente,
        origemCliente,
        scoreCliente
    };

    clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));

    document.getElementById('clienteFormCadastrar').reset();
    alert(`Cliente ${cliente.nomeCliente} Cadastrado com Sucesso!`);
}

function listarCliente(){
    const listarDadosContainer = document.getElementById('listarDadosContainer');
    listarDadosContainer.innerHTML = '';

    clientes.forEach((cliente, index) => {
        listarDadosContainer.innerHTML += `
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
                <input type="number" id="indexClienteEditar" oninput="preencherDadosEditarCliente()"><br>

                <label for="nomeClienteEditar">Nome: </label>
                <input type="text" id="nomeClienteEditar" required><br><br>

                <label for="dataClienteEditar">Data de Nascimento: </label>
                <input type="date" id="dataClienteEditar" required><br><br>

                <label for="cpfClienteEditar">CPF: </label>
                <input type="text" id="cpfClienteEditar" required><br><br>

                <label>Origem:</label>
                <input type="radio" id="clienteOrigemLojaEditar" name="origem" value="Loja" required>
                <label for="clienteOrigemLojaEditar">Loja</label>
                <input type="radio" id="clienteOrigemSiteEditar" name="origem" value="Site">
                <label for="clienteOrigemSiteEditar">Site</label><br><br>

                <label for="scoreClienteEditar">Score: </label>
                <input type="number" id="scoreClienteEditar" required><br><br>

                <button type="button" onclick="editarCliente()">Editar</button>

        </form>
    `;
}

function preencherDadosEditarCliente() {
    const indexCliente = parseInt(document.getElementById('indexClienteEditar').value);
    
    if (!isNaN(indexCliente) && indexCliente >= 1 && indexCliente <= clientes.length) {
        const cliente = clientes[indexCliente - 1];
        
        document.getElementById('nomeClienteEditar').value = cliente.nomeCliente;
        document.getElementById('dataClienteEditar').value = cliente.dataCliente;
        document.getElementById('cpfClienteEditar').value = cliente.cpfCliente;
        document.getElementById('scoreClienteEditar').value = cliente.scoreCliente;
        
        if (cliente.origemCliente === "loja") {
            document.getElementById('clienteOrigemLojaEditar').checked = true;
        } else {
            document.getElementById('clienteOrigemSiteEditar').checked = true;
        }
    }
}

function editarCliente(){
    const indexCliente = parseInt(document.getElementById('indexClienteEditar').value);
    const nomeCliente = document.getElementById('nomeClienteEditar').value;
    const dataCliente = document.getElementById('dataClienteEditar').value;
    const cpfCliente = document.getElementById('cpfClienteEditar').value;
    const origemCliente = document.querySelector('input[name="origem"]').value;
    const scoreCliente = document.getElementById('scoreClienteEditar').value;

    if (isNaN(indexCliente) || indexCliente < 1 || indexCliente > clientes.length) {
        alert("ID inválido! Por favor, insira um ID válido.");
        return;
    }

    if (!nomeCliente || !dataCliente || !cpfCliente || !origemCliente || !scoreCliente) {
        alert("Por favor, preencha todos os campos e selecione a origem (Loja ou Site).");
        return;
    }

    const cliente = {
        nomeCliente,
        dataCliente,
        cpfCliente,
        origemCliente,
        scoreCliente
    };

    clientes[indexCliente-1] = cliente;
    localStorage.setItem('clientes', JSON.stringify(clientes));

    document.getElementById('clienteFormEditar').reset();
    alert(`Cliente ${cliente.nomeCliente} Editado com Sucesso!`);
}

function formRemoverCliente(){

    const removerDadosContainer = document.getElementById('removerDadosContainer');
    removerDadosContainer.innerHTML = '';

    removerDadosContainer.innerHTML += `
         <h3>Remover Clientes</h3>

        <label for="indexClienteRemover">Digite o ID do Cliente: </label>
        <input type="number" id="indexClienteRemover" oninput="mostrarDadosRemoverCliente()"><br>
        <div id="dadosClienteRemover"></div>
        <button onclick="removerCliente()">Remover</button

    `;
}

function mostrarDadosRemoverCliente() {
    const indexCliente = parseInt(document.getElementById('indexClienteRemover').value);
    const dadosClienteRemover = document.getElementById('dadosClienteRemover');
    
    if (!isNaN(indexCliente) && indexCliente >= 1 && indexCliente <= clientes.length) {
        const cliente = clientes[indexCliente - 1];
        dadosClienteRemover.innerHTML = `
            <h4>
                Nome: ${cliente.nomeCliente} <br>
                Data de Nascimento: ${cliente.dataCliente} <br>
                CPF: ${cliente.cpfCliente} <br>
                Origem: ${cliente.origemCliente} <br>
                Score: ${cliente.scoreCliente} <br>
            </h4>
        `;
    } else {
        dadosClienteRemover.innerHTML = "";
    }
}

function removerCliente() {
    const indexCliente = parseInt(document.getElementById('indexClienteRemover').value);

    if (isNaN(indexCliente) || indexCliente < 1 || indexCliente > clientes.length) {
        alert("ID inválido! Por favor, insira um ID válido.");
        return;
    }

    const confirmacao = confirm(`Tem certeza que deseja remover o cliente: ${clientes[indexCliente - 1].nomeCliente}?`);
    
    if (confirmacao) {
        clientes.splice(indexCliente - 1, 1);
        localStorage.setItem('clientes', JSON.stringify(clientes));

        alert('Cliente removido com sucesso!')

        document.getElementById('dadosClienteRemover').innerHTML = "";
    }
}