const cpf1 = document.getElementById('cpf');
const validar = document.getElementById('validar');
const resultado = document.getElementById('resultado');

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    const primeiroDigito = calcularDigitoVerificador(cpf.substring(0, 9), 10);
    const segundoDigito = calcularDigitoVerificador(cpf.substring(0, 9) + primeiroDigito, 11);

    return cpf.endsWith(primeiroDigito.toString() + segundoDigito.toString());
}

function calcularDigitoVerificador(numeros, pesoInicial) {
    let soma = 0;
    let peso = pesoInicial;

    for (let i = 0; i < numeros.length; i++) {
        soma += parseInt(numeros.charAt(i), 10) * peso;
        peso--;
    }

    const resto = soma % 11;

    return resto < 2 ? 0 : 11 - resto;
}

validar.addEventListener('click', (event) => {
    event.preventDefault();
    const cpf = cpf1.value;
    if (validarCPF(cpf)) {
        resultado.textContent = "O CPF é válido.";
    } else {
        resultado.textContent = "O CPF é inválido.";
    }
});
