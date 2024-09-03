// Implemente uma função que receba a idade de uma pessoa e retorne true se a pessoa for maior de idade
// (18 anos ou mais) e false caso contrário.

let ageTest = false;

const Age = (idade) => {
  if (idade >= 0) {
    if (idade < 18) {
      ageTest = false;
    } else {
      ageTest = true;
    }
  }
  return ageTest;
}

console.log(Age(18));
