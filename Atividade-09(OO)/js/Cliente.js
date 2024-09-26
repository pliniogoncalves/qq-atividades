export class Cliente {
    constructor(nome, dataNascimento, cpf, origem, score) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.origem = origem;
        this.score = score;
    }


atualizarScore(novoScore) {
    this.score = novoScore;
  }

}
