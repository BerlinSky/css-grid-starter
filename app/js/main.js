import { isDocReady, qs }from "./library/html-dom"
import { simpleSearchContainerMarkup } from "./components/simple-search-widget"

import { lastNameMin, magicIdLength } from "./components/validation/validation-rules"

// Set up the input value: will be replaced Pick up the input value
const lastNameInput = {
  min: 1
}

const magicIdInput = {
  length: 6
}

const addEventListeners = () => {
  const searchBtn = qs(".js-searchButton");

  searchBtn.addEventListener("click", function() {
     // Validate
     const validateResult = lastNameMin({ targetInput: lastNameInput, messageList: [] });
     console.log(validateResult);

     const validateResult2 = magicIdLength({ targetInput: magicIdInput, messageList: validateResult.messageList });
     console.log(validateResult2);
  });

  return searchBtn;
}

const createSearchContainer = () => {

  const widgetContainer = qs('.widgetContainer');
  widgetContainer.innerHTML = simpleSearchContainerMarkup();

  addEventListeners()
}

isDocReady(createSearchContainer);
