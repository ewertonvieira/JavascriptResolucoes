// Crie uma função que receba um array de números e retorne a média desses números.

const Media = (...arraylist) => {
  let media = 0;
  let n = arraylist.length;
  arraylist.forEach((i) => {
    media += i;
  });

  return media / n;
};

console.log(Media(100, 10, 80, 16));
