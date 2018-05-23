import { compose } from "../library/functional"

// Create searchContainer
const searchContainer = (content) => {
  return `<div class="searchContainer">
    ${ content }
    </div>
  `;
}

const searchInputGroups = (content) => {
  return `<div class="searchInputGroups">
    ${ content }
    </div>
  `;
}

const searchInputList = (content) => {
  return `
    <div class="inputGroup">
      <label for="firstName">First Name</label>
      <input class="inputControl" type="text" id="firstName" name="firstName" placeholder="first name" />
    </div>
    <div class="inputGroup">
      <label for="lastName">Last Name</label>
      <input class="inputControl" type="text" id="lastName" name="lastName" placeholder="last name" />
    </div>
    <div class="inputGroup">
      <label for="magicId">Magic Id</label>
      <input class="inputControl" type="text" id="magicId" name="magicId" placeholder="magic id" />
    </div>
    <div class="inputGroup">
      <label>&nbsp;</label>
      <button class="inputButton">Search</button>
      <button class="inputButton">Clear</button>
    </div>
    <div class="inputGroup">
      <label class="errorMessage">
        <span>Please enter the correct value ${content}</span>
      </label>
    </div>
  `;
}

export const simpleSearchContainerMarkup = () => {
  const builder = compose(searchContainer, searchInputGroups, searchInputList);
  return builder();
}
