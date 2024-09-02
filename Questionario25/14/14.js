// Desenvolva um código que exiba o nome da tecla pressionada em um elemento HTML (por exemplo, um
// <div> ou <p>)

let capture = document.getElementById("capture");
let msg = document.getElementById("msg");

capture.addEventListener("keydown", (event) => {
  let namekey = event.key;
  msg.innerHTML = namekey;
});
