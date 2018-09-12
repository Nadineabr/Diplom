function gift() {
  let popupGift = document.querySelector('.popup-gift'),
      close = document.querySelector('.popup-close'),
      gift = document.querySelector('.fixed-gift'),
      body = document.getElementsByTagName('body')[0];
  let currentCount = 0;
  body.addEventListener('click', function (e) {
    if (e.target.tagName == "BUTTON" || e.target.className == 'popup-gift') currentCount++;
  }); //пользователь долистал до конца страницы и никуда не кликнул

  document.addEventListener('scroll', function (e) {
    const endScrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (endScrollTop === document.documentElement.scrollTop && currentCount == 0) {
      popupGift.style.display = 'block';
      gift.style.display = 'none';
      document.body.style.overflow = 'hidden';
    }
  });
}

module.exports = gift;