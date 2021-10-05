const alunos = require('./alunos')

const curso = {
    nomeCurso: String,
    notaAprovacao: Number,
    faltasMaxima: Number,
    listaEstudantes: [alunos],
    adicionarAluno: () => ++this.listaEstudantes

}
console.log(curso.adicionarAluno())