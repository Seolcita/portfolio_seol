/** @format */

// Nav Section -------------------------------------------------------
const navContainer = document.querySelector('.nav__container');
const navLinks = document.querySelectorAll('.nav__link');
const openBtn = document.querySelector('.btn--open');
const closeBtn = document.querySelector('.btn--close');

// Nav - background colors
const colors = [
  '#F05945',
  '#F58634',
  '#FFCC29',
  '#81B214',
  '#206A5D',
  '#126E82',
  '#693C72',
];

let i = 0;

navLinks.forEach(link => {
  link.style.backgroundColor = colors[i];
  i++;

  link.addEventListener('click', () => navContainer.classList.remove('change'));
});

// Open navigation
openBtn.addEventListener('click', () => {
  navContainer.classList.add('change');
  navLinks.forEach((link, idx) => {
    link.classList.add('change');
    link.style.transition = `transform 1s ${idx * 0.2}s`;
  });
});

// close navigation
closeBtn.addEventListener('click', () => {
  navContainer.classList.remove('change');
  navLinks.forEach((link, idx) => {
    link.classList.remove('change');
    link.style.transition = `transform 1s ${idx * 0.2}s`;
  });
});

// Testimonial Section ----------------------------------------------
const wrapper = document.querySelector('.testimonial__wrapper');
const indicators = [
  ...document.querySelectorAll('.testimonial__indicators button'),
];
const testimonialCard = [...document.querySelectorAll('.testimonial__card')];

let currentTestimonial = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    indicators[currentTestimonial].classList.remove('active');
    wrapper.style.marginLeft = `-${100 * i}%`;
    // testimonialCard[i].style.opacity = '1';

    indicator.classList.add('active');
    // testimonialCard[currentTestimonial].style.opacity = '0';
    currentTestimonial = i;
  });
});

// Contact Section ---------------------------------------------------
const labels = document.querySelectorAll('.input__label');

// Contact Form - Label Animation
labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join('');
});
