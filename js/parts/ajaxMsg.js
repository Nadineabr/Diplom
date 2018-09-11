function ajaxMsg() {

  let message = new Object();
  message.loading = "Идет отправка...";
  message.success = "Отправлено";
  message.failure = "Ошибка";
  let form = document.querySelectorAll('.form');
  let input = document.querySelectorAll('input');
  let comment = document.getElementsByTagName('textarea');
  let modals = document.getElementsByClassName('modals')[0];
  let body = document.getElementsByTagName('body')[0];
  let msg = document.querySelectorAll('.msg');
  let statusMessage = document.createElement('div');

  statusMessage.classList.add('status');
	
  body.addEventListener('submit', (e) => {
    let target = e.target;

    if (target && target.nodeName == 'FORM') {
      event.preventDefault();


      let request =  new XMLHttpRequest();
		request.open("POST", "server.php")

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(body);

		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusConnect.innerHTML = connect.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusConnect.innerHTML = connect.success;
					//Добавляем контент на страницу
				} else {
					statusConnect.innerHTML = connect.failure;
				}
			}
		}
		for (let i = 0; i < input.length; i++)
			 {
			 	input[i].value = "";
			 	//Очищаем поля ввода
			 }
		};
	});
}
module.exports = ajaxMsg;