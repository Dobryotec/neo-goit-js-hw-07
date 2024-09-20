const inputEl = document.getElementById('name-input');
const nameDisplayEl = document.getElementById('name-output');

inputEl.addEventListener('input', () => {
  const nameValue = inputEl.value.trim();

  if (nameValue === '') {
    nameDisplayEl.textContent = 'Anonymous';
  } else {
    nameDisplayEl.textContent = nameValue;
  }
});
