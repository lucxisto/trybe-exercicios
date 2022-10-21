const a = 1;
const b = 2;
const c = 3;

if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
  console.log('Há um numero pár? ' + true);
}else{
  console.log('Há um numero pár? ' + false);
}

if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
  console.log('Há um numero impár? ' + true);
}else{
  console.log('Há um numero impár? ' + false);
}