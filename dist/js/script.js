'use strict';
import {
  documentAsideBar,
  documentMenu,
  documentPromoSection,
  documentAboutSection,
  documentResumeSection,
  documentSkillsSection,
  documentPortfolioSection,
  documentPriceSection,
  documentContactsSection,
} from './document.js';

document.addEventListener('DOMContentLoaded', () => {
  createElement(documentAsideBar());
  createElement(documentMenu());
  createElement(documentPromoSection());
  createElement(documentAboutSection());
  createElement(documentResumeSection());
  createElement(documentSkillsSection());
  createElement(documentPortfolioSection());
  createElement(documentPriceSection());
  createElement(documentContactsSection());

  // Burger menu
  const hamburgerMenu = document.querySelector('.hamburger');
  const closeMenu = document.querySelector('.menu__close');
  const menuBlock = document.querySelector('.menu');

  hamburgerMenu.addEventListener('click', () => {
    menuBlock.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
    menuBlock.classList.remove('active');
  });

  // Sidepanel theme changer
  window.addEventListener('scroll', () => {
    const sidepanel = document.querySelector('.sidepanel');
    if (!sidepanel) return;

    if (window.scrollY >= window.innerHeight) {
      sidepanel.classList.remove('sidepanel--white');
      sidepanel.classList.add('sidepanel--black');
    } else {
      sidepanel.classList.remove('sidepanel--black');
      sidepanel.classList.add('sidepanel--white');
    }
  });

  // Skills percent
  const percents = document.querySelectorAll('.skills__proc');
  const lines = document.querySelectorAll('.skills__stat-active');

  percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
  });

  // DOM elements generator
  function createElement(elem) {
    const fragment = document.createRange().createContextualFragment(elem);
    fragment.innerHTML = elem;
    document.body.append(fragment);
  }
});
