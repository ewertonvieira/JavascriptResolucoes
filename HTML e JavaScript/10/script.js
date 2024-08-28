let altertext = document.getElementById("posinfo");
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("paragrafo")
    .addEventListener("mousemove", (event) => {
      const posx = event.clientX;
      const posy = event.clientX;

      altertext.innerText = 'PosX = '+posx+' PosY = '+posy;
    });
});
