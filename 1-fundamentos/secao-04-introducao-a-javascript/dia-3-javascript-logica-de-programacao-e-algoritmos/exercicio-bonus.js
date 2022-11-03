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

// Parte 2

for(let line = 0; line <= n; line++){
  for(let column = 0; column < line; column++){
    stringLine += '*';
  }
  console.log(stringLine);
  stringLine = '';
}

// Parte 3

for(let line = 1; line <= n; line++){
  for(let space = n; space > line; space--){
    stringLine += ' ';
  }
  for(let column = 0; column < line; column++){
    stringLine += '*';
  }
  console.log(stringLine);
  stringLine = '';
}