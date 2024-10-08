let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

function formCadastrarPedido(){
    const cadastrarDadosContainer = document.getElementById('cadastrarDadosContainer');
    cadastrarDadosContainer.innerHTML = '';

    cadastrarDadosContainer.innerHTML += `
        <h3>Cadastrar Pedido</h3>
            
        <form id="pedidoFormCadastrar">

            <label for="nomeClientePedido">Cliente: </label>
            <select id="nomeClientePedido"></select><br><br>

            <label for="dataPedido">Data do Pedido: </label>
            <input type="date" id="dataPedido" required><br><br>

            <label for="nomeVendedorPedido">Vendedor: </label>
            <select id="nomeVendedorPedido"></select><br><br>

            <label for="nomeProdutoPedido">Produto: </label>
            <select id="nomeProdutoPedido"></select><br><br>

            <label for="valorProdutoPedido">Valor do Produto: </label>
            <span id="valorProdutoPedido"></span><br><br>

            <button type="button" onclick="cadastrarPedido()">Cadastrar</button>

        </form>
    `;

    preencherSelectPedido();
}

function preencherSelectPedido(editar = false){
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    const nomeClientePedido = document.getElementById(editar? 'nomeClientePedidoEditar':'nomeClientePedido');
    nomeClientePedido.innerHTML = '';

    clientes.forEach((cliente, index) => {
        const option = document.createElement('option');
        option.value = index + 1; 
        option.textContent = cliente.nomeCliente;
        nomeClientePedido.appendChild(option);
    });

    const vendedores = JSON.parse(localStorage.getItem('vendedores')) || [];
    const nomeVendedorPedido = document.getElementById(editar? 'nomeVendedorPedidoEditar':'nomeVendedorPedido');
    nomeVendedorPedido.innerHTML = '';

    vendedores.forEach((vendedor, index) => {
        const option = document.createElement('option');
        option.value = index + 1; 
        option.textContent = vendedor.nomeVendedor;
        nomeVendedorPedido.appendChild(option);
    });

    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const nomeProdutoPedido = document.getElementById(editar? 'nomeProdutoPedidoEditar':'nomeProdutoPedido');
    const valorProdutoPedido = document.getElementById(editar? 'valorProdutoPedidoEditar':'valorProdutoPedido');
    valorProdutoPedido.textContent = `R$${produtos[0].valorProduto}`;
    nomeProdutoPedido.innerHTML = '';

    produtos.forEach((produto, index) => {
        const option = document.createElement('option');
        option.value = index +1; 
        option.textContent = produto.nomeProduto;
        nomeProdutoPedido.appendChild(option);
    });

    nomeProdutoPedido.addEventListener('change', (event) => {
        const indexSelecionado = event.target.value - 1;
        const produtoSelecionado = produtos[indexSelecionado];
        
        if (produtoSelecionado) {
            valorProdutoPedido.textContent = produtoSelecionado.valorProduto;
        }
    });
}

function cadastrarPedido(){
    const nomeClientePedido = document.getElementById('nomeClientePedido').value;
    const dataPedido = document.getElementById('dataPedido').value;
    const nomeVendedorPedido = document.getElementById('nomeVendedorPedido').value;
    const nomeProdutoPedido = document.getElementById('nomeProdutoPedido').value;
    const valorProdutoPedido = document.getElementById('valorProdutoPedido').textContent;

    if (!nomeClientePedido || !dataPedido || !nomeVendedorPedido || !nomeProdutoPedido || !valorProdutoPedido) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const pedido = {
        nomeClientePedido,
        dataPedido,
        nomeVendedorPedido,
        nomeProdutoPedido,
        valorProdutoPedido
    };

    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    document.getElementById('pedidoFormCadastrar').reset();
    alert(`Pedido Cadastrado com Sucesso!`);
}

function listarPedido(){
    const listarDadosContainer = document.getElementById('listarDadosContainer');
    listarDadosContainer.innerHTML = '';

    pedidos.forEach((pedido, index) => {
        listarDadosContainer.innerHTML += `
            <h4>
                Pedido ID ${index + 1} <br>
                Nome CLiente: ${pedido.nomeClientePedido} <br>
                Data do Pedido: ${pedido.dataPedido} <br>
                Vendedor: ${pedido.nomeVendedorPedido} <br>
                Produto: ${pedido.nomeProdutoPedido} <br>
                Valor do Produto: ${pedido.valorProdutoPedido} <br>
            </h4>
        `;
    })
}

