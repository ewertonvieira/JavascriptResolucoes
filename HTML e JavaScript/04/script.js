function AlterBackground() {
  document.getElementById("paragrafo").style.backgroundColor = "blue";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("paragrafo").addEventListener("click", function () {
    AlterBackground();
  });
});
