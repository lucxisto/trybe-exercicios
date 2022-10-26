function translateRomanToNumber(romanN){
  let romanNumber = {
    'I': 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000,
  }
  let romanArray = romanN.split('');
  let romanValueArray = [];
  let romanValue = 0;
  for(let index = 0; index < romanArray.length; index++){
    for (const key in romanNumber) {
      if(key === romanArray[index]){
        romanValueArray.push(romanNumber[key]);
      }
    }
  }
  for(let index = 0; index < romanValueArray.length; index++){
    if (romanValueArray[index] > romanValueArray[index + 1]) {
      romanValue += romanValueArray[index];
    }else if (romanValueArray[index] < romanValueArray[index + 1]){
      romanValue -= romanValueArray[index];
    }else{
      romanValue += romanValueArray[index];
    }
  }
  return romanValue
}

console.log(translateRomanToNumber('MMV'))