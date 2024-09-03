// Desenvolva um código que exibe um texto em um elemento HTML após um atraso de 5 segundos.

let title = document.getElementById("titulo");

setTimeout(() => {
  title.innerText =
    "Aliquam ornare laoreet lectus, at blandit mi aliquet gravida. ";
}, 5000);
