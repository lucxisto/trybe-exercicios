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
  let romanValue = [];
  for(let index = 0; index < romanArray.length; index++){
    for (const key in romanNumber) {
      if(key === romanArray[index]){
        romanValue.push(romanNumber[key]);
      }
    }
  }
  return romanValue
}

console.log(translateRomanToNumber('IX'))