// Escreva um código que use forEach para criar um novo array onde cada valor do array original é duplicado.

let arrayoriginal = [10, 20, 30, 40, 50];
let arraynovo = [];

arrayoriginal.forEach((item) => {
  arraynovo.push(item, item);
});

console.log(arraynovo);
