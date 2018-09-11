function ajax() {
  let message = new Object();
  message.loading = "Идет отправка...";
  message.success = "Отправлено";
  message.failure = "Ошибка";
  let form = document.querySelectorAll('.form');
  let input = document.querySelectorAll('input');
  let statusMessage = document.createElement('div');
  let comment = document.getElementsByTagName('textarea');
  let modals = document.getElementsByClassName('modals')[0];
  let body = document.getElementsByTagName('body')[0];
  let msg = document.querySelectorAll('.msg');

  statusMessage.classList.add('away');
  modals.addEventListener('submit', (event) => {
    let target = event.target;

    if (target && target.nodeName == 'FORM') {
      event.preventDefault();

      msg[+target.className.match(/^\S/)[0]].appendChild(statusMessage);

      let request = new XMLHttpRequest();
      request.open("POST", "server.php");
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      let formData = new FormData(form[+target.className.match(/^\S/)[0]]);
        request.send(formData);

      request.onreadystatechange = () => {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 300) {
              for (let i = 0; i < form.length; i++) {
                form[i].style.display = 'none';
                statusMessage.innerHTML = message.success;
              } 
          } else {
            for (let i = 0; i < form.length; i++) {
                form[i].style.display = 'none';
                statusMessage.innerHTML = message.failure;
              }
          }      
        }
      };

      for (let i = 0; i < input.length; i++) {
        input[i].value = "";
      }   
  };
})
}

module.exports = ajax;