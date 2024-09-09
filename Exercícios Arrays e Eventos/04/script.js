// Contador de Clique com Array: Crie um contador que armazena o número de vezes que
// um botão foi clicado. Use um array para armazenar o histórico dos cliques e exiba 
// esse histórico em uma lista quando um botão "Exibir Histórico" for clicado.

const botao = document.getElementById('addHistorico');
const show = document.getElementById('show');
let arrayHistorico = [];

function addLista() {
    const ul = document.getElementById('lista');
    arrayHistorico.forEach((dataEvento) =>{
        const li = document.createElement('li');
        li.innerText = `log => ${dataEvento}`;
        ul.appendChild(li);
    });
}

botao.addEventListener('click', ()=>{
    let evento = new Date().toLocaleString();
    arrayHistorico.push(evento);
});

show.addEventListener('click', ()=>{
    addLista();
});