class TurmaPresencial extends Turma {
  constructor(nome, alunos, frequencia) {
    super(nome, alunos);
    this.frequencia = frequencia;
  }

  aprovacaoPresencial() {
    // Cálculo da média dos alunos com frequência mínima
    const alunosAprovados = this.alunos.filter((aluno) => aluno.frequencia >= 70);
    const mediaAprovados = alunosAprovados.reduce((acc, aluno) => acc + aluno.aprovado(), 0) / alunosAprovados.length;

    // Regra de aprovação da turma presencial
    return mediaAprovados >= 7;
  }
}