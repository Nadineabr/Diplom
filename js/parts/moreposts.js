function morePosts() {
  let moreStyles = document.querySelector('.button-transparent'),
      newBlocks = document.querySelectorAll('.styles-2');
  moreStyles.addEventListener('click', function () {
    for (let i = 0; i < newBlocks.length; i++) {
      newBlocks[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 styles-2';
    }

    this.style.display = 'none';
  });
}

module.exports = morePosts;