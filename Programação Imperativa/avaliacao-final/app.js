const aluno = require('./modules/aluno')
const novoAluno = require('./modules/aluno')
const estudantes = require('./modules/estudantes')
const cursos = {
    nomeCurso: 'Programação Imperativa',
    notaAprovacao: 7,
    faltasMaximas: 8,
    listaEstudantes: estudantes,
    adicionarAlunos: function(nome, quantidadeFaltas, notas) {
        return this.listaEstudantes.push(new novoAluno(nome, quantidadeFaltas, notas))
    },
    resultadoFinal: function(aluno){
        if(aluno >= this.notaAprovacao && aluno <= this.faltasMaximas){
            return 'Aluno aprovado'
        }else{
            return 'Aluno reprovado'
        }
    },
    alunosResultado: function() {
        this.listaEstudantes.forEach(alunos => {
            return alunos
        })
    }
}


// Adicionar novo aluno
console.log(cursos.adicionarAlunos('Denis Galdino Lopes', 2, [2,4,6]))

// Exibir curso
console.log(cursos.alunosResultado())