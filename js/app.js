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
  typeSpeed: 70,
  backSpeed: 40,
  backDelay: 900,
  cursorChar: '_',
  loop: true,
});
// Akhir Typed JS

// AOS JS
AOS.init({
  duration: 700,
});
