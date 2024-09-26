let vendedores = JSON.parse(localStorage.getItem('vendedores')) || [];

function formCadastrarVendedor(){
  
        const cadastrarDadosContainer = document.getElementById('cadastrarDadosContainer');
        cadastrarDadosContainer.innerHTML = '';

        cadastrarDadosContainer.innerHTML += `
            <h3>Cadastrar Vendedor</h3>
            
            <form id="vendedorFormCadastrar">

                <label for="nomeVendedor">Nome: </label>
                <input type="text" id="nomeVendedor" required><br><br>

                <label for="matriculaVendedor">Matricula: </label>
                <input type="number" id="matriculaVendedor" required><br><br>

                <button type="button" onclick="cadastrarVendedor()">Cadastrar</button>

            </form>
        `;
}

function cadastrarVendedor(){
    const nomeVendedor = document.getElementById('nomeVendedor').value;
    const matriculaVendedor = document.getElementById('matriculaVendedor').value;

    if (!nomeVendedor || !matriculaVendedor) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const vendedor = {
        nomeVendedor,
        matriculaVendedor
    };

    vendedores.push(vendedor);
    localStorage.setItem('vendedores', JSON.stringify(vendedores));

    document.getElementById('vendedorFormCadastrar').reset();
    alert(`Vendedor ${vendedor.nomeVendedor} Cadastrado com Sucesso!`);
}

function listarVendedor(){
    const listarDadosContainer = document.getElementById('listarDadosContainer');
    listarDadosContainer.innerHTML = '';

    vendedores.forEach((vendedor, index) => {
        listarDadosContainer.innerHTML += `
            <h4>
                Vendedor ID ${index + 1} <br>
                Nome: ${vendedor.nomeVendedor} <br>
                matricula: ${vendedor.matriculaVendedor} <br>
            </h4>
        `;
    })
}

function formEditarVendedor(){

    const editarDadosContainer = document.getElementById('editarDadosContainer');
    editarDadosContainer.innerHTML = '';

    editarDadosContainer.innerHTML += `
        <h3>Editar Vendedores</h3>

        <form id="vendedorFormEditar">

                <label for="indexVendedorEditar">Digite o ID do Vendedor: </label>
                <input type="number" id="indexVendedorEditar" oninput="preencherDadosEditarVendedor()"><br>

                <label for="nomeVendedorEditar">Nome: </label>
                <input type="text" id="nomeVendedorEditar" required><br><br>

                <label for="matriculaVendedorEditar">Matricula: </label>
                <input type="number" id="matriculaVendedorEditar" required><br><br>

                <button type="button" onclick="editarVendedor()">Editar</button>

        </form>
    `;
}

function preencherDadosEditarVendedor() {
    const indexVendedor = parseInt(document.getElementById('indexVendedorEditar').value);
    
    if (!isNaN(indexVendedor) && indexVendedor >= 1 && indexVendedor <= vendedores.length) {
        const vendedor = vendedores[indexVendedor - 1];
        
        document.getElementById('nomeVendedorEditar').value = vendedor.nomeVendedor;
        document.getElementById('matriculaVendedorEditar').value = vendedor.matriculaVendedor;
        
    }
}

function editarVendedor(){
    const indexVendedor = parseInt(document.getElementById('indexVendedorEditar').value);
    const nomeVendedor = document.getElementById('nomeVendedorEditar').value;
    const matriculaVendedor = document.getElementById('matriculaVendedorEditar').value;

    if (isNaN(indexVendedor) || indexVendedor < 1 || indexVendedor > vendedores.length) {
        alert("ID inválido! Por favor, insira um ID válido.");
        return;
    }

    if (!nomeVendedor || !matriculaVendedor) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const vendedor = {
        nomeVendedor,
        matriculaVendedor
    };

    vendedores[indexVendedor-1] = vendedor;
    localStorage.setItem('vendedores', JSON.stringify(vendedores));

    document.getElementById('vendedorFormEditar').reset();
    alert(`Vendedor ${vendedor.nomeVendedor} Editado com Sucesso!`);
}

function formRemoverVendedor(){

    const removerDadosContainer = document.getElementById('removerDadosContainer');
    removerDadosContainer.innerHTML = '';

    removerDadosContainer.innerHTML += `
         <h3>Remover Vendedores</h3>

        <label for="indexVendedorRemover">Digite o ID do Vendedor: </label>
        <input type="number" id="indexVendedorRemover" oninput="mostrarDadosRemoverVendedor()"><br>
        <div id="dadosVendedorRemover"></div>
        <button onclick="removerVendedor()">Remover</button

    `;
}

function mostrarDadosRemoverVendedor() {
    const indexVendedor = parseInt(document.getElementById('indexVendedorRemover').value);
    const dadosVendedorRemover = document.getElementById('dadosVendedorRemover');
    
    if (!isNaN(indexVendedor) && indexVendedor >= 1 && indexVendedor <= vendedores.length) {
        const vendedor = vendedores[indexVendedor - 1];
        dadosVendedorRemover.innerHTML = `
            <h4>
                Nome: ${vendedor.nomeVendedor} <br>
                Matricula: ${vendedor.matriculaVendedor} <br>
            </h4>
        `;
    } else {
        dadosVendedorRemover.innerHTML = "";
    }
}

function removerVendedor() {
    const indexVendedor = parseInt(document.getElementById('indexVendedorRemover').value);

    if (isNaN(indexVendedor) || indexVendedor < 1 || indexVendedor > vendedores.length) {
        alert("ID inválido! Por favor, insira um ID válido.");
        return;
    }

    const confirmacao = confirm(`Tem certeza que deseja remover o Vendedor: ${vendedores[indexVendedor - 1].nomeVendedor}?`);
    
    if (confirmacao) {
        vendedores.splice(indexVendedor - 1, 1);
        localStorage.setItem('vendedores', JSON.stringify(vendedores));

        alert('Vendedor removido com sucesso!')

        document.getElementById('dadosVendedorRemover').innerHTML = "";
    }
}