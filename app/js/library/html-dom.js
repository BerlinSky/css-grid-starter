// A function to replace jquery documentReady
export const isDocReady = (fn) => {
  return document.addEventListener("DOMContentLoaded", fn());
}

// A generic function to select an element
export const qs = (elemSelector) => {
  return document.querySelector(elemSelector);
}
