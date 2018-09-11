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