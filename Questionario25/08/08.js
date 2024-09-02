// Dado um array de números, use forEach para transformar cada número em uma string e criar um novo
// array com essas strings.

let array = [10, 20, 30, 40];
let arraystring = [];

array.forEach(element => {
    arraystring.push(String(element));
});

console.log(arraystring);