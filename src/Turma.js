class Turma {
  constructor(nome, alunos) {
    this.nome = nome;
    this.alunos = alunos;
  }

  aprovacaoMedia() {
    // Cálculo da média da turma
    const mediaTurma = this.alunos.reduce((acc, aluno) => acc + aluno.aprovado(), 0) / this.alunos.length;

    // Regra de aprovação da turma
    return mediaTurma >= 7;
  }
}