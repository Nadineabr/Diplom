function ajaxMsg() {

  let connect = new Object();
  connect.loading = "Идет отправка...";
  connect.success = "Отправлено";
  connect.failure = "Ошибка";
  let form = document.querySelector('.ajax-message');
  let input = form.getElementsByTagName('input'); 
  let comment = document.querySelector('.comment');
  let modals = document.getElementsByClassName('modals')[0];
  let body = document.getElementsByTagName('body')[0];
  let statusConnect = document.createElement('div');
  let inputText = document.querySelector('.input-text');

  statusConnect.classList.add('other-away');

  	inputText.addEventListener("input", function() {
		inputText.value = inputText.value.replace(/[^А-ЯЁа-яё ?,.()]/, '');
	});

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		comment.appendChild(statusConnect);

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		let formData = new FormData(form);
		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusConnect.innerHTML = connect.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
				statusConnect.innerHTML = connect.success;
				} else {
				statusConnect.innerHTML = connect.failure;
				}
			}
		}

		for (let i = 0; i < input.length; i++) {
			input[i].value = ''; 
		}
	});
}
module.exports = ajaxMsg;