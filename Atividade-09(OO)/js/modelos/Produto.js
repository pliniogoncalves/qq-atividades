import { Categoria } from './Categoria.js';

export class Produto{
    constructor(nome, valor, categoria){
        this.nome = nome;
        this.valor = valor;
        this.categoria = categoria;
    }

    salvarProduto() {
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        produtos.push(this);
        localStorage.setItem('produtos', JSON.stringify(produtos));

        return(`Produto ${this.nome} cadastrado com sucesso!`);
    }

    static listarProduto() {
        const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        return produtos;
    }

    static editarProduto(index, produtoAtualizado) {
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        if (index >= 0 && index < produtos.length) {
            produtos[index] = produtoAtualizado;
            localStorage.setItem('produtos', JSON.stringify(produtos));
            return(`Produto ${produtoAtualizado.nome} editado com sucesso!`);
        }
    }

    static removerProduto(index) {
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        if (index >= 0 && index < produtos.length) {
            produtos.splice(index, 1);
            localStorage.setItem('produtos', JSON.stringify(produtos));
            return('Produto removido com sucesso!');
        } else {
            return('ID de Produto inválido!');
        }
    }
}