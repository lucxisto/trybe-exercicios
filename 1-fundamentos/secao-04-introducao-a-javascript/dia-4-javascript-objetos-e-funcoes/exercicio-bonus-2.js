function arrayOfNumbers(vector){
  let evenArray = [];
  for(let i = 0; i < vector.length; i++){
    for(let index = 0; index <  vector[i].length; index++){
      if(vector[i][index] % 2 === 0){
        evenArray.push(vector[i][index]);
      }
    }
  }
  return evenArray;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

console.log(arrayOfNumbers(vector));