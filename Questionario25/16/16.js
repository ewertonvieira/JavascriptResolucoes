// Desenvolva um contador regressivo que diminua de 10 até 0 e exiba o número no console a cada
// segundo.

let contador = document.getElementById("contador");
let count = 10;

let Cronometro = () => {
   let intervalo = setInterval(() => {
    count -= 1;
    contador.innerText = count + "s";
    
    if (count === 0) {
        clearInterval(intervalo);
    }
  }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  Cronometro();
});
