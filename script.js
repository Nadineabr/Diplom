//top slider
window.addEventListener("DOMContentLoaded", () => {


function mainSlider() {
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
	setInterval(function() {
		showSlides(slideIndex+=1)
	}, 5000)
}
mainSlider();

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
    setInterval(function() {
		showSlides(slideIndex+=1)

	}, 7000)
	prev.addEventListener('click', function () {
      plusSlides(-1);
    });
    next.addEventListener('click', function () {
      plusSlides(1);
    });
function plusSlides(n) {
        showSlides(slideIndex += n);
    };

}
feedBackSlider();


//modal popup

function popup() {
	let designBtn = document.getElementsByClassName('button-design'),
	popupDesign = document.querySelector('.popup-design'),
	consultBtn = document.getElementsByClassName('button-consultation'),
	popupConsult = document.querySelector('.popup-consultation'),
	gift = document.getElementsByClassName('fixed-gift'),
	popupGift = document.querySelector('.popup-gift'),
	close = document.getElementsByClassName('popup-close'),
	nameDesign = document.querySelector('.name-design'),
	commentDesign = document.querySelector('.comment-design'),
	phoneDesign = document.querySelector('.phone-design'),
	modals = document.querySelector('.modals'),
	body = document.getElementsByTagName('body')[0];

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
		}
		 if(target.classList.contains('button-consultation')) {
		  	popupConsult.style.display = 'flex';
			// document.body.style.overflow = 'hidden'
		  }
	});	
	for (let i = 0; i < gift.length; i++) {
		gift[i].addEventListener('click', () => {
		  popupGift.style.display = "flex";
		  gift[i].style.display = 'none';

		});
	}
	nameDesign.addEventListener('input', () => {
	  nameDesign.value = nameDesign.value.replace(/[^А-ЯЁа-яё ]/, '')

	});
	commentDesign.addEventListener('input', () => {
	  commentDesign.value = commentDesign.value.replace(/[^А-ЯЁа-яё ?,.()]/, '')
	});

	phoneDesign.addEventListener("input", function() {
	    let mask = '+_ (___) ___ ____',
	        str = this.value.replace(/\D/g, ''),
	        i = 0;

	    this.value = mask.replace(/./g, function(input) {
	        if (/[_\d]/.test(input) && i < str.length) {
	        	return str.charAt(i++);
	        } else if (i >= str.length) {
	        	return '';
	        } else {
	        	return input;
	        }	
	    });
	});

}
popup();

function ajax(){
//ajax form

let message = new Object();
message.loading = "Идет отправка...";
message.success = "Отправлено";
message.failure = "Ошибка";
let form = document.querySelectorAll('form');
let input = document.querySelectorAll('input');
let statusMessage = document.createElement('div');	
let inputsName = document.querySelectorAll('input[name=name]');
let comment = document.getElementsByTagName('textarea');
let modals = document.getElementsByClassName('modals')[0];
modals.addEventListener('submit', (event) => {
	let target = event.target;
	if (target && target.nodeName == 'FORM' ) {
		event.preventDefault();
	 	target.appendChild(statusMessage);

	let request =  new XMLHttpRequest();
	request.open("POST", "server.php")

	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let formData =  new FormData(modals);

	request.send(formData);

	request.onreadystatechange = () => {
		if (request.readyState < 4) {
			statusMessage.innerHTML = message.loading;
		} else if (request.readyState === 4){
			if (request.status == 200 && request.status < 300) {
				for (let i=0; i < form.length; i++) {
					form[i].innerHTML = message.success;
					}
			} else {
				statusMessage.innerHTML = message.failure;
				for (let i=0; i < form.length; i++) {
					form[i].innerHTML = message.failure;
				}
			}
		}
	}
		for (let i=0; i < input.length; i++) {
			input[i].value = "";
		}
}
});
}
ajax()

// more posts

function morePosts(){
let moreStyles = document.getElementsByClassName('button-styles')[0];
let stylesBlock = document.getElementsByClassName('styles-block');
let newBlocks = document.querySelectorAll('.styles-2');
let statusPosts = document.createElement('div');	
let styles = document.getElementsByClassName('styles');

moreStyles.addEventListener('click', (event) => {
	let target = event.target;
	if (target && target.nodeName == 'BUTTON' ) {
		event.preventDefault();
	 	target.appendChild(statusPosts);
newBlocks.forEach((element) => {
				element.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs", "styles-2")	
				element.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1")  
				})
					moreStyles.style.display ='none'
	}
});
}
morePosts();


 //Calc
 function calc(){
    let size = document.getElementById('size'),
        material = document.getElementById('material'),
        opt = document.getElementById('options'),
        totalValue = document.getElementsByClassName('calc-price')[0],
        promocode = document.querySelector('.promocode'),
        sizeSum = 0,
        optSum= 1,
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
      } else {
        totalValue.innerHTML = total;
      }
    });
    opt.addEventListener('change', function () {
    	optSum = +this.options[this.selectedIndex].value;
    	total = (materialSum + sizeSum) * optSum;
      if (material.value == 0 || size.value == 0 ) {
        totalValue.innerHTML = 0;
      } else {
        totalValue.innerHTML = total;
        // totalValue.innerHTML = a * this.options[this.selectedIndex].value;
      }
       if (promocode.value == "IWANTPOPART") {
      	totalValue.innerHTML = totalValue.innerHTML * 0.7;
      } else {
        totalValue.innerHTML = total;
      }
    });
    promocode.addEventListener('change', function (){
      if (promocode.value == "IWANTPOPART") {
      	totalValue.innerHTML = totalValue.innerHTML * 0.7;

     	} else {
        totalValue.innerHTML = total;
      }
    });

}
calc();

//фильтрация
function filter() {
let portfolioMenu = document.getElementsByClassName('portfolio-menu')[0];
let portfolioWrapper = document.getElementsByClassName('portfolio-wrapper');
let portfolioBlock = document.querySelectorAll('.image');
let allBtn = document.getElementsByClassName('all active')[0];
let post = document.getElementsByClassName('post');
let noImg = document.querySelector('.no-img');

portfolioMenu.addEventListener('click', (e) => {
  let target = e.target;
if (target && target.nodeName == 'LI' ) {
	for (let i=0; i < portfolioMenu.childNodes.length; i++) {
		let activeFrame = portfolioMenu.childNodes[i];

		if (activeFrame.className) {
			activeFrame.className = activeFrame.className.replace( /(?:^|\s)active(?!\S)/, '' );
			console.log(activeFrame.className)
		}
	}
	target.classList.toggle('active');
}
	if (!target.classList.contains("all")){
for (let i=0; i < portfolioBlock.length; i++) {
		let activeImg = portfolioBlock[i].getAttribute('class');
		if (`${activeImg.match(/^\S+\s/)}` == `${target.className.match(/^\S+\s/)}`) {
			portfolioBlock[i].className = portfolioBlock[i].className.replace( /(?:^|\s)portfolio-no(?!\S)/, ' portfolio-block' );
		} else {
			portfolioBlock[i].className = portfolioBlock[i].className.replace( /(?:^|\s)portfolio-block(?!\S)/, ' portfolio-no' );
		}
	}
 if (document.querySelectorAll('.portfolio-block').length == 0){
 	noImg.style.display = "block";
 } else {
 	noImg.style.display = "none";
 }
} else {
	for (let i=0; i < portfolioBlock.length; i++) {
		portfolioBlock[i].className = portfolioBlock[i].className.replace( /(?:^|\s)portfolio-no(?!\S)/, ' portfolio-block' );
		noImg.style.display = "none";
		}
	}
}); 
}
filter();
}); 