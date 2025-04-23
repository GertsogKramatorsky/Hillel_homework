const prevBtnEl = document.querySelector('.btn-prev');
const nextBtnEl = document.querySelector('.btn-next');
const visibleImg = document.querySelector('.slider-img');
const navEl = document.querySelector('.slider-nav');

const img1 = '/images/room1.jpg';
const img2 = '/images/room2.jpg';
const img3 = '/images/room3.jpg';
const img4 = '/images/room4.jpg';
const images = [img1, img2, img3, img4];

// початкові налаштування
let indexOfImages = 0;
visibleImg.innerHTML =`<img src=${images[indexOfImages]}>`;
prevBtnEl.style.display = 'none';
let navDots = [];

function swipeNextImg() {
    indexOfImages++;
    nextBtnEl.style.display = indexOfImages === images.length - 1 ? 'none' : 'inline-block';
    prevBtnEl.style.display = indexOfImages === 0 ? 'none' : 'inline-block';
    visibleImg.innerHTML =`<img src=${images[indexOfImages]}>`;
}

function swipePreventImg() {
    indexOfImages--;
    prevBtnEl.style.display = indexOfImages === 0 ? 'none' : 'inline-block';
    nextBtnEl.style.display = indexOfImages === images.length - 1 ? 'none' : 'inline-block';  
    visibleImg.innerHTML =`<img src=${images[indexOfImages]}>`;
}

(function addNavEl() {
    let i = 0;
    while (i < images.length) {
        const dot = document.createElement('div');
        dot.classList.add('nav-button');
        if (i === 0) {
            dot.classList.add('active'); 
        }
        dot.dataset.index = i; 
        navEl.appendChild(dot);
        navDots.push(dot);
        i++;
    }
})();

function updateActiveDot() {
    navDots.forEach(dot => dot.classList.remove('active'));
    navDots[indexOfImages].classList.add('active');
}

navDots.forEach(dot => {
    dot.addEventListener('click', (event) => {
        indexOfImages = Number(event.target.dataset.index);
        visibleImg.innerHTML =`<img src=${images[indexOfImages]}>`;
        updateActiveDot();

        nextBtnEl.style.display = indexOfImages === images.length - 1 ? 'none' : 'inline-block';
        prevBtnEl.style.display = indexOfImages === 0 ? 'none' : 'inline-block';
    })
});

prevBtnEl.addEventListener('click', () => {
    swipePreventImg();
    updateActiveDot();
});

nextBtnEl.addEventListener('click', () => {
    swipeNextImg();
    updateActiveDot();
});

