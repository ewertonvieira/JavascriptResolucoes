// Crie um botão que incrementa um contador exibido em um elemento HTML a cada 3 segundos,
// independentemente dos cliques.

let countBox = document.getElementById('contador');
let buttom = document.getElementById('btn');
let count = 0;

buttom.addEventListener('click', () => {
    setTimeout(() => {
        count += 1;
        countBox.innerText = count;
    }, 3000);
});