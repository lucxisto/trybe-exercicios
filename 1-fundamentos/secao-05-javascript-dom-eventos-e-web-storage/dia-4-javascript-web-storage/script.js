const changeBackground = () => {
  const main = document.querySelector('#this-main');
  const bgButtons = document.querySelectorAll('.background');
  for (let i = 0; i < bgButtons.length; i++) {
    bgButtons[i].addEventListener('click', (event) => {
      main.style.backgroundColor = event.target.innerText;
    });
  }
}

const changeColor = () => {
  const main = document.querySelector('#this-main');
  const colorButtons = document.querySelectorAll('.color');
  for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', (event) => {
      main.style.color = event.target.innerText;
    });
  }
}

changeBackground();
changeColor();