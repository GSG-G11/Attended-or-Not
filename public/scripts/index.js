import request from './request.js';
const addUserBtn = document.querySelector('.add-user-btn');
const name = document.querySelector('.name-input');
const phone = document.querySelector('.phone-input');
const date = document.querySelector('.date-input');
const programSelect = document.querySelector('#programs');
const table =  document.querySelector('table');

fetch('/get_program')
  .then((data) => data.json())
  .then((data) => {
    data.map((program) => {
      const option = document.createElement('option');
      option.value = program.id;
      option.textContent = program.name_program;
      programSelect.append(option);
    }) ; 
    
  });


  addUserBtn.addEventListener('click', () => {
  table.innerText = '';

  const user = {
    name: name.value,
    phone: phone.value,
    date: date.value,
    programId :  programSelect.value

  };

  const createEl = (tag, parent  , arr) => {

    for(let i = 0 ; i< arr.length ; i++){
    const el = document.createElement(tag);
    el.textContent = arr[i]
    parent.append(el)
    }

  };
  const mainRow =  document.createElement('tr');
  createEl('th' , mainRow ,['id','name','phone','date','program','session' , 'Hours' , 'action'])
  table.append(mainRow);

  request('/add_user', user).then((data) =>data.map((obj)=>{
    console.log(obj.id)
    const Arr = Object.values(obj)
    const row =  document.createElement('tr');
    createEl('td',row ,Arr);

    const btn =  document.createElement('button');
    const td =  document.createElement('td');
    btn.textContent = 'Delete';
    btn.id = obj.id
    td.append(btn)
    row.append(td)

    table.append(row)


  }));
});

