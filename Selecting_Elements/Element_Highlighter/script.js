const toggle = document.getElementById('toggle');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const body = document.querySelector('body');

const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const message = document.getElementById('message');


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
        toggle.classList.add('w3-button');
    } else {
        sun.style.display = 'none';
        moon.style.display = 'block';
    }
})