function AlterText() {
  let text = document.getElementById("div");
  text.style.color = 'red';
  text.innerText = "Div Foi clicada.";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("div").addEventListener("click", function () {
    AlterText();
  });
});
