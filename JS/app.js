const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = carouselImages[0].clientWidth;

setInterval(() => {
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  counter++;
  if (counter === carouselImages.length) {
    counter = 0;
  }
}, 5000);
