// Crie uma função que receba um número e retorne "Par" se o número for par e "Ímpar" se for ímpar.

let msg = '';

const parImpar = (num) => {
    if (num % 2 === 0) {
        msg = 'Par';
    } else {
        msg = 'Impar';
    }
    return msg;
}

console.log(parImpar(2))