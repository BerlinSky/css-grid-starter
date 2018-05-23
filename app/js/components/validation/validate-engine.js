import { lastNameMin, magicIdLength } from "./validation-rules"
import { lastNameInput, magicIdInput } from "./validator"

export const validateSearchInputs = () => {
  const messageList = lastNameMin({ targetInput: lastNameInput(), messageList: [] });
  console.log(messageList);

  const messageList2 = magicIdLength({ targetInput: magicIdInput(), messageList: messageList });
  console.log(messageList2);

  return messageList2;
}
