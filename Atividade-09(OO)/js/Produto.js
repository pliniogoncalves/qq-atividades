import { Categoria } from './Categoria.js';

export class Produto{
    constructor(nome, valor, categoria){
        this.nome = nome;
        this.valor = valor;
        this.categoria = categoria;
    }
}