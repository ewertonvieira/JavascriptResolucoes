// Dado um array de preços, use forEach para aplicar um desconto de 10% em cada preço e criar um novo
// array com os preços com desconto.

let precos = [100.0, 234.45, 33.3, 899.9];
let desconto = 10;

precos.forEach((item) => {
  console.log(
    "Sem desconto:",
    item,
    "\nCom desconto de 10%: ",
    item - (item * 10) / 100,
    "\n"
  );
});
