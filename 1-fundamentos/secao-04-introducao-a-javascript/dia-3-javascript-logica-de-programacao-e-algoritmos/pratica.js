// let fatorial = 10;
// let resultado = 0;

// for(let i = 9; i > 0; i--){
//   resultado = fatorial * i;
//   fatorial = resultado;
// }
// console.log(resultado);

// let word = 'luquinha';
// let wordArray = word.split('');
// let inverseWord = '';

// for(let i = wordArray.length-1; i >= 0; i--){
//   inverseWord += wordArray[i];
// }
// console.log(inverseWord);

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = '';
// let menorPalavra = '';

// for(let i = 0; i < array.length; i++){
//   if(array[i].length > maiorPalavra.length){
//     maiorPalavra = array[i];
//   }else{
//     menorPalavra = array[i];
//   }
// }
// console.log('A maior palavra do Array é: ' + maiorPalavra);
// console.log('A menor palavra do Array é: ' + menorPalavra);

let limiteMinimo = 2;
let limiteMaximo = 50; 
let contadorDeDivisores = 0;
let numerosPrimos = [];
let maiorPrimo = 0;
let menorPrimo = 0;

for(let i = limiteMinimo; i <= limiteMaximo; i++ ){
  for(let divisor = 2; divisor <= i; divisor++){
    if(i % divisor == 0){
      contadorDeDivisores++
    }
  }
  if(contadorDeDivisores == 1){
    numerosPrimos.push(i);
  }
  contadorDeDivisores = 0;
}
for(let i = 0; i < numerosPrimos.length; i++){
  if(numerosPrimos[i] > maiorPrimo && numerosPrimos[i] > menorPrimo){
    maiorPrimo = numerosPrimos[i];
    if(maiorPrimo < menorPrimo){
      menorPrimo = maiorPrimo;
    }
  }else{
    menorPrimo = numerosPrimos[i];
  }
}

console.log(numerosPrimos);
console.log(maiorPrimo);