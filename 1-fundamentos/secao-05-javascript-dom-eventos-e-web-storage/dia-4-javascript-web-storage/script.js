const changeBackground = () => {
  const main = document.querySelector('main');
  const bgButtons = document.querySelectorAll('.background');
  for (let i = 0; i < array.length; i++) {
    bgButtons[i].addEventListener('click', (event) => {
      main.style.backgroundColor = event.target.value;
    });
  }
}

changeBackground();