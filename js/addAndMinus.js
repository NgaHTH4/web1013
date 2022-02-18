const addBtn = document.querySelectorAll(".item-add");
const minusBtn = document.querySelectorAll(".item-minus");
const total = document.querySelectorAll(".item-total");
for (let i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener("click", function (event) {
    event.preventDefault();
    const input = addBtn[i].nextElementSibling;
    let value = parseInt(input.value);
    input.value = value + 1;

    let price = parseFloat(total[i + 1].firstElementChild.innerText.slice(1)) / value;

    let finalPay = Math.round(price * parseInt(input.value) * 100) / 100;
    total[i + 1].firstElementChild.innerText = `$${finalPay}`;

    
   
    
  });
}
for (let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].addEventListener("click", function (event) {
    event.preventDefault();
    const input = minusBtn[i].previousElementSibling;
    let value = parseInt(input.value);
    if (value != 1) {
        input.value = value - 1;

        let price = parseFloat(total[i + 1].firstElementChild.innerText.slice(1)) / (value);
        let finalPay = Math.round((parseFloat(total[i + 1].firstElementChild.innerText.slice(1)) - price) * 100) / 100;
        total[i + 1].firstElementChild.innerText = `$${finalPay}`;
    }
    

  });
}
