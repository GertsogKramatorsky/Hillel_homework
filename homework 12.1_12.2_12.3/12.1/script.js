let createLinkEl = document.querySelector('.createlink');
let followLinkEl = document.querySelector('.followlink');
let userLink = '';

createLinkEl.addEventListener('click', () => {
    userLink = prompt('Введіть посилання на сайт', 'https://');
    if (userLink === '' || userLink === 'https://') {
        alert('Спробуйте ще раз');
    } else if (userLink === null) {
        alert('Ви скасували введення');
    }
});

followLinkEl.addEventListener('click', () => {
    location.href = userLink;
})



