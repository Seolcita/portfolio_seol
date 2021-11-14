/** @format */

// Nav Section
const navContainer = document.querySelector('.nav__container');
const navLinks = document.querySelectorAll('.nav__link');
const openBtn = document.querySelector('.btn--open');
const closeBtn = document.querySelector('.btn--close');

// Contact Section
const labels = document.querySelectorAll('.input__label');

// ******** Navigation section ********
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

navLinks.forEach((link) => {
  link.style.backgroundColor = colors[i];
  i++;

  link.addEventListener('click', () => navContainer.classList.remove('change'));
});

//Nav - Close nav
// navLinks.forEach((link) => {

// })

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

// ******** Contact section ********
// Contact Form - Label Animation
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join('');
});
