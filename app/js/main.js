import { initMiniLightbox, showMiniLgithbox, configureMiniLightbox } from "./component/mini-lightbox"

const setupMiniLightbox = () => {
  const config = {
    'class': 'lightboxContainer',
    'content': `
        <div class="lightboxContent js-lightboxContent">
          <img class="js-lightboxImage">
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

const addImageSource = (imagePath) => {
  const imgElem = document.querySelector('.js-lightboxImage');
  imgElem.src = imagePath;

  return imgElem;
}

const activateImageTag = () => {
  const elemList = document.querySelectorAll('.js-lbImage');

  elemList.forEach(function(elem) {
    elem.addEventListener("click", function(e) {
      addImageSource(e.target.src);
      showMiniLgithbox();
    });
  });
}

$(function () {
  initMiniLightbox();

  setupMiniLightbox();

  activateImageTag();
});
