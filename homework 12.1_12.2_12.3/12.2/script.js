let wrapperEl = document.querySelector('.wrapper');
let firstButtonEl = document.querySelector('.firstbutton');
let secondButtonEl = document.querySelector('.secondbutton');
let thirdButtonEl = document.querySelector('.thirdbutton');

wrapperEl.addEventListener('click', (event) => {
    switch (event.target.className) {
        case 'firstbutton':
            alert(`Клікнути на кнопці: ${event.target.textContent}`);
            break;
        case 'secondbutton':
            alert(`Клікнути на кнопці: ${event.target.textContent}`);
            break;
        case 'thirdbutton':
            alert(`Клікнути на кнопці: ${event.target.textContent}`);
            break;
    }
})