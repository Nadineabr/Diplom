"use strict";

require("core-js/modules/es6.regexp.replace");

function popup() {
  var designBtn = document.getElementsByClassName('button-design'),
      popupDesign = document.querySelector('.popup-design'),
      consultBtn = document.getElementsByClassName('button-consultation'),
      popupConsult = document.querySelector('.popup-consultation'),
      gift = document.getElementsByClassName('fixed-gift'),
      popupGift = document.querySelector('.popup-gift'),
      close = document.getElementsByClassName('popup-close'),
      nameDesign = document.querySelectorAll('.name-design'),
      commentDesign = document.querySelectorAll('.comment-design'),
      phoneDesign = document.querySelectorAll('.phone-design'),
      body = document.getElementsByTagName('body')[0],
      form = document.querySelectorAll('.form'),
      msg = document.querySelectorAll('.msg');

  for (var i = 0; i < designBtn.length; i++) {
    designBtn[i].addEventListener('click', function () {
      popupDesign.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  }

  body.addEventListener('click', function (e) {
    var target = e.target;

    if (target.className == 'popup-close' || target.className == 'popup-consultation' || target.className == 'popup-design' || target.className == 'popup-gift') {
      popupDesign.style.display = 'none';
      popupConsult.style.display = 'none';
      popupGift.style.display = 'none';
      document.body.style.overflow = '';

      for (var _i = 0; _i < form.length; _i++) {
        form[_i].style.display = 'block';

        if (!!document.querySelectorAll('.away')[_i]) {
          document.querySelectorAll('.away')[_i].remove();
        }
      }
    }

    if (target.classList.contains('button-consultation')) {
      popupConsult.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  });

  var _loop = function _loop(_i2) {
    gift[_i2].addEventListener('click', function () {
      popupGift.style.display = "flex";
      gift[_i2].style.display = 'none';
    });
  };

  for (var _i2 = 0; _i2 < gift.length; _i2++) {
    _loop(_i2);
  }

  body.addEventListener('input', function () {
    for (var _i3 = 0; _i3 < nameDesign.length; _i3++) {
      nameDesign[_i3].value = nameDesign[_i3].value.replace(/[^А-ЯЁа-яё ]/, '');
    }
  });
  body.addEventListener('input', function () {
    for (var _i4 = 0; _i4 < commentDesign.length; _i4++) {
      commentDesign[_i4].value = commentDesign[_i4].value.replace(/[^А-ЯЁа-яё ?,.()]/, '');
    }
  });
  body.addEventListener("input", function () {
    var _loop2 = function _loop2(_i5) {
      var mask = '+_ (___) ___ ____',
          str = phoneDesign[_i5].value.replace(/\D/g, ''),
          x = 0;

      phoneDesign[_i5].value = mask.replace(/./g, function (input) {
        if (/[_\d]/.test(input) && x < str.length) {
          return str.charAt(x++);
        } else if (x >= str.length) {
          return '';
        } else {
          return input;
        }
      });
    };

    for (var _i5 = 0; _i5 < phoneDesign.length; _i5++) {
      _loop2(_i5);
    }
  });
}

module.exports = popup;