"use strict";

require("core-js/modules/es6.regexp.match");

require("core-js/modules/es6.regexp.replace");

function filter() {
  var portfolioMenu = document.getElementsByClassName('portfolio-menu')[0],
      portfolioBlock = document.querySelectorAll('.image'),
      noImg = document.querySelector('.no-img');
  portfolioMenu.addEventListener('click', function (e) {
    var target = e.target;

    if (target && target.nodeName == 'LI') {
      for (var i = 0; i < portfolioMenu.childNodes.length; i++) {
        var activeFrame = portfolioMenu.childNodes[i];

        if (activeFrame.className) {
          activeFrame.className = activeFrame.className.replace(/(?:^|\s)active(?!\S)/, '');
        }
      }

      target.classList.toggle('active');
    }

    if (!target.classList.contains("all")) {
      for (var _i = 0; _i < portfolioBlock.length; _i++) {
        var activeImg = portfolioBlock[_i].getAttribute('class');

        if ("".concat(activeImg.match(/^\S+\s/)) == "".concat(target.className.match(/^\S+\s/))) {
          portfolioBlock[_i].className = portfolioBlock[_i].className.replace(/(?:^|\s)portfolio-no(?!\S)/, ' portfolio-block');
        } else {
          portfolioBlock[_i].className = portfolioBlock[_i].className.replace(/(?:^|\s)portfolio-block(?!\S)/, ' portfolio-no');
        }
      }

      if (document.querySelectorAll('.portfolio-block').length == 0) {
        noImg.style.display = "block";
      } else {
        noImg.style.display = "none";
      }
    } else {
      for (var _i2 = 0; _i2 < portfolioBlock.length; _i2++) {
        portfolioBlock[_i2].className = portfolioBlock[_i2].className.replace(/(?:^|\s)portfolio-no(?!\S)/, ' portfolio-block');
        noImg.style.display = "none";
      }
    }
  });
}

module.exports = filter;