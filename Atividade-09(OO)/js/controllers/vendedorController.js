import { Vendedor } from '../modelos/Vendedor.js';

export function formCadastrarVendedor(){
  
        const cadastrarDadosContainer = document.getElementById('cadastrarDadosContainer');
        cadastrarDadosContainer.innerHTML = '';

        cadastrarDadosContainer.innerHTML += `
            <h3>Cadastrar Vendedor</h3>
            
            <form id="vendedorFormCadastrar">

                <label for="nomeVendedor">Nome: </label>
                <input type="text" id="nomeVendedor" required><br><br>

                <label for="matriculaVendedor">Matricula: </label>
                <input type="number" id="matriculaVendedor" required><br><br>

                <button id="buttonCadastrar" type="button" onclick="cadastrarVendedor()">Cadastrar</button>

            </form>
        `;
}

window.cadastrarVendedor = function(){
    const nomeVendedor = document.getElementById('nomeVendedor').value;
    const matriculaVendedor = document.getElementById('matriculaVendedor').value;

    if (!nomeVendedor || !matriculaVendedor) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const novoVendedor = new Vendedor(nomeVendedor, matriculaVendedor);
    const mensagem = novoVendedor.salvarVendedor();
    alert(mensagem);

    document.querySelector('form').reset();
}

export function listarVendedor(){
    const vendedores = Vendedor.listarVendedor();
    const listarDadosContainer = document.getElementById('listarDadosContainer');
    listarDadosContainer.innerHTML = '';

    vendedores.forEach((vendedor, index) => {
        listarDadosContainer.innerHTML += `
            <h4>
                Vendedor ID ${index + 1} <br>
                Nome: ${vendedor.nome} <br>
                matricula: ${vendedor.matricula} <br>
            </h4>
            <br><hr><br>
        `;
    })
}

export function formEditarVendedor(){

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

                <button id="buttonEditar" type="button" onclick="editarVendedor()">Editar</button>

        </form>
    `;
}

window.preencherDadosEditarVendedor = function() {
    const indexVendedor = parseInt(document.getElementById('indexVendedorEditar').value);
    
    if (!isNaN(indexVendedor) && indexVendedor >= 1 && indexVendedor <= Vendedor.listarVendedor().length) {
        const vendedor = Vendedor.listarVendedor()[indexVendedor - 1];
        
        document.getElementById('nomeVendedorEditar').value = vendedor.nome;
        document.getElementById('matriculaVendedorEditar').value = vendedor.matricula;
        
    }
}

window.editarVendedor = function(){
    const indexVendedor = parseInt(document.getElementById('indexVendedorEditar').value)-1;
    const nomeVendedor = document.getElementById('nomeVendedorEditar').value;
    const matriculaVendedor = document.getElementById('matriculaVendedorEditar').value;

    if (isNaN(indexVendedor) || indexVendedor < 1 || indexVendedor > Vendedor.listarVendedor().length) {
        alert("ID inválido! Por favor, insira um ID válido.");
        return;
    }

    if (!nomeVendedor || !matriculaVendedor) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const vendedorAtualizado = new Vendedor(nomeVendedor, matriculaVendedor);
    const mensagem = Vendedor.editarVendedor(indexVendedor, vendedorAtualizado);
    alert(mensagem);

    document.getElementById('nomeVendedorEditar').value = '';
    document.getElementById('matriculaVendedorEditar').value = '';
}

export function formRemoverVendedor(){

    const removerDadosContainer = document.getElementById('removerDadosContainer');
    removerDadosContainer.innerHTML = '';

    removerDadosContainer.innerHTML += `
         <h3>Remover Vendedores</h3>

        <label for="indexVendedorRemover">Digite o ID do Vendedor: </label>
        <input type="number" id="indexVendedorRemover" oninput="mostrarDadosRemoverVendedor()"><br>
        <div id="dadosVendedorRemover"></div>
        <button id="buttonRemover" onclick="removerVendedor()">Remover</button

    `;
}

window.mostrarDadosRemoverVendedor = function() {
    const indexVendedor = parseInt(document.getElementById('indexVendedorRemover').value);
    const dadosVendedorRemover = document.getElementById('dadosVendedorRemover');
    
    if (!isNaN(indexVendedor) && indexVendedor >= 1 && indexVendedor <= Vendedor.listarVendedor().length) {
        const vendedor = Vendedor.listarVendedor()[indexVendedor - 1];
        dadosVendedorRemover.innerHTML = `
            <h4>
                Nome: ${vendedor.nome} <br>
                Matricula: ${vendedor.matricula} <br>
            </h4>
        `;
    } else {
        dadosVendedorRemover.innerHTML = "";
    }
}

window.removerVendedor = function() {
    const indexVendedor = parseInt(document.getElementById('indexVendedorRemover').value) -1;

    if (isNaN(indexVendedor) || indexVendedor < 1 || indexVendedor > Vendedor.listarVendedor().length) {
        alert("ID inválido! Por favor, insira um ID válido.");
        return;
    }

   const mensagem = Vendedor.removerVendedor(indexVendedor);
   alert(mensagem);

   document.getElementById('dadosVendedorRemover').innerHTML = '';
}