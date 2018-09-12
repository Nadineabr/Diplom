(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener("DOMContentLoaded", () => {

let accordion = require('../parts/accordion.js');
let ajax = require('../parts/ajax.js');
let burger = require('../parts/burger.js');
let calc = require('../parts/calc.js');
let feedbackslider = require('../parts/feedbackslider.js');
let filter = require('../parts/filter.js');
let gift = require('../parts/gift.js');
let ajaxMsg= require('../parts/ajaxMsg.js');
let moreposts = require('../parts/moreposts.js');
let popup = require('../parts/popup.js');
let showimage = require('../parts/showimage.js');
let topslider = require('../parts/topslider.js');
let timemodal = require('../parts/timemodal.js');

accordion();
ajax();
burger();
calc();
feedbackslider();
filter();
gift();
ajaxMsg();
moreposts();
popup();
showimage();
topslider();
timemodal();

}); 
},{"../parts/accordion.js":2,"../parts/ajax.js":3,"../parts/ajaxMsg.js":4,"../parts/burger.js":5,"../parts/calc.js":6,"../parts/feedbackslider.js":7,"../parts/filter.js":8,"../parts/gift.js":9,"../parts/moreposts.js":10,"../parts/popup.js":11,"../parts/showimage.js":12,"../parts/timemodal.js":13,"../parts/topslider.js":14}],2:[function(require,module,exports){
//accordion
function accordion() {
  let accordionHeading = document.querySelectorAll('.accordion-heading');
  let accordionBlock = document.querySelectorAll('.accordion-block');
  let accordion = document.getElementById('accordion');

  for (let i = 0; i < accordionBlock.length; i++) {
    accordionBlock[i].style.display = 'none';
  }

  accordion.addEventListener('click', e => {
    for (let i = 0; i < accordionHeading.length; i++) {
      if (e.target == accordionHeading[i].firstChild) {
        if (accordionHeading[i].classList.contains('ui-accordion-header-active')) {
          accordionBlock[i].style.display = 'none';
          accordionHeading[i].classList.remove('ui-accordion-header-active');
        } else {
          accordionHeading[i].classList.add("ui-accordion-header-active");

          for (let x = 0; x < accordionBlock.length; x++) {
            accordionBlock[x].style.display = 'none';
            accordionHeading[x].classList.remove('ui-accordion-header-active');
          }

          accordionBlock[i].style.display = '';
          accordionHeading[i].classList.add('ui-accordion-header-active');
        }
      }
    }
  });
}

module.exports = accordion;
},{}],3:[function(require,module,exports){
function ajax() {
  let message = new Object();
  message.loading = "Идет отправка...";
  message.success = "Отправлено";
  message.failure = "Ошибка";
  let form = document.querySelectorAll('.form-other');
  let input = document.querySelectorAll('input');
  let statusMessage = document.createElement('div');
  let comment = document.getElementsByTagName('textarea');
  let modals = document.getElementsByClassName('modals')[0];
  let body = document.getElementsByTagName('body')[0];
  let msg = document.querySelectorAll('.msg');
  let textMessage = document.querySelector('.message');
  statusMessage.classList.add('away');
  modals.addEventListener('submit', event => {
    let target = event.target;

    if (target && target.nodeName == 'FORM') {
      event.preventDefault();
      msg[+target.className.match(/^\S/)[0]].appendChild(statusMessage);
      let request = new XMLHttpRequest();
      request.open("POST", "server.php");
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      let formData = new FormData(form[+target.className.match(/^\S/)[0]]);
      request.send(formData);

      request.onreadystatechange = () => {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 300) {
            for (let i = 0; i < form.length; i++) {
              form[i].style.display = 'none';
              statusMessage.innerHTML = message.success;
            }
          } else {
            for (let i = 0; i < form.length; i++) {
              form[i].style.display = 'none';
              statusMessage.innerHTML = message.failure;
            }
          }
        }
      };

      for (let i = 0; i < input.length; i++) {
        input[i].value = "";
      }

      textMessage.value = '';
    }

    ;
  });
}

