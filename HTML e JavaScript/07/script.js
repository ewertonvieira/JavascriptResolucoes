function AlterText() {
    let text = document.getElementById('btn-click');
    text.innerText = 'Botao clicado duas vezes!';
}

document.getElementById('btn-click').addEventListener('dblclick', () => {
    AlterText();
});