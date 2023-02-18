const carouselContainer = document.querySelector(".carousel-container");
const carouselImages = document.querySelectorAll(".carousel-container img");

let counter = 0;
const imageWidth = carouselImages[0].clientWidth;

setInterval(() => {
  counter++;
  carouselContainer.style.transform = "translateX(" + (-imageWidth * counter) + "px)";
  if (counter === carouselImages.length - 1) {
    setTimeout(() => {
      counter = 0;
      carouselContainer.style.transition = "none";
      carouselContainer.style.transform = "translateX(0px)";
      setTimeout(() => {
        carouselContainer.style.transition = "transform 1s ease";
      }, 100);
    }, 1000);
  }
}, 3000);








  
