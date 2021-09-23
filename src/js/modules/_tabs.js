
const tabs = () => {

  let tabs = document.querySelectorAll("._tabs");
  for (let index = 0; index < tabs.length; index++) {
     let tab = tabs[index];
     let tabs_items = tab.querySelectorAll("._tabs-item");
     let tabs_blocks = tab.querySelectorAll("._tabs-block");
     for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];
        tabs_item.addEventListener("click", function (e) {
           for (let index = 0; index < tabs_items.length; index++) {
              let tabs_item = tabs_items[index];
              tabs_item.classList.remove('_active');
              tabs_blocks[index].classList.remove('_active');
           }
           tabs_item.classList.add('_active');
           tabs_blocks[index].classList.add('_active');
           e.preventDefault();
        });
     }
  }

}

export default tabs;


// ОПИСАНИЕ
/*
данный модуль реализует ТАБы на странице
 - для блока в котором находятся ТАБы нужно задать класс _tabs
 - для элементов навигации задать класс _tabs-item
 - для самих ТАБов задать класс _tabs-block
 активный элемент навигации и ТАБ получают класс _active
*/

// ПОДКЛЮЧЕНИЕ
/*
1. add to file main.js
import tabs from "./modules/_tabs";
tabs();
*/

// ПРИМЕР
/*
HTML

<div class="tabs-block _tabs">
  <nav class="tabs-block__nav">
    <div class="tabs-block__item _tabs-item _active">Таб №1</div>
    <div class="tabs-block__item _tabs-item">Таб №2</div>
    <div class="tabs-block__item _tabs-item">Таб №3</div>
  </nav>
  <div class="tabs-block__body">
    <div class="tabs-block__block _tabs-block _active">
      [Таб №1]
    </div>
    <div class="tabs-block__block _tabs-block">
      [Таб №2]
    </div>
    <div class="tabs-block__block _tabs-block">
      [Таб №3]
    </div>
  </div>
</div>
*/
