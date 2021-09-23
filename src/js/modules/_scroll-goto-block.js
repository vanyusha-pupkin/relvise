
const scrollGotoBlock = (header) => {

    const gotoElements = document.querySelectorAll('[data-goto]');

    if (gotoElements.length > 0) {
        for (let gotoElement of gotoElements) {
            gotoElement.addEventListener('click', (evt) => {
                evt.preventDefault();
                const block = document.querySelector(`.${gotoElement.dataset.goto}`);
                if (block) {
                    const cordTopBlock = getCoords(block); //block.getBoundingClientRect();

                    const headerElement = document.querySelector(header);
                    let headerHeight = 0;
                    if (headerElement) {
                        headerHeight = headerElement.offsetHeight;
                    }
                    let scroll = cordTopBlock.top - headerHeight;
                    window.scrollTo({
                        top: scroll,
                        behavior: "smooth"
                    });
                }
            });
        }
    }
};

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

export default scrollGotoBlock;


// ОПИСАНИЕ
/*

*/

// ПОДКЛЮЧЕНИЕ
/*
1. add to file main.js
import scrollGotoBlock from "./modules/_scroll-goto-block";
scrollGotoBlock();
*/

// ПРИМЕР
/*
HTML



*/
