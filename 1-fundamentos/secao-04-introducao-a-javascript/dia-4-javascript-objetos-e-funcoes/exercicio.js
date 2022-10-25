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