function formEditarPedido(){

    const editarDadosContainer = document.getElementById('editarDadosContainer');
    editarDadosContainer.innerHTML = '';

    editarDadosContainer.innerHTML += `
        <h3>Editar Pedidos</h3>

        <form id="pedidoFormEditar">

            <label for="indexPedidoEditar">Digite o ID do Pedido: </label>
            <input type="number" id="indexPedidoEditar" oninput="preencherDadosEditarPedido()"><br>

            <label for="nomeClientePedidoEditar">Cliente: </label>
            <select id="nomeClientePedidoEditar"></select><br><br>

            <label for="dataPedidoEditar">Data do Pedido: </label>
            <input type="date" id="dataPedidoEditar" required><br><br>

            <label for="nomeVendedorPedidoEditar">Vendedor: </label>
            <select id="nomeVendedorPedidoEditar"></select><br><br>

            <label for="nomeProdutoPedidoEditar">Produto: </label>
            <select id="nomeProdutoPedidoEditar"></select><br><br>

            <label for="valorProdutoPedidoEditar">Valor do Produto: </label>
            <span id="valorProdutoPedidoEditar"></span><br><br>

            <button type="button" onclick="editarPedido()">Editar</button>

        </form>
    `;
    preencherSelectPedido(true);
}

function preencherDadosEditarPedido() {
    const indexPedido = parseInt(document.getElementById('indexPedidoEditar').value);
    
    if (!isNaN(indexPedido) && indexPedido >= 1 && indexPedido <= pedidos.length) {
        const pedido = pedidos[indexPedido - 1];
        
        document.getElementById('nomeClientePedidoEditar').value = pedido.nomeClientePedido;
        document.getElementById('dataPedidoEditar').value = pedido.dataPedido;
        document.getElementById('nomeVendedorPedidoEditar').value = pedido.nomeVendedorPedido;
        document.getElementById('nomeProdutoPedidoEditar').value = pedido.nomeProdutoPedido;
        document.getElementById('valorProdutoPedidoEditar').textContent = pedido.valorProdutoPedido;
        
    }
}

function editarPedido(){
    const indexPedido = parseInt(document.getElementById('indexPedidoEditar').value);
    const nomeClientePedido = document.getElementById('nomeClientePedidoEditar').value;
    const dataPedido = document.getElementById('dataPedidoEditar').value;
    const nomeVendedorPedido = document.getElementById('nomeVendedorPedidoEditar').value;
    const nomeProdutoPedido = document.getElementById('nomeProdutoPedidoEditar').value;
    const valorProdutoPedido = document.getElementById('valorProdutoPedidoEditar').textContent;

    if (isNaN(indexPedido) || indexPedido < 1 || indexPedido > pedidos.length) {
        alert("ID inválido! Por favor, insira um ID válido.");
        return;
    }

    if (!nomeClientePedido || !dataPedido || !nomeVendedorPedido || !nomeProdutoPedido) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const pedido = {
        nomeClientePedido,
        dataPedido,
        nomeVendedorPedido,
        nomeProdutoPedido,
        valorProdutoPedido
    };

    pedidos[indexPedido-1] = pedido;
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    document.getElementById('pedidoFormEditar').reset();
    alert(`Pedido Editado com Sucesso!`);
}

function formRemoverPedido(){

    const removerDadosContainer = document.getElementById('removerDadosContainer');
    removerDadosContainer.innerHTML = '';

    removerDadosContainer.innerHTML += `
        <h3>Remover Pedidos</h3>

        <label for="indexPedidoRemover">Digite o ID do Pedido: </label>
        <input type="number" id="indexPedidoRemover" oninput="mostrarDadosRemoverPedido()"><br>
        <div id="dadosPedidoRemover"></div>
        <button onclick="removerPedido()">Remover</button
    `;
}

function mostrarDadosRemoverPedido() {
    const indexPedido = parseInt(document.getElementById('indexPedidoRemover').value);
    const dadosPedidoRemover = document.getElementById('dadosPedidoRemover');
    
    if (!isNaN(indexPedido) && indexPedido >= 1 && indexPedido <= pedidos.length) {
        const pedido = pedidos[indexPedido - 1];
        dadosPedidoRemover.innerHTML = `
             <h4>
                Pedido ID ${indexPedido} <br>
                Nome CLiente: ${pedido.nomeClientePedido} <br>
                Data do Pedido: ${pedido.dataPedido} <br>
                Vendedor: ${pedido.nomeVendedorPedido} <br>
                Produto: ${pedido.nomeProdutoPedido} <br>
                Valor do Produto: ${pedido.valorProdutoPedido} <br>
            </h4>
        `;
    } else {
        dadosPedidoRemover.innerHTML = "";
    }
}

function removerPedido() {
    const indexPedido = parseInt(document.getElementById('indexPedidoRemover').value);

    if (isNaN(indexPedido) || indexPedido < 1 || indexPedido > pedidos.length) {
        alert("ID inválido! Por favor, insira um ID válido.");
        return;
    }

    const confirmacao = confirm(`Tem certeza que deseja remover o Pedido: ${indexPedido}?`);
    
    if (confirmacao) {
        pedidos.splice(indexPedido - 1, 1);
        localStorage.setItem('pedidos', JSON.stringify(pedidos));

        alert('Pedido removido com sucesso!')

        document.getElementById('dadosPedidoRemover').innerHTML = "";
    }
}