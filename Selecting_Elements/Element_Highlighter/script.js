const toggle = document.getElementById('toggle');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const body = document.querySelector('body');

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