//down slider
function feedBackSlider() {
  let slideIndex = 1,
      slides = document.getElementsByClassName('feedback-slider-item'),
      prev = document.querySelector('.main-prev-btn'),
      next = document.querySelector('.main-next-btn');

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  }
  showSlides(0);
  setInterval(function () {
    showSlides(slideIndex += 1);
  }, 7000);
  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });

  function plusSlides(n) {
    showSlides(slideIndex += n);
  };
}

module.exports = feedBackSlider;