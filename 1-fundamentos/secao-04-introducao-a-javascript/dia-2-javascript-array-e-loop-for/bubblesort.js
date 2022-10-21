let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let seguraAqui = 0;
for(let iSecond = 1; iSecond < numbers.length; iSecond++){
  for(let iFirst = 0; iFirst < iSecond; iFirst++){
    if(numbers[iFirst]> numbers[iSecond]){
      seguraAqui = numbers[iSecond];
      numbers[iSecond] = numbers[iFirst];
      numbers[iFirst] = seguraAqui;
    }
  }
} 
console.log(numbers);