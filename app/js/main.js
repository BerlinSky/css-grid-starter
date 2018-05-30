import { initMiniLightbox, showMiniLgithbox } from "./component/mini-lightbox"


const activateButton = () => {
  const btn = document.querySelector('.js-inputButton');
  btn.addEventListener('click', showMiniLgithbox);

  // const btn2 = document.querySelector('.js-inputButton2');
  // btn2.addEventListener('click', hideMiniLgithbox);
}

$(function () {
  initMiniLightbox();
  activateButton();
});
