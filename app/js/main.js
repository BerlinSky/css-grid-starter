import { isDocReady, qs }from "./library/html-dom"
import { simpleSearchContainerMarkup } from "./components/simple-search-widget"

// Set up validation rules
const lastNameMin = ({ targetInput, messageList = [] }) => {
  if (targetInput.min < 2) {
    messageList = [
      ...messageList,
      "The last name must contain at least 2 characters!"
    ]
  }
  return {
    targetInput,
    messageList
  };
}

const magicIdLength = ({ targetInput, messageList = [] }) => {
  if (targetInput.length !== 5) {
    messageList = [
      ...messageList,
      "The magic ID must contain exact 5 characters!"
    ]
  }
  return {
    targetInput,
    messageList
  };
}

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
    console.log("here", searchBtn);
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
