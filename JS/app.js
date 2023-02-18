let index = 0;
const images = document.querySelectorAll('.carousel-image');

setInterval(() => {
  images[index].style.opacity = 0;
  index = (index + 1) % images.length;
  images[index].style.opacity = 1;
}, 4000);

  
