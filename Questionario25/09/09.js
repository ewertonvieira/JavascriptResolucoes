// Use forEach para contar quantas vezes um determinado valor aparece em um array e exiba o resultado.

let list = [10, 0, 20, 30, 30];
let count = 0;

list.forEach((element) => {
  if (element === 30) {
    console.log("30 aparece ", count, "vezes.");
    count += 1;
  }
});
