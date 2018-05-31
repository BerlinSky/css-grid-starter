import { initMiniLightbox, showMiniLgithbox, configureMiniLightbox } from "./component/mini-lightbox"

const setupMiniLightbox = () => {
  const config = {
    'class': 'lightboxContainer',
    'content': `
        <div class="lightboxContent">
          <img src="https://images.unsplash.com/photo-1514540344452-642d604143a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73b8449846b0c8f33bb3ba221b459ea0&auto=format&fit=crop&w=634&q=80"></img>
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
  setupMiniLightbox();
  activateButton();
});
