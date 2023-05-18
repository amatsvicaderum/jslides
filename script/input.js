const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function showNextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function showPrevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

// document.querySelector('.next-button').addEventListener('click', showNextSlide);
// document.querySelector('.prev-button').addEventListener('click', showPrevSlide);
document.addEventListener('keydown', function(event){
  if (event.key === "ArrowRight") {
    showNextSlide();
  }
});

document.addEventListener('keydown', function(event){
  if (event.key === "ArrowLeft") {
    showPrevSlide();
  }
});

// document.addEventListener('keydown', function(event) {
//   if (event.key == "ArrowRight") {
//     console.log('Enter key pressed');
//   }
// });

showSlide(currentSlide);
