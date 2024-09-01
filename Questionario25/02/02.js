// Desenvolva um código que leia a nota de um aluno e exiba se ele foi aprovado (nota >= 6), reprovado(nota < 4) ou se está de recuperação (nota entre 4 e 6).

const Aprovado = (...array) => {
  let n = array.length;
  let soma = 0;

  for (i = 0; i < n; i++) {
    soma += array[i];
  }

  return soma / n;
};

let media = Aprovado(7, 5, 7, 5, 7, 5, 7, 5);

if (media >= 0 && media <= 10) {
  if (media >= 6) {
    console.log("Aprovado com media: ", media);
  } else {
    console.log("Reprovado com media: ", media);
  }
}
