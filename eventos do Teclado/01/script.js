let color;
const Textcolor = document.getElementById('text'); 

function SetColor1() {
    color = '#00FF7F';
    ApplyColor();
}

function SetColor2() {
    color = '#008B8B';
    ApplyColor();
}

function ApplyColor() {
    if (color) {
        Textcolor.style.backgroundColor = color;
    }
}
// Enter para Cenza e Backspace para vender.
document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('keydown', function(event){
        if (event.key === 'Enter') {
            SetColor1();
        } else if (event.key === 'Backspace') {
            SetColor2();
        }
    });
});