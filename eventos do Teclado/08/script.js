// ENTER verifica se a tecla Shift esta sendo pressinada, ou nao.
function INPUT() {
    document.getElementById('input-box').style.color = '#1ba7df';
}

function ENTER() {
    document.getElementById('btn-enter').style.backgroundColor = '#7B68EE'
}

// Pressionar 'a' muda a cor de fundo do inoput, 'ENTER' a cor do botao.
document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('keydown', function(event){
        if (event.key === 'Enter') {
            ENTER();
        } else if (event.key === 'a') {
            INPUT();
        }
    });
});