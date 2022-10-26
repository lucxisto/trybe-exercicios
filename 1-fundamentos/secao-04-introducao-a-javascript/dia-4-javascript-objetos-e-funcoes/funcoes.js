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

