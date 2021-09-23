import mixitup from 'mixitup';

if (document.querySelector('.f-filter__list')) {
  const mixer = mixitup('.f-filter__list');
}



// ОПИСАНИЕ
/*
https://www.kunkalabs.com/mixitup/

Фильтрация элементов

Класс блока в котором находятся карточки для фильтрации нужно указать в файле
js/modules/_filters.js
const mixer = mixitup('.filter__list');

Для кнопок, при нажатии на которые будет производится фильтрация
нужно добавить дата атрибут data-filter
в значении которого указать класс указанные в карточках которые будут фильтроваться
data-filter=".photo"

Для карточек которые будут фильтроваться нужно указать класс или классы по которым будет производится фильтрация
class="filter__item mix photo paint"
*/

// ПОДКЛЮЧЕНИЕ
/*
1. install mixitup
npm install --save-dev mixitup
2. add to file main.js
import "./modules/_filters";
*/

// ПРИМЕР
/*
HTML
      <section class="filter">
        <div class="filter__nav  nav-filter">
          <ul class="nav-filter__list">
            <li class="nav-filter__item">
              <button class="nav-filter__button  mixitup-control-active" type="button" data-filter="*">All</button>
            </li>
            <li class="nav-filter__item">
              <button class="nav-filter__button" type="button" data-filter=".photo">photography</button>
            </li>
            <li class="nav-filter__item">
              <button class="nav-filter__button" type="button" data-filter=".ui">ui/ux</button>
            </li>
            <li class="nav-filter__item">
              <button class="nav-filter__button" type="button" data-filter=".paint">painting</button>
            </li>
          </ul>
        </div>

        <ul class="filter__list">
          <li class="filter__item mix photo paint">
            <div class="filter__image">
              <img src="img/01.JPG" alt="">
            </div>
          </li>
          <li class="filter__item mix ui">
            <div class="filter__image">
              <img src="img/02.jpg" alt="">
            </div>
          </li>
          <li class="filter__item mix ui">
            <div class="filter__image">
              <img src="img/03.jpg" alt="">
            </div>
          </li>
          <li class="filter__item mix paint">
            <div class="filter__image">
              <img src="img/04.jpg" alt="">
            </div>
          </li>
          <li class="filter__item mix paint">
            <div class="filter__image">
              <img src="img/05.jpg" alt="">
            </div>
          </li>
          <li class="filter__item mix photo ui">
            <div class="filter__image">
              <img src="img/06.jpg" alt="">
            </div>
          </li>
        </ul>
      </section>

SCSS

*/
