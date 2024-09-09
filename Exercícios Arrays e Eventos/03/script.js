// Validação de Formulário: Crie um formulário com dois campos de entrada
// e um botão de envio. Quando o botão for clicado, verifique se ambos os campos
// contêm valores e se um campo contém um valor que é um número positivo. Exiba
// uma mensagem de erro se a validação falhar.

const value1 = document.getElementById("input1");
const value2 = document.getElementById("input2");

function validacao() {
  const input1 = value1.value;
  const input2 = value2.value;
  if (input1 === "" || input2 === "") {
    alert("Erro: Campo ou campos vazios!");
  }

  if (isNaN(input1) || isNaN(input2)) {
    if (input1 > 0 || input2 > 0) {
      alert("Erro: Campos ou campos contem valor positivo!");
    }
  }
}

document.getElementById("botao").addEventListener("click", validacao);
