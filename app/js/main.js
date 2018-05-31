import { initMiniLightbox, showMiniLgithbox, configureMiniLightbox } from "./component/mini-lightbox"

const setupMiniLightbox = () => {
  const config = {
    'class': 'lightboxContainer',
    'content': `
        <div>
          <img src="https://images.unsplash.com/photo-1514540344452-642d604143a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73b8449846b0c8f33bb3ba221b459ea0&auto=format&fit=crop&w=634&q=80"></img>
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
