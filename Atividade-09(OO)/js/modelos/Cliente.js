export class Cliente {
    constructor(nome, dataNascimento, cpf, origem, score) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.origem = origem;
        this.score = score;
    }

    salvarClientes() {
        let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
        clientes.push(this);
        localStorage.setItem('clientes', JSON.stringify(clientes));

        return(`Cliente ${this.nome} cadastrado com sucesso!`);
    }

    static listarClientes() {
        const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
        return clientes;
    }

    static editarCliente(index, clienteAtualizado) {
        let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
        if (index >= 0 && index < clientes.length) {
            clientes[index] = clienteAtualizado;
            localStorage.setItem('clientes', JSON.stringify(clientes));
            alert('Cliente editado com sucesso!');
        }
    }

    static removerCliente(index) {
        let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
        if (index >= 0 && index < clientes.length) {
            clientes.splice(index, 1);
            localStorage.setItem('clientes', JSON.stringify(clientes));
            alert('Cliente removido com sucesso!');
        } else {
            alert('ID de cliente inválido!');
        }
    }
}
