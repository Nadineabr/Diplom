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