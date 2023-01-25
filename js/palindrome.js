export function palindromeTest(string) {
    const newStr = string.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");
  
    return newStr === strReversed ? "es palindromo" : "no es palindromo";
  }
