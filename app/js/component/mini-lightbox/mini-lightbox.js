const wrapperId = "miniLB__wrapper";
const baselayerId = 'miniLB__baselayer';
const fixtureId = "miniLB__fixture";
const popupId = "miniLB__popup";

// A generic function to select an element
export const qs = (elemSelector) => {
  return document.querySelector(elemSelector);
}

export const qsAll = (elemSelector) => {
  return document.querySelectorAll(elemSelector);
}

const createBaseLayer= () => {
  const elem = document.createElement('div');
  elem.id = baselayerId;
  elem.setAttribute('style', 'position:fixed;top:0;bottom:0;left:0;right:0;opacity:0.3;width:100%;height:100%;background-color:black;display:none;');

  return elem;
}

const createOverlayWrapper = () => {
  const elem = document.createElement('div');
  elem.id = wrapperId;
  elem.setAttribute('style', 'position:absolute;top:0;bottom:0;left:0;right:0;display:none;');
  document.body.appendChild(elem);

  return elem;
}

const createFixture = () => {
  const elem = document.createElement('div');
  elem.id = fixtureId;
  elem.setAttribute('style', `
      position:fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      width:90%;
      height:90%;
      opacity:1;display:none;
    `
  );
  document.body.appendChild(elem);

  return elem;
}

const createPopup = () => {
  const elem = document.createElement('div');
  elem.id = popupId;
  return elem;
}
const createMinLightbox = () => {
  const wrapper = createOverlayWrapper();

  const clodeButton = createCloseButton();
  clodeButton.addEventListener("click", function() {
    hideMiniLgithbox();
  })
  wrapper.appendChild(clodeButton);


  const baseLayer = createBaseLayer();
  wrapper.appendChild(baseLayer);

  const fixture = createFixture();
  const popup = createPopup();
  fixture.appendChild(popup)
}

const escapeMe = () => {
  qs("#" + wrapperId).addEventListener('click', hideMiniLgithbox);

  window.addEventListener("keydown", function(e) {
    if (e.keyCode == 27) {
      hideMiniLgithbox();
    }
  })
}

const createCloseButton = () => {
  const elem = document.createElement('button');
  const style = `
    position: fixed;
    width: 40px;
    height: 40px;
    transition: all .2s ease-in-out;
    opacity: .8;
    top: 0;
    left: 0;
  `;
  elem.setAttribute('style', style);

  const innerElem = document.createElement('div');
  const innerStyle = `
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  `;
  innerElem.setAttribute('style', innerStyle);
  innerElem.innerHTML = createCloseIcon();;

  elem.appendChild(innerElem);

  return elem;
}

const createCloseIcon = () => {
  const style = "width:24px;height:24px;fill:#333333;";

  return `
    <svg style=${style} version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false">
      <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z"></path>
    </svg>
  `;
}

export const initMiniLightbox = () => {
  createMinLightbox();
  escapeMe();
}

export const showMiniLgithbox = () => {
  qs("#" + wrapperId).style.display = 'block';
  qs("#" + baselayerId).style.display = 'block';
  qs("#" + fixtureId).style.display = 'block';
}

export const hideMiniLgithbox = () => {
  qs("#" + wrapperId).style.display = 'none';
  qs("#" + baselayerId).style.display = 'none';
  qs("#" + fixtureId).style.display = 'none';
}

export const configureMiniLightbox = (config) => {
  const elem = document.querySelector("#" + popupId);
  elem.setAttribute('class', config.class);
  elem.innerHTML = config.content;
  return elem;
}
