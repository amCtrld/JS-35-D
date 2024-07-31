const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const message = document.getElementById('message');

red.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
    message.innerHTML = 'Red selected';
});
yellow.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow';
    message.innerHTML = 'Yellow selected';
});
green.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
    message.innerHTML = 'Green selected';
});