	// Sliders
let slideIndex = 1,
	feedbackSlides = document.getElementsByClassName('feedback-slider-item'),
    prev = document.querySelector('.main-prev-btn'),
    next = document.querySelector('.main-next-btn'),
	slides = document.getElementsByClassName('main-slider-item');
		
	showSlides(slideIndex)

	function showSlides(n) {

		if (n > slides.length) {
			slideIndex = 1;
		};
		if (n < 1) {
			slideIndex = slides.length;
		};
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		};		
		slides[slideIndex - 1].style.display = 'block';

		if (n > feedbackSlides.length) {
			slideIndex = 1;
		};
		if (n < 1) {
			slideIndex = feedbackSlides.length;
		};
		for (let i = 0; i < feedbackSlides.length; i++) {
			feedbackSlides[i].style.display = 'none';
		};		
		feedbackSlides[slideIndex - 1].style.display = 'block';
	}

	function plusSlides (n) {
		showSlides(slideIndex += n);
	}
	function currentSlide (n) {
		showSlides(slideIndex = n);
	}
	function nextSlide() {
		plusSlides(1)
	}
	setInterval(nextSlide, 5000)

	prev.addEventListener('click', function () {
      plusSlides(-1);
    });
    next.addEventListener('click', function () {
      plusSlides(1);
    });



	//modal popup
	let designBtn = document.getElementsByClassName('button-design'),
	popupDesign = document.querySelector('.popup-design'),
	consultBtn = document.getElementsByClassName('button-consultation'),
	popupConsult = document.querySelector('.popup-consultation'),
	gift = document.getElementsByClassName('fixed-gift'),
	popupGift = document.querySelector('.popup-gift'),
	close = document.getElementsByClassName('popup-close'),
	modals = document.querySelector('.modals');
	
	for (let i = 0; i < designBtn.length; i++) {
		designBtn[i].addEventListener('click', () => {
		popupDesign.style.display = 'flex';
		document.body.style.overflow = 'hidden';
	}); 
}
	for (let i = 0; i < consultBtn.length; i++) {
		consultBtn[i].addEventListener('click', () => {
		popupConsult.style.display = 'flex';
		document.body.style.overflow = 'hidden'
	});
}
	modals.addEventListener('click', (e) => {
		let target = e.target;
		if (target.className == 'popup-close' || target.className == 'popup-consultation' || target.className == 'popup-design' || target.className == 'popup-gift') {
			for (let i = 0; i < close.length; i++)  {
				if (target == close[i] || target == popupDesign || target == popupConsult || target == popupGift) {
					popupDesign.style.display = 'none';
					popupConsult.style.display = 'none';
					popupGift.style.display = 'none';
					document.body.style.overflow = '';
				}
			}
		}
	});	
	for (let i = 0; i < gift.length; i++) {
		gift[i].addEventListener('click', () => {
		  popupGift.style.display = "flex";
		  gift[i].style.display = 'none';

		});
	}







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
let reg = /^[А-ЯЁ][а-яё]*$/;
// let regTel = /\(\d{3}\)\s\d{3}-\d{2}-\d{2}/

modals.addEventListener('submit', (event) => {
	let target = event.target;
	if (target && target.nodeName == 'FORM' ) {
		event.preventDefault();
	 	target.appendChild(statusMessage);

for (let i=0; i < inputsName.length; i++) {
	if (inputsName[i].value.match(reg) && comment.value.match(reg)) {
 		
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
	} else {
		inputsName[i].value = "";
 	 	comment.value = ""
	}
}}
});


//ajax more posts

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

	let request =  new XMLHttpRequest();
	request.open("POST", "server.php")

	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let formData =  new FormData(styles);

	request.send(formData);

	request.onreadystatechange = () => {
		if (request.readyState < 4) {
			moreStyles.innerHTML = "Загрузка...";
		} else if (request.readyState === 4){
			if (request.status == 200 && request.status < 300) {
				newBlocks.forEach((element) => {
				element.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs", "styles-2")	
				element.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1")  
				})
					moreStyles.style.display ='none'
			} else {
				moreStyles.innerHTML = "Что-то пошло не так...";
				}
			}
		}
	}
});



 //Calc
    let size = document.getElementById('size'),
        material = document.getElementById('material'),
        opt = document.getElementById('options'),
        totalValue = document.getElementsByClassName('calc-price')[0],
        sizeSum = 0,
        materialSum = 0,
        total = 0;
    totalValue.innerHTML = "Для  расчета нужно выбрать размер картины и материал картины";

    size.addEventListener('change', function () {
    	// for (let i = 1; i < size.option.length; i++) {
    	sizeSum = +this.options[this.selectedIndex].value;
     	total = (materialSum + sizeSum);

      if (material.options.value == material.options[0].value || size.options.value == size.options[0].value || typeof(sizeSum) === "string" || typeof(materialSum) === "string") {
        totalValue.innerHTML = "введите";
      } else {
        totalValue.innerHTML = total;
      }
    	// }
     
    });
    material.addEventListener('change', function () {
      materialSum = +this.options[this.selectedIndex].value;
      total = (materialSum + sizeSum);

      if (size.options.value == size.options[0].value || material.options.value == material.options[0].value) {
        totalValue.innerHTML = "введите";
        
      } else {
        totalValue.innerHTML = total;
      }
    });
    opt.addEventListener('change', function () {
      if (material.options.value == material.options[0].value || size.options.value == size.options[0].value) {
        totalValue.innerHTML = "введите";
        
      } else {
        var a = total;
        totalValue.innerHTML = a * this.options[this.selectedIndex].value;
      }
    });
    size.addEventListener('change', function () {
      if (size.options.value == size.options[0].value || material.options.value == material.options[0].value) {
        totalValue.innerHTML = 0;
      }
    });
    material.addEventListener('change', function () {
      if (material.options.value == material.options[0].value || size.options.value == size.options[0].value) {
        totalValue.innerHTML = "введите";
      
      }
    });
console.log(materialSum)