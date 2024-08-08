const slides = document.querySelectorAll('.mySlides');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentSlide = 0;

// Function to show the current slide
function showSlide(n) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[n].style.display = 'block';
}

// Function to go to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Function to go to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
