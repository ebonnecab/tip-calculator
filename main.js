
const amount = document.getElementById('amount');
const percent = document.getElementById('percent');
const calculateButton = document.getElementById('calculate');
const total = document.getElementById('total');
const tip = document.getElementById('tip');

calculateButton.addEventListener('click', function(){
    const billAmount = amount.value;
    const tipPercent = percent.value;
    const percentage = (billAmount * tipPercent) / 100;
    const totalAmount = +percentage + +billAmount;
    total.innerHTML = totalAmount;
    tip.innerHTML = percentage;
    console.log(total, percentage);
});




