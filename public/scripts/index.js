import request from './request.js';
const addUserBtn = document.querySelector('.add-user-btn');
const name = document.querySelector('.name-input');
const phone = document.querySelector('.phone-input');
const date = document.querySelector('.date-input');
const programSelect = document.querySelector('#programs');

addUserBtn.addEventListener('click', () => {
  const user = {
    name: name.value,
    phone: phone.value,
    date: date.value,
  };
  request('/add_user', user);
});

fetch('/get_program')
  .then((data) => data.json())
  .then((data) => {
    data.map((program) => {
      const option = document.createElement('option');
      option.value = program.name;
      option.textContent = program.name;
      programSelect.append(option);
    });
  });
