// Crie uma função que receba um número e retorne se ele é par ou ímpar.
function parOuImpar(number) {
  let tipo = "";
  let rest = number % 2;

  if (rest === 0) {
    tipo = "Par";
  } else {
    tipo = "Impar";
  }
  return tipo;
}

console.log(parOuImpar(2));