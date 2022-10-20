pecaXadrez = 'cAValo';

switch(pecaXadrez.toLowerCase()){
  case 'rei':
    console.log('1 casa em todas as direções');
    break;
  case 'rainha':
    console.log('Várias casas em Todas as direções');
    break;
  case 'bispo':
    console.log('Várias casas em diagonal');
    break;
  case 'cavalo':
    console.log('Em L(3 casas em uma direção depois 1 em outra)');
    break;
  case 'torre':
    console.log('Várias casas em linha reta');
    break;
  case 'peão':
    console.log('1 casa para frente');
    break;
  default:
    console.log('não');
}