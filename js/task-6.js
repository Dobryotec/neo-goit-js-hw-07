const divEl = document.getElementById('controls');
const boxesEl = document.getElementById('boxes');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');

btnCreateEl.addEventListener('click', handleBtnCreateClick);
btnDestroyEl.addEventListener('click', handleBtnDestroyClick);

function handleBtnCreateClick() {
  const inputValue = Number(divEl.children[0].value);

  if (inputValue < 1 || inputValue > 100) {
    boxesEl.innerHTML = '';
    return;
  }
  createBoxes(inputValue);
  divEl.children[0].value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let str = '';
  let widthEl = 30;
  let heightEl = 30;

  for (let i = 1; i <= amount; i++) {
    str += `<div class="box" style="width:${widthEl}px; height:${heightEl}px; background-color:${getRandomHexColor()}"></div>`;
    widthEl += 10;
    heightEl += 10;
  }
  boxesEl.innerHTML = str;
}

function handleBtnDestroyClick() {
  boxesEl.innerHTML = '';
}
