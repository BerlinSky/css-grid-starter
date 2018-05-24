import { compose } from "../../library/functional";

import { lastNameMin, magicIdLength } from "./validation-rules"
import { lastNameInput, magicIdInput } from "./validator"

export const validateSearchInputs = () => {
  const validateLastNameMin = lastNameMin({ targetInput: lastNameInput() });
  const validateMagicIdLength = magicIdLength({ targetInput: magicIdInput() });

  const validateAll = compose(validateMagicIdLength, validateLastNameMin);
  const messageList = validateAll({ messageList: [] });

  return messageList;
}
