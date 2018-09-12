"use strict";

require("core-js/modules/es6.regexp.replace");

function ajaxMsg() {
  var connect = new Object();
  connect.loading = "Идет отправка...";
  connect.success = "Отправлено";
  connect.failure = "Ошибка";
  var form = document.querySelector('.ajax-message'),
  input = form.getElementsByTagName('input'), 
  comment = document.querySelector('.comment'), 
  statusConnect = document.createElement('div'), 
  inputText = document.querySelector('.input-text');
  statusConnect.classList.add('other-away');
  inputText.addEventListener("input", function () {
    inputText.value = inputText.value.replace(/[^А-ЯЁа-яё ?,.()]/, '');
  });
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    comment.appendChild(statusConnect);
    var request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var formData = new FormData(form);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusConnect.innerHTML = connect.loading;
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          statusConnect.innerHTML = connect.success;
        } else {
          statusConnect.innerHTML = connect.failure;
        }
      }
    };

    for (var i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  });
}

module.exports = ajaxMsg;