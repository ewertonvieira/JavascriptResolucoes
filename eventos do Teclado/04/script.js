// Backspace ficara impedido de pagar texto.
document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('keydown', function(event){
        if (event.key === 'Backspace') {
            event.preventDefault();
        }
    });
});