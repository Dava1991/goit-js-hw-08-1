import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
let dataSet = {};
const refs = {
    inputForm: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea')
};
refs.inputForm.addEventListener('input', throttle(onInputForm, 500));
function onInputForm(e) {
    dataSet[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataSet));
}

populateData();
function populateData() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(savedData);
  if (savedData) {
      refs.email.value = savedData.email ?? [];
      dataSet.email = savedData.email;
      dataSet.message = savedData.message;
      refs.message.value = savedData.message  ?? [];
    };
};

refs.inputForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
    if (refs.email.value === "" || refs.message.value === "") {
        alert(`Please enter all fields!`);
        return;
    } else {
    console.log(dataSet);
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    dataSet = {};
    refs.email = "";
    refs.message = "";
     }
}
