// Set up validation rules
export const lastNameMin = ({ targetInput }) => (messageList) => {
  if (targetInput.min < 2) {
    messageList = [
      ...messageList,
      "The last name must contain at least 2 characters!"
    ]
  }
  else {
    messageList = [
      ...messageList
    ]
  }
  return messageList
}

export const magicIdLength = ({ targetInput }) => (messageList) => {
  if (targetInput.length !== 5) {
    messageList = [
      ...messageList,
      "The magic ID must contain exact 5 characters!"
    ]
  }
  else {
    messageList = [
      ...messageList
    ]
  }
  return messageList
}
