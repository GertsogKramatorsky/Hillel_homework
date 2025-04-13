let button = document.querySelector('button');
let text = document.querySelector('p');

button.addEventListener('click', function() {
    text.classList.toggle('secondColor');
});