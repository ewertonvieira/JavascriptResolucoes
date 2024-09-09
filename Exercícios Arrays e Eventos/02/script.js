// Classificação Dinâmica com Eventos: Crie um array de números e exiba-os em uma lista não
// ordenada. Adicione um botão que, ao ser clicado, ordena o array em ordem crescente e atualiza
// a lista para refletir a nova ordem.

const ultag = document.getElementById("array");
let numberList = [
  7, 1, 14, 3, 9, 20, 5, 12, 8, 17, 11, 6, -13, -16, 4, 18, 10, 15, 2, -19,
];

function showList() {
  ultag.innerText = "";
  numberList.forEach((numValue) => {
    const newLi = document.createElement("li");
    newLi.innerText = `${numValue}`;
    ultag.appendChild(newLi);
  });
}
showList();

document.getElementById("botao").addEventListener("click", () => {
  numberList = numberList.sort((a, b) => a - b);
  showList();
});