module.exports = ajax;
},{}],4:[function(require,module,exports){
function ajaxMsg() {
  let connect = new Object();
  connect.loading = "Идет отправка...";
  connect.success = "Отправлено";
  connect.failure = "Ошибка";
  let form = document.querySelector('.ajax-message');
  let input = form.getElementsByTagName('input');
  let comment = document.querySelector('.comment');
  let modals = document.getElementsByClassName('modals')[0];
  let body = document.getElementsByTagName('body')[0];
  let statusConnect = document.createElement('div');
  let inputText = document.querySelector('.input-text');
  statusConnect.classList.add('other-away');
  inputText.addEventListener("input", function () {
    inputText.value = inputText.value.replace(/[^А-ЯЁа-яё ?,.()]/, '');
  });
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    comment.appendChild(statusConnect);
    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    let formData = new FormData(form);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusConnect.innerHTML = connect.loading;
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          statusConnect.innerHTML = connect.success;
        } else {
          statusConnect.innerHTML = connect.failure;
        }
      }
    };

    for (let i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  });
}

module.exports = ajaxMsg;
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
function calc() {
  let size = document.getElementById('size'),
      material = document.getElementById('material'),
      opt = document.getElementById('options'),
      totalValue = document.getElementsByClassName('calc-price')[0],
      promocode = document.querySelector('.promocode'),
      sizeSum = 0,
      optSum = 1,
      materialSum = 0,
      total = 0;
  totalValue.innerHTML = "Для  расчета нужно выбрать размер картины и материал картины";
  size.addEventListener('change', function () {
    sizeSum = +this.options[this.selectedIndex].value;
    total = (materialSum + sizeSum) * optSum;

    if (size.value == 0 || material.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }

    if (promocode.value == "IWANTPOPART") {
      totalValue.innerHTML = totalValue.innerHTML * 0.7;
    } else if (material.value == 0 || size.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  material.addEventListener('change', function () {
    materialSum = +this.options[this.selectedIndex].value;
    total = (materialSum + sizeSum) * optSum;

    if (size.value == 0 || material.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }

    if (promocode.value == "IWANTPOPART") {
      totalValue.innerHTML = totalValue.innerHTML * 0.7;
    } else if (material.value == 0 || size.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  opt.addEventListener('change', function () {
    optSum = +this.options[this.selectedIndex].value;
    total = (materialSum + sizeSum) * optSum;

    if (material.value == 0 || size.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }

    if (promocode.value == "IWANTPOPART") {
      totalValue.innerHTML = totalValue.innerHTML * 0.7;
    } else if (material.value == 0 || size.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  promocode.addEventListener('change', function () {
    if (promocode.value == "IWANTPOPART") {
      totalValue.innerHTML = totalValue.innerHTML * 0.7;
    } else if (material.value == 0 || size.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
}

module.exports = calc;
},{}],7:[function(require,module,exports){
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
  }

  ;
}

module.exports = feedBackSlider;
},{}],8:[function(require,module,exports){
function filter() {
  let portfolioMenu = document.getElementsByClassName('portfolio-menu')[0];
  let portfolioWrapper = document.getElementsByClassName('portfolio-wrapper');
  let portfolioBlock = document.querySelectorAll('.image');
  let allBtn = document.getElementsByClassName('all active')[0];
  let post = document.getElementsByClassName('post');
  let noImg = document.querySelector('.no-img');
  portfolioMenu.addEventListener('click', e => {
    let target = e.target;

    if (target && target.nodeName == 'LI') {
      for (let i = 0; i < portfolioMenu.childNodes.length; i++) {
        let activeFrame = portfolioMenu.childNodes[i];

        if (activeFrame.className) {
          activeFrame.className = activeFrame.className.replace(/(?:^|\s)active(?!\S)/, '');
        }
      }

      target.classList.toggle('active');
    }

    if (!target.classList.contains("all")) {
      for (let i = 0; i < portfolioBlock.length; i++) {
        let activeImg = portfolioBlock[i].getAttribute('class');

        if (`${activeImg.match(/^\S+\s/)}` == `${target.className.match(/^\S+\s/)}`) {
          portfolioBlock[i].className = portfolioBlock[i].className.replace(/(?:^|\s)portfolio-no(?!\S)/, ' portfolio-block');
        } else {
          portfolioBlock[i].className = portfolioBlock[i].className.replace(/(?:^|\s)portfolio-block(?!\S)/, ' portfolio-no');
        }
      }

      if (document.querySelectorAll('.portfolio-block').length == 0) {
        noImg.style.display = "block";
      } else {
        noImg.style.display = "none";
      }
    } else {
      for (let i = 0; i < portfolioBlock.length; i++) {
        portfolioBlock[i].className = portfolioBlock[i].className.replace(/(?:^|\s)portfolio-no(?!\S)/, ' portfolio-block');
        noImg.style.display = "none";
      }
    }
  });
}

module.exports = filter;
},{}],9:[function(require,module,exports){
function gift() {
  let popupGift = document.querySelector('.popup-gift'),
      close = document.querySelector('.popup-close'),
      gift = document.querySelector('.fixed-gift'),
      body = document.getElementsByTagName('body')[0];
  let currentCount = 0;
  body.addEventListener('click', e => {
    if (e.target.tagName == "BUTTON" || e.target == popupGift) currentCount++;
  }); //пользователь долистал до конца страницы и никуда не кликнул

  document.addEventListener('scroll', event => {
    const endScrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (endScrollTop === document.documentElement.scrollTop && currentCount == 0) {
      popupGift.style.display = 'block';
      gift.style.display = 'none';
      document.body.style.overflow = 'hidden';
    }
  });
}

module.exports = gift;
},{}],10:[function(require,module,exports){
function morePosts() {
  let moreStyles = document.getElementsByClassName('button-styles')[0];
  let stylesBlock = document.getElementsByClassName('styles-block');
  let newBlocks = document.querySelectorAll('.styles-2');
  let statusPosts = document.createElement('div');
  let styles = document.getElementsByClassName('styles');
  moreStyles.addEventListener('click', event => {
    let target = event.target;

    if (target && target.nodeName == 'BUTTON') {
      event.preventDefault();
      target.appendChild(statusPosts);
      newBlocks.forEach(element => {
        element.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs", "styles-2");
        element.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
      });
      moreStyles.style.display = 'none';
    }
  });
}

module.exports = morePosts;
},{}],11:[function(require,module,exports){
function popup() {
  let designBtn = document.getElementsByClassName('button-design'),
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

  for (let i = 0; i < designBtn.length; i++) {
    designBtn[i].addEventListener('click', () => {
      popupDesign.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  }

  body.addEventListener('click', e => {
    let target = e.target;

    if (target.className == 'popup-close' || target.className == 'popup-consultation' || target.className == 'popup-design' || target.className == 'popup-gift') {
      popupDesign.style.display = 'none';
      popupConsult.style.display = 'none';
      popupGift.style.display = 'none';
      document.body.style.overflow = '';

      for (let i = 0; i < form.length; i++) {
        form[i].style.display = 'block';

        if (!!document.querySelectorAll('.away')[i]) {
          document.querySelectorAll('.away')[i].remove();
        }
      }
    }

    if (target.classList.contains('button-consultation')) {
      popupConsult.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  });

  for (let i = 0; i < gift.length; i++) {
    gift[i].addEventListener('click', () => {
      popupGift.style.display = "flex";
      gift[i].style.display = 'none';
    });
  }

  body.addEventListener('input', () => {
    for (let i = 0; i < nameDesign.length; i++) {
      nameDesign[i].value = nameDesign[i].value.replace(/[^А-ЯЁа-яё ]/, '');
    }
  });
  body.addEventListener('input', () => {
    for (let i = 0; i < commentDesign.length; i++) {
      commentDesign[i].value = commentDesign[i].value.replace(/[^А-ЯЁа-яё ?,.()]/, '');
    }
  });
  body.addEventListener("input", function () {
    for (let i = 0; i < phoneDesign.length; i++) {
      let mask = '+_ (___) ___ ____',
          str = phoneDesign[i].value.replace(/\D/g, ''),
          x = 0;
      phoneDesign[i].value = mask.replace(/./g, function (input) {
        if (/[_\d]/.test(input) && x < str.length) {
          return str.charAt(x++);
        } else if (x >= str.length) {
          return '';
        } else {
          return input;
        }
      });
    }
  });
}

module.exports = popup;
},{}],12:[function(require,module,exports){
function showImage() {
  let sizesBlock = document.querySelectorAll('.sizes-block');
  let sizeHide = document.querySelectorAll('.size-hide');

  for (let i = 0; i < sizesBlock.length; i++) {
    sizesBlock[i].onmouseover = function (e) {
      let target = e.target;

      if (target && target.nodeName == "IMG") {
        target.src = target.src.replace('img/sizes-1.png', 'img/sizes-1-1.png');
        target.src = target.src.replace('img/sizes-2.png', 'img/sizes-2-1.png');
        target.src = target.src.replace('img/sizes-3.png', 'img/sizes-3-1.png');
        target.src = target.src.replace('img/sizes-4.png', 'img/sizes-4-1.png');
        sizeHide[i].style.display = 'none';
      }
    };

    sizesBlock[i].onmouseout = function (e) {
      let target = e.target;

      if (target && target.nodeName == "IMG") {
        target.src = target.src.replace('img/sizes-1-1.png', 'img/sizes-1.png');
        target.src = target.src.replace('img/sizes-2-1.png', 'img/sizes-2.png');
        target.src = target.src.replace('img/sizes-3-1.png', 'img/sizes-3.png');
        target.src = target.src.replace('img/sizes-4-1.png', 'img/sizes-4.png');
        sizeHide[i].style.display = 'block';
      }
    };

    sizesBlock[i].touchstart = function (e) {
      let target = e.target;

      if (target.tagName == "IMG") {
        target.src = target.src.replace('img/sizes-1.png', 'img/sizes-1-1.png');
        target.src = target.src.replace('img/sizes-2.png', 'img/sizes-2-1.png');
        target.src = target.src.replace('img/sizes-3.png', 'img/sizes-3-1.png');
        target.src = target.src.replace('img/sizes-4.png', 'img/sizes-4-1.png');
        sizeHide[i].style.display = 'none';
      }

      if (target.node.nodeName == "DIV") {
        target.src = target.src.replace('img/sizes-1-1.png', 'img/sizes-1.png');
        target.src = target.src.replace('img/sizes-2-1.png', 'img/sizes-2.png');
        target.src = target.src.replace('img/sizes-3-1.png', 'img/sizes-3.png');
        target.src = target.src.replace('img/sizes-4-1.png', 'img/sizes-4.png');
        sizeHide[i].style.display = 'block';
      }
    };
  }

  ;
}

module.exports = showImage;
},{}],13:[function(require,module,exports){
function timeModal() {
  let popupConsult = document.querySelector('.popup-consultation'),
      close = document.querySelector('.popup-close'),
      body = document.getElementsByTagName('body')[0];
  setTimeout(() => {
    popupConsult.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }, 60000);
}

module.exports = timeModal;
},{}],14:[function(require,module,exports){
function topSlider() {
  let slideIndex = 1,
      slides = document.getElementsByClassName('main-slider-item');

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
  }, 5000);
}

module.exports = topSlider;
},{}]},{},[1]);
