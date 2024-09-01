//  Crie uma função que recebe um array de números e usa um loop foreach para criar um novo array apenas com os números positivos.

const numerosPositivos = (...array) => {
  let numpos = [];
  array.forEach((item) => {
    if (item >= 0) {
      numpos.push(item);
    }
  });
  return numpos;
};

console.log(numerosPositivos(-1, 10, -14, 200, 3, -761));
