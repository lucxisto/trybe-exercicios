// Parte 1
let n = 5;
let stringLine = '';
for(let line = 0; line < n; line++){
  for(let column = 0; column < n; column++){
    stringLine += '*';
  }
  console.log(stringLine);
  stringLine = '';
}