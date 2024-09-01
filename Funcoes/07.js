// Crie uma função que recebe um array de números e usa um loop foreach para imprimir "Par" se o número for par e "Ímpar" se o número for ímpar.

const parOuImpar = (...arraylist) => {
  arraylist.forEach((item) => {
    if (item % 2 === 0) {
      console.log(item, "é Par!");
    } else {
      console.log(item, "é Impar!");
    }
  });
};

parOuImpar(2, 3, 4, 6, 7);
