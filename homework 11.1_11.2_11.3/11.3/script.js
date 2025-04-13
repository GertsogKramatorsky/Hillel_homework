(function showRandomImage() {
    let images = document.getElementsByTagName('img');

    let randomImage = Math.floor(Math.random() * 9);

    for (let i = 0; i < images.length; i++) {
        if (i == randomImage) {
            images[i].style.display = 'block';
        }
    }
    console.log(`Картинка - ${randomImage + 1}.jpg`);
})();



