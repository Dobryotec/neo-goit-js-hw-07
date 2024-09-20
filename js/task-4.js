const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const targetElement = event.target.elements;
  const inputEmailValue = targetElement.email.value.trim();
  const inputPasswordValue = targetElement.password.value.trim();

  if (!inputEmailValue || !inputPasswordValue) {
    alert('All form fields must be filled in');
    return;
  }

  formEl.reset();
  console.log({
    email: inputEmailValue,
    password: inputPasswordValue,
  });
}
