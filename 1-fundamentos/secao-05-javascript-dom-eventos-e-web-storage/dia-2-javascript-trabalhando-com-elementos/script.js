const whereAreYouElement = document.querySelector('#elementoOndeVoceEsta');
whereAreYouElement.parentNode.style.color = 'blue';
const firstChildOfTheChild = whereAreYouElement.firstElementChild;
firstChildOfTheChild.innerHTML = 'Primeiro Filho do Filho'
const daddy = document.querySelector('#pai');

console.log('Primeiro Filho a partir de Pai',daddy.firstElementChild);
console.log('Primeiro Filho a partir de elementoOndeVoceEsta',whereAreYouElement.previousElementSibling);
console.log('"Atenção !" a partir de elementoOndeVoceEsta',whereAreYouElement.nextSibling);
console.log('Terceiro Filho a partir de elementoOndeVoceEsta', whereAreYouElement.nextElementSibling);
console.log('Terceiro Filho a partir de pai',daddy.childNodes[5]);

const brother = document.createElement('section');
brother.setAttribute('id', 'irmãoDeElementoOndeVoceEsta');
const son = document.createElement('img');
son.setAttribute('id', 'filhoDeElementoOndeVoceEsta');
const sonOfFirstChild = document.createElement('section');
sonOfFirstChild.setAttribute('id', 'filhoDoPrimeiroFilho');
daddy.appendChild(brother);
whereAreYouElement.appendChild(son);
whereAreYouElement.firstElementChild.appendChild(sonOfFirstChild);

son.src = './img/imagem.jpg';
son.className = 'classe';

console.log('Acesso',sonOfFirstChild.parentNode.parentNode.nextElementSibling);