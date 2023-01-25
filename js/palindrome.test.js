import { palindromeTest } from "./palindrome"

test('the input is a palindrome', () => {
    expect(palindromeTest("hola")).toBe("no es palindromo");
  });