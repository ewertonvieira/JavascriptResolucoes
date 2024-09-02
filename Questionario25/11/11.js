// Crie um botão em uma página HTML. Use JavaScript para exibir uma mensagem no console quando o
// botão for clicado.

let msg = document.getElementById('msg');
let buttom = document.getElementById('btn');

document.addEventListener("DOMContentLoaded", ()=>{
    buttom.addEventListener('click', ()=>{
        msg.innerText = "Voce clicou no butao."
    });
});
