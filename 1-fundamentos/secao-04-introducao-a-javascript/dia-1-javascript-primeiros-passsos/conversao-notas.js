let nota = 55;

if(nota >= 90 && nota <= 100){
  nota = "A";
  console.log(nota);
}else if(nota < 90 && nota >= 80){
  nota = 'B';
  console.log(nota);
}else if(nota < 80 && nota >= 70){
  nota = 'C';
  console.log(nota);
}else if(nota < 70 && nota >= 60){
  nota = 'D';
  console.log(nota);
}else if(nota < 60 && nota >= 50){
  nota = 'E';
  console.log(nota);
}else if(nota < 50 && nota >= 0){
  nota = 'F';
  console.log(nota);
}else{
  console.log('ERRO! Nota Inválida')
}
