class Aluno {
    constructor(nome, login, ra) {
      this.nome = nome;
      this.login = login;
      this.ra = ra;
      this.notas = [];
    }

    aprovado() {
      const media = this.notas.reduce((acc, nota) => acc + nota, 0) / this.notas.length;
      return media >= 7;
      }

      adicionarNota(nota) {
        this.notas.push(nota);
      }
    }
    