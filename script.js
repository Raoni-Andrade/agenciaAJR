const header = document.querySelector('header');
const navMenu = document.querySelector('nav ul');


function toggleMenu() {
  header.classList.toggle('menu-open');
  navMenu.classList.toggle('menu-visible');
}

window.addEventListener('scroll', () => {
  const backToTopButton = document.getElementById('back-to-top');
  if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
});

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
  testimonials[currentTestimonial].classList.remove('active');

  currentTestimonial = (currentTestimonial + 1) % testimonials.length;

  testimonials[currentTestimonial].classList.add('active');
}

testimonials[currentTestimonial].classList.add('active');

setInterval(showNextTestimonial, 5000);

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}