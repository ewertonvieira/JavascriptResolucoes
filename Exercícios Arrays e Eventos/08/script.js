const input = document.getElementById('input');
const btn = document.getElementById('btn');
const res = document.getElementById('res');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    let palavra = input.value.trim();
    res.innerText = palavra.length; 
});