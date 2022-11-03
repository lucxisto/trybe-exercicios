//Parte 1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem Vinda, ' + info.personagem);

//Parte 2
info['recorrente'] = 'Sim';

console.log(info);

//Parte 3
for (const key in info) {
  console.log(key);
}

//Parte 4
for (const key in info) {
  console.log(info[key]);
} 

//Parte 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (const key in info) {
  if(key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim'){
    console.log('Ambos Recorrentes')
  }else{
    console.log(info[key] + ' e ' + info2[key]);
  }
  
}