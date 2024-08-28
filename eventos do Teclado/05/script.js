// ENTER verifica se a tecla Shift esta sendo pressinada, ou nao.
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (event) {
    if (event.key) {
      alert(window.event.key);
    }
  });
});
