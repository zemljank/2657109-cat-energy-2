
document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.main-nav');
  const toggle = document.querySelector('.main-header__toggle');
  const menuLinks = document.querySelectorAll('.main-nav__link');

  if (!nav || !toggle) {
    return;
  }

  nav.classList.remove('main-nav--nojs');
  toggle.classList.remove('main-header__toggle--nojs');

  toggle.addEventListener('click', () => {
    const isClosed = nav.classList.contains('main-nav--closed');

    if (isClosed) {
      nav.classList.remove('main-nav--closed');
      nav.classList.add('main-nav--opened');
      toggle.classList.remove('main-header__toggle--closed');
      toggle.classList.add('main-header__toggle--opened');
    } else {
      nav.classList.add('main-nav--closed');
      nav.classList.remove('main-nav--opened');
      toggle.classList.add('main-header__toggle--closed');
      toggle.classList.remove('main-header__toggle--opened');
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.add('main-nav--closed');
      nav.classList.remove('main-nav--opened');
      toggle.classList.add('main-header__toggle--closed');
      toggle.classList.remove('main-header__toggle--opened');
    });
  });
});

const slider = document.querySelector('.example__slider');
const range = document.querySelector('.example__range');
const before = document.querySelector('.example__image--before');
const after = document.querySelector('.example__image--after');

if (slider && range && before && after) {
  let isDragging = false;

  const updateSlider = (percent) => {
    percent = Math.max(0, Math.min(100, percent));
    range.style.setProperty('--x', `${percent}%`);
    before.style.setProperty('--clip-before', `0 ${100 - percent}% 0 0`);
    after.style.setProperty('--clip-after', `0 0 0 ${percent}%`);
  };

  range.addEventListener('pointerdown', (e) => {
    isDragging = true;
    e.preventDefault();
  });

  document.addEventListener('pointerup', () => {
    isDragging = false;
  });

  document.addEventListener('pointermove', (e) => {
    if (!isDragging) {
      return;
    }
    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    updateSlider(percent);
  });

  updateSlider(50);
}
