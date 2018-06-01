import { initMiniLightbox, showMiniLgithbox, configureMiniLightbox } from "./mini-lightbox";

const addImageSource = (imagePath) => {
  const imgElem = document.querySelector('.js-lightboxImage');
  imgElem.setAttribute("src", imagePath);
}

const activateImageTag = () => {
  const elemList = document.querySelectorAll('.js-lbImage');
  elemList.forEach(function(elem) {
    elem.addEventListener("click", function(e) {
      addImageSource(e.target.getAttribute("data-fullpath"));

      showMiniLgithbox();
    });
  });
}

const getNextImagePath = (currentImagePath) => {
  const imageList = document.querySelectorAll('.js-lbImage');

  for (let i = 0; i < imageList.length; i++) {
    const thisPath = imageList[i].getAttribute('data-fullPath');

    if (thisPath === currentImagePath) {
      const nextIndex = i < (imageList.length - 1) ? (i + 1) : 0;
      const nextPath = imageList[nextIndex].getAttribute('data-fullPath');;

      return nextPath;
    }
  }
}

const getPrevImagePath = (currentImagePath) => {
  const imageList = document.querySelectorAll('.js-lbImage');

  for (let i = 0; i < imageList.length; i++) {
    const thisPath = imageList[i].getAttribute('data-fullPath');

    if (thisPath === currentImagePath) {
      const previousIndex = (i > 0) ? (i - 1) : (imageList.length - 1);
      const nextPath = imageList[previousIndex].getAttribute('data-fullPath');;

      return nextPath;
    }
  }
}

const activateNextButton = () => {
  const elem = document.querySelector('.js-lbImage__next');

  elem.addEventListener('click', function() {
    const imageElem = document.querySelector('.js-lightboxImage');

    const nextImagePath = getNextImagePath(imageElem.getAttribute('src'));
    console.log('nextImagePath', nextImagePath);

    imageElem.setAttribute('src', nextImagePath);
  })
}

const activatePrevButton = () => {
  const elem = document.querySelector('.js-lbImage__prev');

  elem.addEventListener('click', function() {
    const imageElem = document.querySelector('.js-lightboxImage');
    const nextImagePath = getPrevImagePath(imageElem.getAttribute('src'));
    console.log('nextImagePath', nextImagePath);

    imageElem.setAttribute('src', nextImagePath);
  })
}

const setupMiniLightbox = () => {
  const config = {
    'class': 'lightboxContainer',
    'content': `
        <div class="lightboxContent js-lightboxContent">
          <img class="js-lightboxImage">
          <a class="imageNavPanel imageNavPanel--left js-lbImage__prev" href="#">
            <i class="fa fa-chevron-circle-left fa-4x"></i>
          </a>
          <a class="imageNavPanel imageNavPanel--right js-lbImage__next" href="#">
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

export const prepareMiniLightBox = () => {
  initMiniLightbox();

  setupMiniLightbox();

  activateImageTag();

  activatePrevButton();

  activateNextButton();
}
