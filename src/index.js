const Aluno = require('./src/aluno');
const Turma = require('./src/turma');
const TurmaPresencial = require('./src/turmaPresencial');

const aluno1 = new Aluno('João Silva', 'joaosilva', 123456);
aluno1.adicionarNota(8);
aluno1.adicionarNota(9);

const aluno2 = new Aluno('Maria Oliveira', 'mariaoliveira', 654321);
aluno2.adicionarNota(7);
aluno2.adicionarNota(10);

const turma = new Turma('Turma A', [aluno1, aluno2]);

console.log(aluno1.aprovado()); // true
console.log(aluno2.aprovado()); // true
console.log(turma.aprovacaoMedia()); // true

const turmaPresencial = new TurmaPresencial('Turma B', [aluno1, aluno2], 80);

console.log(turmaPresencial.aprovacaoPresencial()); // true