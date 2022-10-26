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
function checkBiggerIndex(){
  let array = [2, 3, 6, 7, 10, 1];
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

console.log(checkBiggerIndex());

//Parte 3
function checkLowerIndex(){
  let array = [2, 4, 6, 7, 10, 0, -3];
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
console.log(checkLowerIndex());

//Parte 4
function checkNameLength(){
  let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
  let controlVar = '';
  for(let i = 0; i < names.length; i++){
    if(names[i].length > controlVar.length){
      controlVar = names[i];
    }
  }
  return controlVar;
}
console.log(checkNameLength());