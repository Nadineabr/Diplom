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

      if (target.tagName == "IMG")  {
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
  };
}

module.exports = showImage;