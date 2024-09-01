const maisPalavras = (...array) => {
    let count = 0;
    let palavras = [];
  
    array.forEach((item) => {
      if (item.length > 4) {
        palavras.push(item);
        count += 1;
      }
    });
  
    return `Quantidade de palavras com mais de 4 letras: ${count}. \nSão elas: ${palavras.join(', ')}`;
  };
  
  console.log(maisPalavras("Philco", "Computador", "País", "Pé"));
  