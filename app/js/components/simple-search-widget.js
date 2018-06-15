import { compose } from "../library/functional"
import { qs } from "../library/html-dom"

import { validateSearchInputs } from "./validation/validate-engine"

import { getUrl, createRequest, fetchJsonData } from "../services/data-service";

const createResultTable = () => {
  return `
    <table class="resultsTable">
      <caption class="resultsTable__caption">Search Results Display</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">First Name
          <th scope="col">Last Name</span>
          <th scope="col">Magic Id</span>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  `;
}

// Create searchContainer
const searchContainer = (content) => {
  return `<div class="searchContainer">
    ${ content }
    </div>
    <div class="resultsContainer">
      <div class="resulstWrapper">
        ${ createResultTable() }
      </div>
    </div>
  `;
}

const searchInputGroups = (content) => {
  return `<div class="searchInputGroups">
    ${ content }
    </div>
  `;
}

const searchInputList = (inputContent) => {
  return `
    ${inputContent}
    <div class="buttonGroup">
      <button class="inputButton js-searchButton">Search</button>
    </div>
    <div class="buttonGroup">
      <button class="inputButton">Clear</button>
    </div>
    <div class="messagePanel">
      <div class="errorMessage">
        <span>...</span>
      </div>
    </div>
  `;
}

const searchFormInputs = [
  {
    inputName: "firstName",
    labelText: "First Name",
    placeHolder: "Enter first name"
  },
  {
    inputName: "lasttName",
    labelText: "Last Name",
    placeHolder: "Enter last name"
  },
  {
    inputName: "magicName",
    labelText: "Magic Name",
    placeHolder: "Enter Magic name"
  },
];

const renderFormInputs = (inputs) => {
  return inputs.map(input => `
    <div class="inputGroup">
      <label for="${input.inputName}">${input.labelText}</label>
      <input class="inputControl js-searchInput" type="text" id="${input.inputName}" name="${input.inputName}" placeholder="${input.placeHolder}" />
    </div>
  `).join('');
}

const searchAction = () => {
  const messageList = validateSearchInputs();
  const messageText = messageList.map(msg => `<div> ${msg}</div>`).join('');

  const elem = qs('.messagePanel > .errorMessage');
  elem.innerHTML = messageText;

  fetchUsers();
}

export const simpleSearchContainerMarkup = () => {
  const builder = compose(searchContainer, searchInputGroups, searchInputList, renderFormInputs);
  return builder(searchFormInputs);
}

export const addSimpleSearchContainerEvent = () => {
  const searchBtn = qs(".js-searchButton");
  searchBtn.addEventListener("click", searchAction);
  return searchBtn;
}

function fetchUsers() {
  const url = getUrl();

  const data = {
    firstName: 'john',
    lastName: 'Smith',
    magicId: 211
  }

  const request = createRequest(url, data);
  fetchJsonData(request, paintResultsTable);
}

const paintResultsTable = (userData) => {
  const table = qs('.resulstWrapper > .resultsTable tbody')

  const dataSet = userData.map( d =>
      `<tr>
        <th scope="row">${d.id}
        <td>${ d.firstName }</div>
        <td>${ d.lastName }</div>
        <td>${ d.magicId }</div>
      </tr>`
    ).join('');

  table.innerHTML = dataSet;
}


