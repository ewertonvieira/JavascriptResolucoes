// Crie uma função que receba três números e retorne o maior deles

function Sort(numb1, numb2, numb3) {
  let Maior;
  if (numb1 > numb2 && numb1 > numb3) {
    Maior = numb1;
  } else if (numb2 > numb1 && numb2 > numb3) {
    Maior = numb2;
  } else {
    Maior = numb3;
  }

  return Maior;
}

console.log(Sort(20, 30, 40));
