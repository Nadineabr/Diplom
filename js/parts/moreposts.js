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