function AlterText(){
    let text = document.getElementById('mouseout');
    text.innerText = 'Mouse saiu da div!'
}
document.getElementById('mouseout').addEventListener('mouseout', ()=>{
    AlterText();
});