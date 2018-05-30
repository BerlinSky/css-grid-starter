// eslint-disable-line no-unused-vars
const baseLayer= () => {
  // overlay
  const elem = document.createElement('div');
  elem.id = "miniLB__overlay";
  elem.setAttribute('style', 'position:fixed;top:0;bottom:0;left:0;right:0;opacity:0.3;width:100%;height:100%;background-color:black;');

  return elem;
}

const overlayWrapper = () => {
  const elemId = "miniLB__overlayWrapper";
  const elem = document.querySelector(elemId);

  if (elem) {
    console.log('elem', elem);
    return elem;
  }
  else {
    const newElem = document.createElement('div');
    newElem.id = "miniLB__overlayWrapper";
    newElem.setAttribute('style', 'position:absolute;top:10px;bottom:10px;left:10px;right:10px;background-color:tomato;');
    document.body.appendChild(newElem);

    console.log('newElem', newElem);
    return newElem;
  }
}

const test = () => {
  const wrapper = overlayWrapper();
  const overlay = baseLayer();
  wrapper.appendChild(overlay);
  return wrapper;
}



const activateButton = () => {
  const btn = document.querySelector('.js-inputButton');
  btn.addEventListener('click', test);
}

$(function () {
  activateButton()
});
