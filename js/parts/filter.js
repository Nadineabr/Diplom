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