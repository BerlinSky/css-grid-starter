import { lastNameMin, magicIdLength } from "./validation-rules"
import { lastNameInput, magicIdInput } from "./validator"

export const validateSearchInputs = () => {
  const validateResult = lastNameMin({ targetInput: lastNameInput(), messageList: [] });
  console.log(validateResult);

  const validateResult2 = magicIdLength({ targetInput: magicIdInput(), messageList: validateResult.messageList });
  console.log(validateResult2);

  return validateResult2;
}
