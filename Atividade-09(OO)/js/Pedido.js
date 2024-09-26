import { Cliente } from './Cliente.js';
import { Vendedor } from './Vendedor.js';
import { Produto } from './Produto.js';

class Pedido {
    constructor(cliente, dataPedido, vendedor, produto, valorProduto){
        this.cliente = cliente;
        this.dataPedido = dataPedido;
        this.vendedor = vendedor;
        this.produto = produto;
        this.valorProduto = valorProduto;
    }
}