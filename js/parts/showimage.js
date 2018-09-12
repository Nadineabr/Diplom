"use strict";

function showImage() {
  var sizeWrapper = document.querySelector('.sizes-wrapper'),
      img = document.getElementsByClassName('image'),
      sizeHide = document.getElementsByClassName('size-hide');
  sizeWrapper.addEventListener('mouseover', function (e) {
    if (e.target && e.target.classList.contains('image')) {
      var index = e.target.className.substring(5, 6);
      e.target.setAttribute('src', "img/sizes-".concat(index, "-1.png"));
      sizeHide[index - 1].style.display = 'none';
    }
  });
  sizeWrapper.addEventListener('mouseout', function (e) {
    if (e.target && e.target.classList.contains('image')) {
      var index = e.target.className.substring(5, 6);
      e.target.setAttribute('src', "img/sizes-".concat(index, ".png"));
      sizeHide[index - 1].style.display = 'block';
    }
  });
  sizeWrapper.addEventListener('touchstart', function (e) {
    if (e.target && e.target.classList.contains('image')) {
      var index = e.target.className.substring(5, 6);
      e.target.setAttribute('src', "img/sizes-".concat(index, "-1.png"));
      sizeHide[index - 1].style.display = 'none';
    }

    if (e.target && e.target.classList.contains('sizes-wrapper')) {
      for (var i = 0; i < img.length; i++) {
        img[i].setAttribute('src', "img/sizes-".concat(i + 1, ".png"));
        img[i].style.display = 'block';
        sizeHide[i].style.display = 'block';
      }
    }
  });
}

module.exports = showImage;