const parag = document.getElementById("array");
const span = document.getElementById("lista");
const botao = document.getElementById("click");

const array_pessoas = [
  {
    nome: "Carlos",
    idade: 21,
  },
  {
    nome: "Mariana",
    idade: 57,
  },
  {
    nome: "João",
    idade: 22,
  },
  {
    nome: "Ana",
    idade: 33,
  },
];

function Show() {
  const listapessoa =  array_pessoas.map(obj => `${obj.nome}, ${obj.idade}`).join('\n');
  span.innerText = listapessoa;
}

Show();

botao.addEventListener("click", (event) => {
  event.preventDefault();
  let media = 0;
  array_pessoas.forEach((pessoa) => {
    media += pessoa.idade;
    parag.innerText = `Media de idade: ${media / array_pessoas.length} anos`;
  });
});
