import cards from './js/library';
import fillCardContainer from './js/cardCreator';
import {fillNavigation, hideNavigationMenu, menuButtonHandler } from './js/navigation';

const LINKS = ['Main Page'].concat(cards[0]);

let currentPage = 0;
let isGame = false;

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomCardsSequence = () => {
  const nums = new Set();
  while (nums.size < cards[currentPage].length - 1) {
    nums.add(getRandomInteger(0, cards[currentPage].length - 2));
  }
  const seq = Array.from(nums);
  console.log(seq);
};

const navigationMenuHandler = () => {
  document.querySelector('.navigation-menu').addEventListener('click', (e) => {
    if (e.target.classList.contains('navigation-menu__list__item')) {
      currentPage = LINKS.indexOf(e.target.innerText);
      fillCardContainer(cards[currentPage]);
      hideNavigationMenu();
    }
  });
};

const switcherHandler = () => {
  const switcher = document.querySelector('.switch__checkbox');
  switcher.addEventListener('change', () => {
    if (switcher.checked) {
      isGame = true;
    } else {
      isGame = false;
    }
    console.log(isGame);
  });
};

const imageClickHandler = () => {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('card__image')) {
      const audio = e.target.nextElementSibling;
      if (audio !== null && audio.tagName === 'AUDIO') {
        if (isGame) {

        } else {
          audio.play();
        }
      }
    }
  });
};

window.onload = () => {
  fillNavigation(LINKS);
  fillCardContainer(cards[currentPage]);
  menuButtonHandler();
  navigationMenuHandler();
  switcherHandler();
  imageClickHandler();
};
