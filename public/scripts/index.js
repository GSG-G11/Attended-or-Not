import request from './request.js';
const addUserBtn = document.querySelector('.add-user-btn');
const name = document.querySelector('.name-input');
const program = document.querySelector('.program-input');
const phone = document.querySelector('.phone-input');
const date = document.querySelector('.date-input');

const user = {
  name: name.value,
  program: program.value,
  phone: phone.value,
  date: date.value,
};

addUserBtn.addEventListener('click', () => {
  request('/add_user', user);
});
