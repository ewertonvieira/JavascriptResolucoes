// Crie uma função que receba um número e retorne a tabela de multiplicação desse número até 10.

function tabelaMultiplicacao(num) {
  for (i = 0; i <= 10; i++) {
    console.log(num, " x ", i, " = ", num * i);
  }
}

tabelaMultiplicacao(8);
