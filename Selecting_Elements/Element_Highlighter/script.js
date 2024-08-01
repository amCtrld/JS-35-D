const toggle = document.getElementById('toggle');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const body = document.querySelector('body');

const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const message = document.getElementById('message');
const hover = document.getElementById('hover');

function changeColor(color) {
    message.style.backgroundColor = color;
    message.innerHTML = `The background color is now ${color}`;
}

red.addEventListener('click', () => {
    changeColor('red');
});
yellow.addEventListener('click', () => {
    changeColor('yellow');
});
green.addEventListener('click', () => {
    changeColor('green');
});

toggle.addEventListener('click', () => {
    body.classList.toggle('w3-black');
    if (body.classList.contains('w3-black')) {
        sun.style.display = 'block';
        moon.style.display = 'none';
    } else {
        sun.style.display = 'none';
        moon.style.display = 'block';
    }
});