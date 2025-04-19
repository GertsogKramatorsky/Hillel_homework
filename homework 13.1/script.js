const formEl = document.querySelector('.form');             
const nameEl = document.querySelector('.name');
const buttonEl = document.querySelector('.submit');
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number'); 
const emailEl = document.querySelector('.email');
const errorMessageNameEl = document.querySelector('#error-message--name');
const errorMessageMessageEl = document.querySelector('#error-message--message');
const errorMessageNumberEl = document.querySelector('#error-message--number');
const errorMessageEmailEl = document.querySelector('#error-message--email');


function preventNameMistakes () {
    if (nameEl.value) {
        errorMessageNameEl.innerText = '';
    } else {
        errorMessageNameEl.innerText = 'Enter your name';
    }
};
nameEl.addEventListener('focus', preventNameMistakes); // це для того, щоб підказка з'являлась відразу після наведення 
nameEl.addEventListener('input', preventNameMistakes);


function preventMessageMistakes () {
    if (messageEl.value.length >= 5) {
        errorMessageMessageEl.innerText = '';
    } else {
        errorMessageMessageEl.innerText = 'Enter at least 5 symbols';
    }
};
messageEl.addEventListener('focus', preventMessageMistakes);
messageEl.addEventListener('input', preventMessageMistakes);


function preventNumberMistakes () {
    const phoneRegexp = /^\+380\d{9}$/;
    if (phoneRegexp.test(numberEl.value)) {
        errorMessageNumberEl.innerText = '';
    } else {
        errorMessageNumberEl.innerText = 'Enter a valid phone number in a format +380';
    }
};
numberEl.addEventListener('focus', preventNumberMistakes);
numberEl.addEventListener('input', preventNumberMistakes);
numberEl.addEventListener('focus', () => {                  // допомагає користувачу не вводити +380 і розуміти, в якому форматі треба ввести номер
    if (numberEl.value === '') {
        numberEl.value = '+380';
    }
});
numberEl.addEventListener('blur', () => {                   // зника, коли переходить на інший елемент
    if (numberEl.value === '+380') {
        numberEl.value = '';
    }
});


function preventEmailMistakes () {
    const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegexp.test(emailEl.value)) {
        errorMessageEmailEl.innerText = '';
    } else {
        errorMessageEmailEl.innerText = 'Enter a valid email';
    }
};
emailEl.addEventListener('focus', preventEmailMistakes);
emailEl.addEventListener('input', preventEmailMistakes);


formEl.addEventListener('submit', (event) => {              // сабміт форми і показ даних в консоль
    event.preventDefault();

    const formData = new FormData(formEl);
    for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
    }
})



buttonEl.addEventListener('click', () => {          // трохи анімації для кнопки
    buttonEl.classList.add('submit-clicked');

    setTimeout(() => {
        buttonEl.classList.remove('submit-clicked');
    }, 200); 
});
