import { Cliente } from './Cliente.js';
import { Vendedor } from './Vendedor.js';
import { Produto } from './Produto.js';

export class Pedido {
    constructor(cliente, dataPedido, vendedor, produto, valorProduto){
        this.cliente = cliente;
        this.dataPedido = dataPedido;
        this.vendedor = vendedor;
        this.produto = produto;
        this.valorProduto = valorProduto;
    }

    salvarPedido() {
        let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        pedidos.push(this);
        localStorage.setItem('pedidos', JSON.stringify(pedidos));

        return(`Pedido ${pedidos.length} cadastrado com sucesso!`);
    }

    static listarPedido() {
        const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        return pedidos;
    }

    static editarPedido(index, pedidoAtualizado) {
        let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        if (index >= 0 && index < pedidos.length) {
            pedidos[index] = pedidoAtualizado;
            localStorage.setItem('pedidos', JSON.stringify(pedidos));
            return(`Pedido ${index+1} editado com sucesso!`);
        }
    }

    static removerPedido(index) {
        let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        if (index >= 0 && index < pedidos.length) {
            pedidos.splice(index, 1);
            localStorage.setItem('pedidos', JSON.stringify(pedidos));
            return('Pedido removido com sucesso!');
        } else {
            return('ID de Pedido inválido!');
        }
    }
}