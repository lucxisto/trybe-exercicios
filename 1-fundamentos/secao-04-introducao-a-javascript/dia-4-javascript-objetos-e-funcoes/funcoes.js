//Parte 1
function checkPalindrome(word){
  let wordLetterArray = word.split('');
  let reverseWord = '';
  for(let i = wordLetterArray.length - 1; i >= 0; i--){
    reverseWord += wordLetterArray[i];
  }
  if(word === reverseWord){
    return true;
  }else{
    return false;
  }
}

console.log(checkPalindrome('arara'));

//Parte 2
let array1 = [2, 3, 6, 7, 10, 1];
function checkBiggerIndex(array){
  let controlVar = 0;
  let indexControlVar = 0 ;
  for (const key in array) {
    if(array[key] > controlVar){
      controlVar = array[key];
      indexControlVar = key;
    }
  }
  return indexControlVar;
}

console.log(checkBiggerIndex(array1));

//Parte 3
let array2 = [2, 4, 6, 7, 10, 0, -3];
function checkLowerIndex(array){
  let controlVar = array[0];
  let indexControlVar = 0 ;
  for (const key in array) {
    if(array[key] < controlVar){
      controlVar = array[key];
      indexControlVar = key;
    }
  }
  return indexControlVar;
}
console.log(checkLowerIndex(array2));

//Parte 4
let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function checkNameLength(names){
  let controlVar = '';
  for(let i = 0; i < names.length; i++){
    if(names[i].length > controlVar.length){
      controlVar = names[i];
    }
  }
  return controlVar;
}
console.log(checkNameLength(names));

//Parte 5
let array3 = [2, 3, 2, 5, 8, 2, 3];
function checkDouble(array){
  let isDouble = 0;
  let doubled = 0;
  let wichNumberRepeated = 0;
  for(let i = 0; i < array.length; i++){
    for(let x = 0; x < array.length; x++){
      if(array[i] == array[x]){
        isDouble++;
      }
    }
    if(isDouble > doubled){
      doubled = isDouble;
      wichNumberRepeated = array[i];
    }
    isDouble = 0;
  }
  return wichNumberRepeated;
}
console.log(checkDouble(array3));

//Parte 6
let n = 5;
function sumAll(number){
  let sum = 0;
  for(let i = 0; i <=  number; i++){
    sum += i;
  }
  return sum;
}
console.log(sumAll(n));

//Parte 7
function checkEnd(word, ending){
  let arrayWord = word.split('');
  let arrayEnding = ending.split('');
  let reverseWord = arrayWord.reverse();
  let reverseEnding = arrayEnding.reverse();
  let equalLetters = 0;
  for(let i = 0; i < reverseEnding.length; i++){
    if(reverseWord[i] === reverseEnding[i]){
      equalLetters++
    }
  }
  if(equalLetters == reverseEnding.length){
    return true;
  }else{
    return false;
  }
}

console.log(checkEnd('joãoFernando', 'fernan'));