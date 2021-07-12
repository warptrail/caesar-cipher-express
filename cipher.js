function caesarCipher(text, numShift, encrypt) {
  const base = 'A'.charCodeAt(0);
  const cipher = text
    .toUpperCase() // convert string to all uppercase for convenience
    .split('') // create an array out of the string
    .map((char) => {
      const code = char.charCodeAt(0); // get the character code for each letter

      // if it is not one of the 26 letters then ignore it
      if (code < base || code > base + 26) {
        return char;
      }

      // otherwise convert it
      let difference = code - base;
      if (encrypt === true) {
        difference = difference + numShift;
      } else {
        difference = difference - numShift;
      }

      // in case shift takes the value past Z, cycle back to the beginning
      difference = difference % 26;

      // convert it back to a character
      const shiftedChar = String.fromCharCode(base + difference);
      return shiftedChar;
    })
    .join('');
  return cipher;
}

module.exports = { caesarCipher };
