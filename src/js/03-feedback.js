import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.email-content'),
  message: document.querySelector('.message-content'),
};
let dataSet = {};
refs.form.addEventListener('input', throttle(inputValue, 500));
function inputValue(evt) {
  evt.preventDefault();
  dataSet[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataSet));
}

function storageData() {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(saveData);
  if (saveData) {
    refs.email.value = saveData.email ?? [];
    dataSet.email = saveData.email;
    refs.message.value = saveData.message ?? [];
    dataSet.message = saveData.message;
  }
}
storageData();

refs.form.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
  if (refs.email.value === '' || refs.message.value === '') {
    alert('Please enter all fields!');
    return;
  } else {
    console.log(dataSet);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    dataSet = {};
    refs.email = '';
    refs.message = '';
  }
}
