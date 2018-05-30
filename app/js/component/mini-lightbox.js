const wrapperId = "miniLB__wrapper";
const baselayerId = 'miniLB__baselayer';

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

const createMinLightbox = () => {
  const wrapper = createOverlayWrapper();
  const baseLayer = createBaseLayer();
  wrapper.appendChild(baseLayer);
  // createfixture()
}

const escapeMe = () => {
  document.querySelector("#" + wrapperId).addEventListener('click', hideMiniLgithbox);

  window.addEventListener("keydown", function(e) {
    if (e.keyCode == 27) {
      hideMiniLgithbox();
    }
  })
}

export const initMiniLightbox = () => {
  createMinLightbox();
  escapeMe();
}

export const showMiniLgithbox = () => {
  document.querySelector("#" + wrapperId).style.display = 'block';
  document.querySelector("#" + baselayerId).style.display = 'block';
}

export const hideMiniLgithbox = () => {
  document.querySelector("#" + wrapperId).style.display = 'none';
  document.querySelector("#" + baselayerId).style.display = 'none';
}
