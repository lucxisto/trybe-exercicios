let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

//Parte 1
//console.log(`O morador do Bloco 2 de nome ${moradores['blocoDois'][1]['nome']} ${moradores['blocoDois'][1]['sobrenome']} mora no ${moradores['blocoDois'][1]['andar']}º andar, apartamento ${moradores['blocoDois'][1]['apartamento']}`);

//Parte 2
for (const key in moradores) {
  for(let i = 0; i < key.length; i++){
    console.log(moradores[key][i]['nome'] + ' ' + moradores[key][i].sobrenome);
  }
}