"use strict";

function burger() {
  var burgerBtn = document.querySelector('.burger');
  var burgerMenu = document.querySelector('.burger-menu');

  if (window.innerWidth > 768) {
    burgerBtn.style.display = 'none';
  }

  burgerBtn.addEventListener('click', function (event) {
    if (window.innerWidth <= 768) {
      if (event.target.className == 'burger' && burgerMenu.style.display == 'block') {
        burgerMenu.style.display = 'none';
      } else {
        burgerMenu.style.display = 'block';
      }
    }
  });
  window.addEventListener('resize', function (event) {
    if (window.innerWidth < 768) {
      burgerMenu.style.display = 'none';
      burgerBtn.style.display = 'block';
    } else {
      burgerBtn.style.display = 'none';
    }
  });
}

module.exports = burger;