const longestWord = frase => {
  let wordArray = frase.split(' ');
  let bigger = '';
  for (const iterator of wordArray) {
    iterator.length > bigger.length ? bigger = iterator : bigger = bigger;
  }
  return bigger
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') );
