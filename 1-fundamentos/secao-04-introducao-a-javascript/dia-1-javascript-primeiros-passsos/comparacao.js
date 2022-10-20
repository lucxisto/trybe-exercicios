const a = 279;
const b = 45;
const c = 500;


// if( a > b){
//   console.log(a + " é maior que " + b);
// }else{
//   console.log(b + " é maior que " + a);
// }


if(a > b && a > c){
  console.log(a + ' é o maior número');
}else if(b > a && b > c){
  console.log(b + ' é o maior número');
}else if(c > a  && c > b){
  console.log(c + ' é o maior número');
}