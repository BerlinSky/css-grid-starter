import { lastNameMin, magicIdLength } from "./validation-rules"

test('last name contain less than 2 characters', () => {
  const lastNameInput = {
    min: 1
  }

  const validateResult = lastNameMin({ targetInput: lastNameInput, messageList: [] });
  expect(validateResult.messageList.length).toBeGreaterThan(0);
})

test('last name contain 2 characters', () => {
  const lastNameInput = {
    min: 2
  }

  const validateResult = lastNameMin({ targetInput: lastNameInput, messageList: [] });
  expect(validateResult.messageList.length).toBe(0);
})

test('last name contain more tahn 2 characters', () => {
  const lastNameInput = {
    min: 7
  }

  const validateResult = lastNameMin({ targetInput: lastNameInput, messageList: [] });
  expect(validateResult.messageList.length).toBe(0);
})


