"use strict";

//accordion
function accordion() {
  var accordionHeading = document.querySelectorAll('.accordion-heading'),
      accordionBlock = document.querySelectorAll('.accordion-block'),
      accordion = document.getElementById('accordion');

  for (var i = 0; i < accordionBlock.length; i++) {
    accordionBlock[i].style.display = 'none';
  }

  accordion.addEventListener('click', function (e) {
    for (var _i = 0; _i < accordionHeading.length; _i++) {
      if (e.target == accordionHeading[_i].firstChild) {
        if (accordionHeading[_i].classList.contains('ui-accordion-header-active')) {
          accordionBlock[_i].style.display = 'none';

          accordionHeading[_i].classList.remove('ui-accordion-header-active');
        } else {
          accordionHeading[_i].classList.add("ui-accordion-header-active");

          for (var x = 0; x < accordionBlock.length; x++) {
            accordionBlock[x].style.display = 'none';
            accordionHeading[x].classList.remove('ui-accordion-header-active');
          }

          accordionBlock[_i].style.display = '';

          accordionHeading[_i].classList.add('ui-accordion-header-active');
        }
      }
    }
  });
}

module.exports = accordion;