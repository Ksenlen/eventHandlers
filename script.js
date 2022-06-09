const btn = document.querySelector('#btn');
const input = document.querySelector('#text');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');
const e_btn = document.querySelector('#e_btn');
const range = document.querySelector('#range');
const span = document.querySelector('#range-span');

const changeColor = function () {
    square.style.backgroundColor = input.value;
    input.value = '';
};

const changeCircle = function (event) {
    span.textContent = event.target.value;
    circle.style.height = event.target.value + '%';
    circle.style.width = event.target.value + '%';
};


btn.addEventListener('click', changeColor);


e_btn.style.display = 'none';


range.addEventListener('input', changeCircle);
range.addEventListener('change', changeCircle);
