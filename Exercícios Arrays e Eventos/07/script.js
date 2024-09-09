// Soma Condicional com Array: Crie um array de números e um botão.
// Quando o botão for clicado, calcule a soma de todos os números que
// são maiores que um determinado valor. O valor de referência deve ser
// inserido em um campo de entrada.

const valorDeterminado = document.getElementById("valorDeterminado");
const ul = document.getElementById("list");
const btnConfirm = document.getElementById("btn");
let arrayN = [2, 3, 3];

showArr = () => {
  arrayN.forEach((number) => {
    const li = document.createElement("li");
    li.innerText = number;
    ul.appendChild(li);
  });
};

showArr();

btnConfirm.addEventListener("click", (event) => {
  event.preventDefault();

  const x = parseInt(valorDeterminado.value.trim(), 10);
  let soma = 0;

  arrayN.forEach((n) => {
    if (n > x) {
      soma += n;
    }
  });
  alert(`Soma: ${soma}`);
});
