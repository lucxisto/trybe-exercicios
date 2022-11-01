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