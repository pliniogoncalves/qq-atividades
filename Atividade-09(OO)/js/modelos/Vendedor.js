export class Vendedor{
    constructor(nome, matricula){
        this.nome = nome;
        this.matricula = matricula;
    }

    salvarVendedor() {
        let vendedores = JSON.parse(localStorage.getItem('vendedores')) || [];
        vendedores.push(this);
        localStorage.setItem('vendedores', JSON.stringify(vendedores));

        return(`vendedor ${this.nome} cadastrado com sucesso!`);
    }

    static listarVendedor() {
        const vendedores = JSON.parse(localStorage.getItem('vendedores')) || [];
        return vendedores;
    }

    static editarVendedor(index, vendedorAtualizado) {
        let vendedores = JSON.parse(localStorage.getItem('vendedores')) || [];
        if (index >= 0 && index < vendedores.length) {
            vendedores[index] = vendedorAtualizado;
            localStorage.setItem('vendedores', JSON.stringify(vendedores));
            return(`Vendedor ${vendedorAtualizado.nome} editado com sucesso!`);
        }
    }

    static removerVendedor(index) {
        let vendedores = JSON.parse(localStorage.getItem('vendedores')) || [];
        if (index >= 0 && index < vendedores.length) {
            vendedores.splice(index, 1);
            localStorage.setItem('vendedores', JSON.stringify(vendedores));
            return('Vendedor removido com sucesso!');
        } else {
            return('ID de Vendedor inválido!');
        }
    }
}