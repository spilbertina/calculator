let button = document.querySelector('.button');
let display = document.querySelector('.display');

button.addEventListener('click', () => {
    display.textContent = button.textContent;
});