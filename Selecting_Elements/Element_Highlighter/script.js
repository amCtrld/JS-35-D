const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

red.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});
yellow.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow';
});
green.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
});