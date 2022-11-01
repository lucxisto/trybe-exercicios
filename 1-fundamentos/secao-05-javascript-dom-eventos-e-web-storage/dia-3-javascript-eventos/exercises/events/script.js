const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

const createDecember = (arrayDays) => {
  const daysList = document.querySelector('#days');
  for(let i = 0; i < arrayDays.length; i++){
    const aDay = document.createElement('li');
    aDay.setAttribute('class', 'day');
    aDay.innerText = arrayDays[i];
    if(arrayDays[i] === 24  || arrayDays[i] === 25 || arrayDays[i] === 31  ) {
      aDay.classList.add('holiday');
    }
    if(arrayDays[i] === 4 || arrayDays[i] === 11 || arrayDays[i] === 18 || arrayDays[i] === 25 ) {
      aDay.classList.add('friday');
    }
    daysList.appendChild(aDay);
  }
}

const createButton = (someString) => {
  const buttonsDiv = document.querySelector('.buttons-container');
  button = document.createElement('button');
  button.setAttribute('id', 'btn-holiday');
  button.innerText = someString;
  buttonsDiv.appendChild(button);
}



createDecember(decemberDaysList);
createDaysOfTheWeek();
createButton('Feriados');
// Escreva seu código abaixo.
