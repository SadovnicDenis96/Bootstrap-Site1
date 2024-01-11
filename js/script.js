function mobileMenu() {
    var x = document.getElementsByTagName("navbar")[0];
    if (x.className === "") {
        x.className += "mobile";
    } else {
        x.className = "";
    }
}

let currentSlide = 1;
const slider = document.getElementById('slider');
const totalSlides = document.querySelectorAll('.slide').length;

function nextSlide() {
  if (currentSlide < totalSlides) {
    currentSlide++;
  } else {
    currentSlide = 1;
  }
  updateSlider();
}

function prevSlide() {
  if (currentSlide > 1) {
    currentSlide--;
  } else {
    currentSlide = totalSlides;
  }
  updateSlider();
}

function updateSlider() {
  const translateValue = -100 * (currentSlide - 1) + '%';
  slider.style.transform = `translateX(${translateValue})`;
}

// Автоматическая прокрутка слайдов каждые 3 секунды
setInterval(() => {
  nextSlide();
}, 3000);