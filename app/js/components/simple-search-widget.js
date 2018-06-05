import { compose } from "../library/functional"
import { qs } from "../library/html-dom"

import { validateSearchInputs } from "./validation/validate-engine"

import { getUrl, createRequest, fetchJsonData } from "../services/data-service";

const createResultTable =() => {
  return `
    <table class="resultsTable">
      <caption class="resultsTable__caption">Jaeger Technical Specifications</caption>
      <thead>
        <tr>
          <th></th>
          <th scope=col>Country
          <th scope=col>Height<span> (meters)</span>
          <th scope=col>Weight<span> (tonnes)</span>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope=row>Gipsy Danger
          <td>United States
          <td>79
          <td>1980
        </tr>
        <tr>
          <th scope=row>Striker Eureka
          <td>Australia
          <td>76
          <td>1850
        </tr>
        <tr>
          <th scope=row>Crimson Typhoon
          <td>China
          <td>76
          <td>1722
        </tr>
        <tr>
          <th scope=row>Coyote Tango
          <td>Japan
          <td>86
          <td>2312
        </tr>
        <tr>
          <th scope=row>Cherno Alpha
          <td>Russia
          <td>85
          <td>2412
        </tr>
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
  // const data = '';

  const request = createRequest(url, data);
  fetchJsonData(request, test);
}

const test = (userData) => {
  userData.map( d => {
    console.log(d.firstName);
    console.log(d.lastName);
    console.log(d.magicId);
  })
}


