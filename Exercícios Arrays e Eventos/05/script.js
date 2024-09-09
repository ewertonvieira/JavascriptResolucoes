// Busca em Array com Evento: Crie um campo de pesquisa e um botão.
// Quando o botão for clicado, procure por um valor no array e destaque
// o item correspondente na lista exibida. O array deve conter strings
// e o valor a ser pesquisado deve ser um texto.

const botao = document.getElementById("botao");
const input = document.getElementById("entrada");
const ul = document.getElementById("lista");
const estatus = document.getElementById("status");

let arrayList = [
  22, 11, 3, 45, 67, 89, 23, 1, 0, 56, 78, 34, 12, 90, 21, 43, 55, 88, 76, 34,
  12, 19, 87, 65, 32, 54, 76, 89, 91, 4, 37, 29, 80, 53, 17, 66, 25, 40, 18, 82,
  73, 46, 93, 22, 10, 68, 77, 57, 84, 15, 49, 62, 20, 44, 8, 13, 72, 50, 28, 5,
  39, 70, 11, 64, 85, 26, 98, 42, 6, 81, 95, 48, 30, 97, 7, 16, 61, 26, 52, 33,
  90, 72, 47, 59, 14, 9, 94, 38, 41, 83, 71, 88, 31, 20, 45, 51, 82, 96, 60, 17,
  19, 24, 63, 68, 77, 84, 40,
];

function showList() {
  ul.innerHTML = '';
  arrayList.forEach((valueArr, index) => {
    let li = document.createElement("li");
    li.textContent = valueArr;
    li.dataset.index = index;
    ul.appendChild(li);
  });
}

function Search() {
  const searchValue = input.value.trim(); 
  
  if (!searchValue) {
    estatus.textContent = "Por favor, insira um valor para buscar.";
    return;
  }
  
  document.querySelectorAll('li').forEach(li => li.classList.remove('color'));

  const index = arrayList.indexOf(Number(searchValue));

  if (index !== -1) {
    const item = document.querySelector(`li[data-index="${index}"]`);
    if (item) {
      item.classList.add('color');
    }
    estatus.textContent = `Valor "${arrayList[index]}" encontrado na lista.`;
  } else {
    estatus.textContent = `Valor "${searchValue}" não encontrado na lista.`;
  }
}

botao.addEventListener("click", (event) => {
  event.preventDefault();
  Search();
});

showList();
