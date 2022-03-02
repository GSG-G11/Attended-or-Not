import request from './request.js';
const addUserBtn = document.querySelector('.add-user-btn');
const name = document.querySelector('.name-input');
const phone = document.querySelector('.phone-input');
const date = document.querySelector('.date-input');
const program = document.querySelector('#Program');

addUserBtn.addEventListener('click', () => {
  const user = {
    name: name.value,
    phone: phone.value,
    date: date.value,
  };
 console.log( request('/add_user', user) , 1)
});
