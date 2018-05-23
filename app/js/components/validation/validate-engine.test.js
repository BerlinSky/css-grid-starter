import { lastNameMin, magicIdLength } from "./validation-rules"

test('last name contain less than 2 characters', () => {
  const lastNameInput = {
    min: 1
  }

  const messageList = lastNameMin({ targetInput: lastNameInput, messageList: [] });
  expect(messageList.length).toBeGreaterThan(0);
})

test('last name contain 2 characters', () => {
  const lastNameInput = {
    min: 2
  }

  const messageList = lastNameMin({ targetInput: lastNameInput, messageList: [] });
  expect(messageList.length).toBe(0);
})

test('last name contain more tahn 2 characters', () => {
  const lastNameInput = {
    min: 7
  }

  const messageList = lastNameMin({ targetInput: lastNameInput, messageList: [] });
  expect(messageList.length).toBe(0);
})


