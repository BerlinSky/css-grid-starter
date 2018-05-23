import { qs } from "../../library/html-dom"

// Set up the input value: will be replaced Pick up the input value
export const lastNameInput = () => {
  const elem = qs("input[name='lasttName'].js-searchInput ");
  return { min: elem.value.length }
}

export const magicIdInput = () => {
  const elem = qs("input[name='magicName'].js-searchInput ");
  return { length: elem.value.length };
}
