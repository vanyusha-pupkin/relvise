  let gallery = document.querySelectorAll('._gallery');

  if (gallery) {
     gallery_init();
  }

  function gallery_init() {
     for (let index = 0; index < gallery.length; index++) {
        const el = gallery[index];
        lightGallery(el, {
           counter: false,
           selector: 'a',
           download: false
        });
     }
  }




// ОПИСАНИЕ
/*
показает изображения в модальном окне
 - блоку к котором находятся изображения нужно добавить класс _gallery
 - каждую картинку нужно завернуть в тег <a> и в атрибуте href указать путь к большой картинки

в папке src\img\icons\lightgallery должны быть иконки
close.svg
loading.gif
p-left.svg
p-right.svg
*/

// ПОДКЛЮЧЕНИЕ
/*
1. add to file  src/scss/global/_libs.scss
@import  "../vendor/_lightgallery.scss";
2. add to file main.js
import  "./vendor/_lightgallery.min";
import  "./modules/_gallery";
*/

// ПРИМЕР

/*
HTML

<div class="gallery-block _gallery">
  <a href="img/01.jpg" class="gallery-block__item">
    <img src="img/01.jpg" alt="">
  </a>
  <a href="img/02.jpg" class="gallery-block__item">
    <img src="img/02.jpg" alt="">
  </a>
  <a href="img/03.jpg" class="gallery-block__item">
    <img src="img/03.jpg" alt="">
  </a>
  <a href="img/04.jpg" class="gallery-block__item">
    <img src="img/04.jpg" alt="">
  </a>
  <a href="img/05.jpg" class="gallery-block__item">
    <img src="img/05.jpg" alt="">
  </a>
</div>
*/
