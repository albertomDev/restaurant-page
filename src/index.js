import './style.css';

import home from './home';
import contact from './contact';
import menu from './menu';

const main = document.querySelector('.main');
const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact-btn');

homeBtn.addEventListener('click', () => {
  while (main.firstChild) {
    main.firstChild.remove();
  }
  main.append(home());
});

menuBtn.addEventListener('click', () => {
  while (main.firstChild) {
    main.firstChild.remove();
  }
  main.append(contact());
});

contactBtn.addEventListener('click', () => {
  while (main.firstChild) {
    main.firstChild.remove();
  }
  main.append(menu());
});
