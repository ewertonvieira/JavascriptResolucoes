// ENTER verifica se a tecla Shift esta sendo pressinada, ou nao.
document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('keydown', function(event){
        if (event.key === 'Enter') {
            if (event.shiftKey) {
                alert('Shift ESTA SENDO PRESSIONADO')
            } else {
                alert('Shift NAO ESTA SENDO PRESSIONADO')
            }
        }
    });
});