// Crie uma página que exibe um alerta quando a tecla 'A' é pressionada.

let capture = document.getElementById('capture');

document.addEventListener('keydown', (event)=>{
    if (event.key === "a") {
        alert("Letra 'a' foi pressionada.")
    }
});