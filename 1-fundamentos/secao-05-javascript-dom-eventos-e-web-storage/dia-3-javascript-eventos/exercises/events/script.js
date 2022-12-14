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

const createButton = (someString, buttonID) => {
  const buttonsDiv = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.setAttribute('id', buttonID);
  button.innerText = someString;
  buttonsDiv.appendChild(button);
}

const spotlightHoliday = () => {
  const button = document.querySelector('#btn-holiday');
  const holidays = document.getElementsByClassName('holiday');
  const oldColor = 'rgb(238,238,238)';
  const newColor = 'lightgreen';
  button.addEventListener('click', () => {
    for(let i = 0; i < holidays.length; i++) {
      if(holidays[i].style.backgroundColor === newColor) {
        holidays[i].style.backgroundColor = oldColor;
      } else {
        holidays[i].style.backgroundColor = newColor;
      }
    }
  });
}

const itsFriday = () => {
  const button = document.querySelector('#btn-friday');
  const friday = document.getElementsByClassName('friday');
  const stringFriday = 'Sexta-Feira';
  let monthDay = []; 
  button.addEventListener('click', () => {
    for (let i = 0; i < friday.length; i++) {
      if(friday[i].innerHTML === stringFriday){
        friday[i].innerHTML = monthDay[i];
      } else {
        monthDay.push(friday[i].innerHTML);
        friday[i].innerHTML = stringFriday;
      }
    } 
  });
}

const eventToDay = () => {
  const allDays = document.querySelectorAll('.day');
  for (let i = 0; i < allDays.length; i++) {
    allDays[i].addEventListener('mouseover', (event) => {
      const thisTarget  = event.target;
      thisTarget.style.fontSize = '35px';
      thisTarget.style.fontWeight = '300';
    });
  }
  for (let i = 0; i < allDays.length; i++) {
    allDays[i].addEventListener('mouseout', (event) => {
      const thisTarget  = event.target;
      thisTarget.style.fontSize = '20px';
      thisTarget.style.fontWeight = '200';
    });
  }
}

const addTask = (task) => {
  const taskContainer = document.querySelector('.my-tasks');
  const customTask = document.createElement('span');
  customTask.innerHTML = task;
  taskContainer.appendChild(customTask);
}

const addTaskColor = (color) => {
  const taskContainer = document.querySelector('.my-tasks');
  const taskColorLabel = document.createElement('div');
  taskColorLabel.className = 'task';
  taskColorLabel.style.backgroundColor = color;
  taskContainer.appendChild(taskColorLabel);
}

const selectTask = () => {
  const myTasks = document.querySelectorAll('.task');
  for (let i = 0; i < myTasks.length; i++) {
    myTasks[i].addEventListener('click', (event) => {
      if(event.target.className.includes('selected')){
        event.target.classList.remove('selected');
      } else {
        event.target.classList.add('selected');
      }
    })    
  }
}

const addTaskToDay = () => {
  const taskSelected = document.getElementsByClassName('task selected');
  const days = document.querySelector('#days');
  const taskDiv = document.querySelector('.task');
  const taskColor = taskDiv.style.backgroundColor;
  const defaultColor = 'rgb(119,119,119)';
  days.addEventListener('click', (event) => {
    let dayColor = event.target.style.color;
    if (taskSelected.length > 0 && dayColor !== taskColor) {
      event.target.style.color = taskColor;
    } else if (dayColor === taskColor){
      event.target.style.color = defaultColor;
    }
  })
}

const addNewTask = () => {
  const addTaskButton = document.querySelector('#btn-add');
  const taskInput = document.querySelector('#task-input');
  addTaskButton.addEventListener('click', () =>{
    let inputValue = taskInput.value;
    if (inputValue === ''){
      window.alert('Erro ao adicionar tarefa!');
    } else {
      addTask(` ${inputValue} `);
    }
  });
  taskInput.addEventListener('keyup', (event) => {
    let inputValue = taskInput.value;
    if (event.key === 'Enter'){
      if (inputValue === ''){
        window.alert('Erro ao adicionar tarefa!');
      } else {
        addTask(` ${inputValue} `);
      }
    }
  });
}


createDecember(decemberDaysList);
createDaysOfTheWeek();
createButton('Feriados', 'btn-holiday');
createButton('Sexta-Feira', 'btn-friday');
spotlightHoliday();
itsFriday();
eventToDay();
addTask('Cozinhar');
addTaskColor('orange');
selectTask();
addTaskToDay();
addNewTask();