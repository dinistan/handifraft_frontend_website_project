let currentImageIndex = 0;
const backgroundImages = [
    'url("bg1.png")',
    'url("bg2.png")',
    'url("bg3.png")'
];

const carouselElement = document.getElementById('carousel');

function updateBackgroundImage() {
    carouselElement.style.backgroundImage = backgroundImages[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex === 0) ? backgroundImages.length - 1 : currentImageIndex - 1;
    updateBackgroundImage();
}

function nextImage() {
    currentImageIndex = (currentImageIndex === backgroundImages.length - 1) ? 0 : currentImageIndex + 1;
    updateBackgroundImage();
}

setInterval(nextImage, 2000);

updateBackgroundImage();


