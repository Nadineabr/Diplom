"use strict";

require("core-js/modules/es6.regexp.match");

function ajax() {
  var message = new Object();
  message.loading = "Идет отправка...";
  message.success = "Отправлено";
  message.failure = "Ошибка";
  var form = document.querySelectorAll('.form-other'),
  input = document.querySelectorAll('input'), 
  statusMessage = document.createElement('div'), 
  modals = document.getElementsByClassName('modals')[0],
   msg = document.querySelectorAll('.msg'), 
   textMessage = document.querySelector('.message');
   
   statusMessage.classList.add('away');

  modals.addEventListener('submit', function (event) {
    var target = event.target;

    if (target && target.nodeName == 'FORM') {
      event.preventDefault();
      msg[+target.className.match(/^\S/)[0]].appendChild(statusMessage);
      var request = new XMLHttpRequest();
      request.open("POST", "server.php");
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      var formData = new FormData(form[+target.className.match(/^\S/)[0]]);
      request.send(formData);

      request.onreadystatechange = function () {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 300) {
            for (var i = 0; i < form.length; i++) {
              form[i].style.display = 'none';
              statusMessage.innerHTML = message.success;
            }
          } else {
            for (var _i = 0; _i < form.length; _i++) {
              form[_i].style.display = 'none';
              statusMessage.innerHTML = message.failure;
            }
          }
        }
      };

      for (var i = 0; i < input.length; i++) {
        input[i].value = "";
      }

      textMessage.value = '';
    }

    ;
  });
}

module.exports = ajax;