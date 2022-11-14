const substituaX = nome => {
  const frase = 'Tryber x aqui!';
  const fragFrase =  frase.split(' x ');

  return `${fragFrase[0]} ${nome} ${fragFrase[1]}`
}

//console.log(substituaX('Bebeto'));

const minhasSkills = funcao1 => {
  const array = ['HTML', 'CSS', 'JavaScript']
  let presentation = `${funcao1}
  Minhas três principais habilidades são:
   - ${array[0]}
   - ${array[1]}
   - ${array[2]}`;
   return presentation;
}

console.log(minhasSkills(substituaX('Bebeto')));