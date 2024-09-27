export class Categoria {
    constructor(nome){
        this.nome = nome;
    }

salvarCategoria() {
    let categorias = JSON.parse(localStorage.getItem('categorias')) || [];
    categorias.push(this);
    localStorage.setItem('categorias', JSON.stringify(categorias));

    return(`Categoria ${this.nome} cadastrado com sucesso!`);
}

static listarCategorias() {
    const categorias = JSON.parse(localStorage.getItem('categorias')) || [];
    return categorias;
}

static editarCategoria(index, categoriaAtualizado) {
    let categorias = JSON.parse(localStorage.getItem('categorias')) || [];
    if (index >= 0 && index < categorias.length) {
        categorias[index] = categoriaAtualizado;
        localStorage.setItem('categorias', JSON.stringify(categorias));
        return(`Categoria ${categoriaAtualizado.nome} editado com sucesso!`);
    }
}

static removerCategoria(index) {
    let categorias = JSON.parse(localStorage.getItem('categorias')) || [];
    if (index >= 0 && index < categorias.length) {
        categorias.splice(index, 1);
        localStorage.setItem('categorias', JSON.stringify(categorias));
        return('Categoria removido com sucesso!');
    } else {
        return('ID de Categoria inválido!');
    }
}
}
