const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonEl.addEventListener('click', handleClick);

function handleClick() {
  const color = getRandomHexColor();
  spanEl.textContent = color;
  document.body.style.backgroundColor = color;
}
