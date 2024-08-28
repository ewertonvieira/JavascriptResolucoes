// Backspace sem funcao apagar.
document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('keydown', function(event){
        if (event.key === 'Backspace') {
            event.preventDefault();
        }
    });
});