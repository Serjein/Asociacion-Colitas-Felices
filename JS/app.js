const carouselImageWrapper = document.querySelector('.carousel-image-wrapper');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
let currentPosition = 0;

carouselPrev.addEventListener('click', () => {
  currentPosition += 100;
  if (currentPosition > 0) {
    currentPosition = -300;
  }
  carouselImageWrapper.style.transform = `translateX(${currentPosition}%)`;
});

carouselNext.addEventListener('click', () => {
  currentPosition -= 100;
  if (currentPosition < -300) {
    currentPosition = 0;
  }
  carouselImageWrapper.style.transform = `translateX(${currentPosition}%)`;
});

  
