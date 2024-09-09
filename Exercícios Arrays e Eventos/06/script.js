// Calculadora Simples: Crie uma calculadora que permite ao
// usuário inserir dois números e escolher uma operação (+, -, *, /)
// a partir de um menu suspenso. Use um botão para calcular o resultado
// e exibi-lo em um elemento de resultado.

const entrada = document.getElementById("entrada");
const confirmar = document.getElementById("confirmar");
const p = document.getElementById("p");

function Calculadora(event) {
  event.preventDefault();
  let expressao = entrada.value.trim();
  p.innerText = `Resultado: ${eval(expressao)}`;
}

confirmar.addEventListener("click", Calculadora);