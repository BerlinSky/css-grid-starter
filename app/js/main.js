import { initMiniLightbox, showMiniLgithbox, configureMiniLightbox } from "./component/mini-lightbox"

const setupMiniLightbox = (imagePath) => {
  const config = {
    'class': 'lightboxContainer',
    'content': `
        <div class="lightboxContent">
          <img src=${imagePath}>
          <a class="imageNavPanel imageNavPanel--left" href="/media/photo/364/11">
            <i class="fa fa-chevron-circle-left fa-4x"></i>
          </a>
          <a class="imageNavPanel imageNavPanel--right" href="/media/photo/367/11">
            <i class="fa fa-chevron-circle-right fa-4x"></i>
          </a>
          <div class="imageTitle">
            <span>Description of paradise.</span>
          </div>
        </div>
      `
  }
  configureMiniLightbox(config);
}

const activateButton = () => {
  const btn = document.querySelector('.js-inputButton');
  btn.addEventListener('click', showMiniLgithbox);

  // const btn2 = document.querySelector('.js-inputButton2');
  // btn2.addEventListener('click', hideMiniLgithbox);
}

$(function () {
  initMiniLightbox();

  const imagePath = "http://cdn.tmasdigital.com/non_secure/images/temp_mastersite/galleries/132_t.jpg";

  setupMiniLightbox(imagePath);
  activateButton();
});
