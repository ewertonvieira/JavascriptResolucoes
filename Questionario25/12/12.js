// Crie um elemento de texto (por exemplo, um parágrafo). Use um evento de clique para alterar o texto do
// elemento quando ele for clicado.

let msg = document.getElementById("msg");

msg.addEventListener("click", () => {
  msg.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
});
