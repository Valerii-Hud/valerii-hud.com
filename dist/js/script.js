'use strict';

import * as documentElement from './document.js';

document.addEventListener('DOMContentLoaded', () => {
  function createElement(elem) {
    const fragment = document.createRange().createContextualFragment(elem);
    document.body.append(fragment);
  }

  function main() {
    const documentElementsOrdered = [
      documentElement.documentAsideBar,
      documentElement.documentMenu,
      documentElement.documentPromoSection,
      documentElement.documentAboutSection,
      documentElement.documentResumeSection,
      documentElement.documentSkillsSection,
      documentElement.documentPortfolioSection,
      documentElement.documentPriceSection,
      documentElement.documentContactsSection,
    ];

    for (const elem of documentElementsOrdered) {
      createElement(elem());
    }
    burgerMenu();
    skillsPercent();
    changeSocialsThemeOnScroll();
  }

  function burgerMenu() {
    const menuBlock = document.querySelector('.menu'),
      hamburgerMenu = document.querySelector('.hamburger'),
      closeMenu = menuBlock.querySelector('.menu__close');

    hamburgerMenu.addEventListener('click', () => {
      menuBlock.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
      menuBlock.classList.remove('active');
    });
  }

  function skillsPercent() {
    const percents = document.querySelectorAll('.skills__proc'),
      lines = document.querySelectorAll('.skills__stat-active');

    percents.forEach((item, index) => {
      lines[index].style.width = item.innerHTML;
    });
  }

  function changeSocialsThemeOnScroll() {
    window.addEventListener('scroll', () => {
      const sidepanel = document.querySelector('.sidepanel'),
        pixesToScroll = 400;
      if (!sidepanel) return;

      if (window.scrollY >= window.innerHeight - pixesToScroll) {
        sidepanel.classList.remove('sidepanel--white');
        sidepanel.classList.add('sidepanel--black');
      } else {
        sidepanel.classList.remove('sidepanel--black');
        sidepanel.classList.add('sidepanel--white');
      }
    });
  }

  main();
});
