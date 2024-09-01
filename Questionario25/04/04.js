// Escreva um código que receba um número de 1 a 7 e exiba o nome do dia da semana correspondente (1 para "Segunda-feira", 2 para "Terça-feira", etc.). Se o número não estiver no intervalo de 1 a 7, exiba "Número inválido".

const dict = {
  1: "Domingo",
  2: "Segunda-Feira",
  3: "Terça-Feira",
  4: "Quarta-Feira",
  5: "Quinta-Feira",
  6: "Sexta-Feira",
  7: "Sabado",
};

let dia = 7;

if (dia > 0 && dia < 8) {
  console.log(dict[dia]);
} else {
  console.log("Valor Incorreto");
}
