let button = document.querySelector('.button');
let display = document.querySelector('.display');
let buttonAll = document.querySelectorAll('.button');

// button.addEventListener('click', () => {
//     display.textContent = button.textContent;
// });

buttonAll.forEach((zuu) => {
    zuu.addEventListener('click', foo);
});

function foo(event) {
    // console.log(event.target.textContent);
    return display.textContent = event.target.textContent;
};

