// Crie uma função que recebe um array de números e usa um loop foreach para encontrar o maior número no array.

const maiorNumero = (...array) => {
  let maior = array[0];

  array.forEach(item => {
    if (maior < item) {
      maior = item;
    }
  });

  return maior;
};

console.log(maiorNumero(2, 2, 50, 6, 1));
