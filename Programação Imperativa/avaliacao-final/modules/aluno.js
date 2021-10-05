const aluno = {
    nome: String,
    quantidadeFaltas: Number,
    notas: [Number],
    calcularMedia: function() {
        let soma = this.notas.reduce((resultado, nota) => resultado + nota);
        return soma / this.notas.length
    },
    faltas: function() {
        return ++this.quantidadeFaltas
    }
}

let novoAluno = function (nome, quantidadeFaltas, notas){
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
}

// // Exibir de faltas do aluno
// console.log('Número de faltas: ' + addFalta)

// // Média do aluno
// console.log('Média do aluno: ' + media)

module.exports = aluno
module.exports = novoAluno
