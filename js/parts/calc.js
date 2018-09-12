function calc() {
  let size = document.getElementById('size'),
      material = document.getElementById('material'),
      opt = document.getElementById('options'),
      totalValue = document.getElementsByClassName('calc-price')[0],
      promocode = document.querySelector('.promocode'),
      sizeSum = 0,
      optSum = 1,
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
    } else if (material.value == 0 || size.value == 0) {
      totalValue.innerHTML = 0;
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
    } else if (material.value == 0 || size.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  opt.addEventListener('change', function () {
    optSum = +this.options[this.selectedIndex].value;
    total = (materialSum + sizeSum) * optSum;

    if (material.value == 0 || size.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }

    if (promocode.value == "IWANTPOPART") {
      totalValue.innerHTML = totalValue.innerHTML * 0.7;
    } else if (material.value == 0 || size.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  promocode.addEventListener('change', function () {
    if (promocode.value == "IWANTPOPART") {
      totalValue.innerHTML = totalValue.innerHTML * 0.7;
    } else if (material.value == 0 || size.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
}

module.exports = calc;