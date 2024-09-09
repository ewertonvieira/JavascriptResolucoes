// Filtro de Array com Evento: Crie um formulário com um campo
// de entrada e um botão. Quando o botão for clicado, filtre um
// array de objetos com base no valor do campo de entrada e exiba
// os resultados em uma lista. O array deve conter objetos com as
// propriedades nome e idade.

const entrada = document.getElementById('input');
const pesquisar = document.getElementById('button');
const saida = document.getElementById('paragrafo');

const arrayObj = [
    {name: 'Ewerton', age: 25},
    {name: 'Ana', age: 30},
    {name: 'Pedro', age: 22},
    {name: 'Maria', age: 28},
    {name: 'João', age: 35},
    {name: 'Luca', age: 20},
    {name: 'Julia', age: 27},
    {name: 'Carlos', age: 32},
    {name: 'Sofia', age: 29},
    {name: 'Felipe', age: 24},
    {name: 'Larissa', age: 31},
    {name: 'Rafael', age: 26},
    {name: 'Beatriz', age: 23},
    {name: 'Marcos', age: 34},
    {name: 'Gabriela', age: 21},
    {name: 'Roberto', age: 33},
    {name: 'Tatiane', age: 27},
    {name: 'Fernando', age: 30},
    {name: 'Aline', age: 28},
    {name: 'Mateus', age: 25},
    {name: 'Clara', age: 22}
];

function Filter(keyname) {
    let verificador = false;
  arrayObj.forEach((objvalue)=> {
    if (objvalue.name === keyname) {
        saida.innerText = `Status[encontrado]: ==> "${objvalue.name}" ==> "${objvalue.age}" `;
        verificador = true;
    }
  });
  if (verificador === false) {
    saida.innerText = "Status[erro]"
  }
}

pesquisar.addEventListener('click', ()=>{
    Filter(entrada.value);
});