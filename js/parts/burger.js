function burger() {
  let burgerBtn = document.querySelector('.burger');
  let burgerMenu = document.querySelector('.burger-menu');
  let width = document.body.clientWidth;
  burgerBtn.addEventListener('click', e => {
    if (width <= 768) {
      burgerMenu.style.display = "block";

      if (e.target == burgerBtn && burgerMenu.style.display == "block") {
        burgerMenu.style.display = "none";
      } else {
        burgerMenu.style.display = "block";
      }
    }
  });
  burgerBtn.addEventListener('touchstart', e => {
    if (width <= 768) {
      burgerMenu.style.display = "block";

      if (e.target == burgerBtn && burgerMenu.style.display == "block") {
        burgerMenu.style.display = "none";
      } else {
        burgerMenu.style.display = "block";
      }
    }
  });
  window.addEventListener('resize', function (event) {
    if (window.innerWidth > 769) {
      burgerMenu.style.display = 'none';
    }
  });
}

module.exports = burger;