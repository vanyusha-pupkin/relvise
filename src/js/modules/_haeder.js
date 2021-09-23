/*
РЕАЛИЗОВАТЬ:
 - при прокрутке первого блока делать header - fixed
 - при прокрутке определенное количество px делать header - fixed
 - при начале прокрутке делать header - fixed
 - при прокрутке вниз делаем header - fixed, при прокрутке на вверх делаем header - absoluted
*/


const hamburger = document.querySelector('.page-header__burger');
const mainNav = document.querySelector('.main-nav');
const pageHeader = document.querySelector('.page-header');
const pageBody = document.querySelector('.page__body');

// действия при нажатии на hamburger
const actionHamburger = () => {
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');

      if (mainNav) {
        mainNav.classList.toggle('main-nav--open');
      }

      if (pageHeader) {
        pageHeader.classList.toggle('page-header--active');
      }

      if (pageBody) {
        pageBody.classList.toggle('page__body--lock');
      }
    });
  }
};

// действия при нажатии на ссылки у лендинга,
// когда не нужно переходить на другие страницы
// а ссылки ведут на другие блоки
//  - добавление нажатой ссылке класса main-nav__link--active
//  - удаление класса main-nav__link--active у других ссылок
//  - удаление класса main-nav--open у блока main-nav
//  - удаление класса active у hamburger
export const addActiveLink = () => {

  if (mainNav) {
    const links = mainNav.querySelectorAll('a');

    if (links.length > 0) {
      for (let link of links) {
        link.addEventListener('click', (evt) => {
          evt.preventDefault();

          if (mainNav.classList.contains('main-nav--open')) {
            mainNav.classList.remove('main-nav--open');
          }

          if (hamburger) {
            if (hamburger.classList.contains('active')) {
              hamburger.classList.remove('active');
            }
          }

          const linksInner = document.querySelectorAll('a');
          for (let linkInner of linksInner) {
            linkInner.classList.remove('main-nav__link--active');
          }
          link.classList.add('main-nav__link--active');
        });
      }
    }
  }
}

export default actionHamburger;


// ОПИСАНИЕ
/*

*/

// ПОДКЛЮЧЕНИЕ
/*
1. add to file main.js
import actionHamburger from "./modules/_haeder";
actionHamburger();
*/

// ПРИМЕР
/*
HTML



*/
