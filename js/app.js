const hamburger = document.querySelector('.hamburger');
const line = document.querySelectorAll('.line');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const linksA = document.querySelectorAll('.nav-links li a');
const backLinks = document.querySelector('.back-links');
const sections = document.querySelectorAll('section');

// Humberger nav
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-links-open');
  line.forEach((line) => {
    line.classList.toggle('line-open');
  });
});

linksA.forEach((link) => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('nav-links-open')) {
      navLinks.classList.remove('nav-links-open');
      line.forEach((line) => {
        line.classList.toggle('line-open');
      });
    }
  });

  link.addEventListener('mouseover', () => {
    current = link.getAttribute('data-value');
    backLinks.innerHTML = current;
  });

  link.addEventListener('mouseout', () => {
    // Keajaiban
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
        backLinks.innerHTML = current;
      }
    });
  });
});

// Akhir Humberger nav

// Active Section
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
      backLinks.innerHTML = current;
    }
  });
});
// Akhir Active Section

// Typed JS
var typed = new Typed('.typed', {
  strings: ['Junior Programmer', 'Student', 'Normal Human'],
  typeSpeed: 100,
  backSpeed: 40,
  backDelay: 900,
  cursorChar: '_',
  loop: true,
});
// Akhir Typed JS

// AOS JS
AOS.init({
  duration: 900,
  offset: 200,
  // once: true,
  // delay: 1000,
});

// Contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyA0Nt5_SUmAl7wa78ovScuO4xgQi3VGFvwB4HQk-oPOwwInBiFa3OPjQBxRKROFqvZvg/exec';
const form = document.forms['alif-contact-form'];
const loading = document.querySelector('.spinner-grow');
const sukses = document.querySelector('.sukses');
const gagal = document.querySelector('.gagal');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  loading.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      loading.classList.toggle('d-none');
      sukses.classList.toggle('d-none');
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => {
      gagal.classList.toggle('d-none');
      form.reset();
      console.error('Error!', error.message);
    });
});
// Akhir Contact Form
