let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma, media, maior, menor, contadorImpar = 0;
let novoArray = [];
// for(let i = 0; i < numbers.length; i++){
//   soma += numbers[i];
// }
// media = soma/(numbers.length-1)

// if(media > 20){
//   console.log('numero maior que 20');
// }else{
//   console.log('numero menor ou igual a 20');
// }
// console.log(media);

// for(let i = 0; i < numbers.length; i++){
//   if(numbers[i] > maior)
//   {
//     maior = numbers[i];
//   }
// }
// console.log(maior);

// for(let i = 0; i < numbers.length; i++){
//   if(numbers[i] % 2 !== 0){
//     contadorImpar++;
//   }
// }
// if(contadorImpar == 0){
//   console.log('Não há numero Impar');
// }else{
//   console.log(contadorImpar);
// }

// menor = numbers[0];

// for(let i = 0; i < numbers.length; i++){
//   if(menor > numbers[i]){
//     menor = numbers[i];
//   } 
// }
// console.log(menor);

for(let i = 1; i <= 25; i++){
  novoArray.push(i);
  console.log(i/2);
}
console.log(novoArray);