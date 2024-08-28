let count = 1;
let clicks = document.getElementById("paragrafo");
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("paragrafo").addEventListener("click", (event) => {
    if (count === 1) {
      clicks.innerText = "Voce clicou no paragrafo";
    } else if (count === 2) {
      clicks.innerText = "Voce clicou novamente";
    }
    count++;
  });
});
