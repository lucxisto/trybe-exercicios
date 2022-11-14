document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('#this-main');
  main.style.backgroundColor = localStorage.getItem('backgroundColor')
  main.style.color = localStorage.getItem('color');
  main.style.fontSize = localStorage.getItem('fontSize');
  main.style.lineHeight = localStorage.getItem('lineHeight');
  main.style.fontFamily = localStorage.getItem('fontFamily');
  
});

const changeBackground = () => {
  const main = document.querySelector('#this-main');
  const bgButtons = document.querySelectorAll('.background');
  for (let i = 0; i < bgButtons.length; i++) {
    bgButtons[i].addEventListener('click', (event) => {
      main.style.backgroundColor = event.target.innerText;
      localStorage.setItem('backgroundColor', event.target.innerText);
    });
  }
}

const changeColor = () => {
  const main = document.querySelector('#this-main');
  const colorButtons = document.querySelectorAll('.color');
  for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', (event) => {
      main.style.color = event.target.innerText;
      localStorage.setItem('color', event.target.innerText);
    });
  }
}

const changeFontSize = () => {
  const main = document.querySelector('#this-main');
  const sizeButtons = document.querySelectorAll('.font-size');
  for (let i = 0; i < sizeButtons.length; i++) {
    sizeButtons[i].addEventListener('click', (event) => {
      main.style.fontSize = event.target.innerText;
      localStorage.setItem('fontSize', event.target.innerText);
    });
  }
}

const changeLineHeight = () => {
  const main = document.querySelector('#this-main');
  const lineHeightButtons = document.querySelectorAll('.line-height');
  for (let i = 0; i < lineHeightButtons.length; i++) {
    lineHeightButtons[i].addEventListener('click', (event) => {
      main.style.lineHeight = event.target.innerText;
      localStorage.setItem('lineHeight', event.target.innerText);
    });
  }
}

const changeFontFamily = () => {
  const main = document.querySelector('#this-main');
  const familyButtons = document.querySelectorAll('.font-family');
  for (let i = 0; i < familyButtons.length; i++) {
    familyButtons[i].addEventListener('click', (event) => {
      main.style.fontFamily = event.target.innerText;
      localStorage.setItem('fontFamily', event.target.innerText);
    });
  }
}

changeBackground();
changeColor();
changeFontSize();
changeLineHeight();
changeFontFamily();