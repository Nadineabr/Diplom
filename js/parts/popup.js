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

  body.addEventListener('click', (e) => {
    let target = e.target;

    if (target.className == 'popup-close' || target.className == 'popup-consultation' || target.className == 'popup-design' || target.className == 'popup-gift') {
      popupDesign.style.display = 'none';
      popupConsult.style.display = 'none';
      popupGift.style.display = 'none';
      document.body.style.overflow = '';
      
      for (let i=0; i<form.length; i++ ) {
          form[i].style.display = 'block';
          if (!!document.querySelectorAll('.away')[i]) {
        document.querySelectorAll('.away')[i].remove();
      }
      }
      
    }

    if (target.classList.contains('button-consultation')) {
      popupConsult.style.display = 'flex'; 
      document.body.style.overflow = 'hidden'
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
    for(let i = 0; i < phoneDesign.length; i++) {
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