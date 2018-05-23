import { isDocReady, qs }from "./library/html-dom"
import { simpleSearchContainerMarkup } from "./components/simple-search-widget"

// import { lastNameMin, magicIdLength } from "./components/validation/validation-rules"
// import { lastNameInput, magicIdInput } from "./components/validation/validator"

import { validateSearchInputs } from "./components/validation/validate-engine"

const addEventListeners = () => {
  const searchBtn = qs(".js-searchButton");
  searchBtn.addEventListener("click", validateSearchInputs);
  return searchBtn;
}

const createSearchContainer = () => {

  const widgetContainer = qs('.widgetContainer');
  widgetContainer.innerHTML = simpleSearchContainerMarkup();

  addEventListeners()
}

isDocReady(createSearchContainer);
